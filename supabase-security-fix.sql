-- Security Fix: Add server-side profit validation
-- This prevents clients from submitting fraudulent profit values

-- Step 1: Make profit a GENERATED column (automatically calculated)
-- First, drop the existing column
ALTER TABLE sessions DROP COLUMN IF EXISTS profit;

-- Add it back as a GENERATED column
ALTER TABLE sessions ADD COLUMN profit NUMERIC GENERATED ALWAYS AS (result_amount - bet_amount) STORED;

-- Step 2: Add constraints to prevent unreasonable values
ALTER TABLE sessions
  ADD CONSTRAINT reasonable_bet_amount CHECK (bet_amount >= 0 AND bet_amount <= 1000000),
  ADD CONSTRAINT reasonable_result_amount CHECK (result_amount >= 0 AND result_amount <= 100000000);

-- Step 3: Add an index for better query performance
CREATE INDEX IF NOT EXISTS idx_sessions_profit ON sessions(profit DESC);

-- Step 4: Update RLS policies to be more restrictive
-- Users can only insert their own sessions
DROP POLICY IF EXISTS "Users can insert own sessions" ON sessions;
CREATE POLICY "Users can insert own sessions" ON sessions
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can only view their own sessions (unless you want public leaderboards)
DROP POLICY IF EXISTS "Users can view own sessions" ON sessions;
CREATE POLICY "Users can view own sessions" ON sessions
  FOR SELECT
  USING (true); -- Keep public for leaderboards

-- Prevent updates and deletes
DROP POLICY IF EXISTS "No updates allowed" ON sessions;
CREATE POLICY "No updates allowed" ON sessions
  FOR UPDATE
  USING (false);

DROP POLICY IF EXISTS "No deletes allowed" ON sessions;
CREATE POLICY "No deletes allowed" ON sessions
  FOR DELETE
  USING (false);

-- Step 5: Create a function to validate session inserts
CREATE OR REPLACE FUNCTION validate_session_insert()
RETURNS TRIGGER AS $$
BEGIN
  -- Ensure user_id matches authenticated user
  IF NEW.user_id != auth.uid() THEN
    RAISE EXCEPTION 'Cannot insert session for another user';
  END IF;

  -- Validate bet amount is reasonable
  IF NEW.bet_amount < 0 OR NEW.bet_amount > 1000000 THEN
    RAISE EXCEPTION 'Invalid bet amount';
  END IF;

  -- Validate result amount is reasonable
  IF NEW.result_amount < 0 OR NEW.result_amount > 100000000 THEN
    RAISE EXCEPTION 'Invalid result amount';
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to run validation
DROP TRIGGER IF EXISTS validate_session_before_insert ON sessions;
CREATE TRIGGER validate_session_before_insert
  BEFORE INSERT ON sessions
  FOR EACH ROW
  EXECUTE FUNCTION validate_session_insert();

-- Step 6: Add rate limiting (optional - prevents spam attacks)
-- Create a function to check if user is submitting too many sessions
CREATE OR REPLACE FUNCTION check_session_rate_limit()
RETURNS TRIGGER AS $$
DECLARE
  recent_count INTEGER;
BEGIN
  -- Count sessions from this user in the last minute
  SELECT COUNT(*) INTO recent_count
  FROM sessions
  WHERE user_id = NEW.user_id
    AND created_at > NOW() - INTERVAL '1 minute';

  -- If more than 60 sessions per minute, reject
  IF recent_count >= 60 THEN
    RAISE EXCEPTION 'Rate limit exceeded. Maximum 60 sessions per minute.';
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for rate limiting
DROP TRIGGER IF EXISTS check_rate_limit_before_insert ON sessions;
CREATE TRIGGER check_rate_limit_before_insert
  BEFORE INSERT ON sessions
  FOR EACH ROW
  EXECUTE FUNCTION check_session_rate_limit();

COMMENT ON COLUMN sessions.profit IS 'Automatically calculated as result_amount - bet_amount. Cannot be set manually.';
