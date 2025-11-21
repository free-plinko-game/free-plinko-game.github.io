-- 🚨 URGENT: RUN THIS IMMEDIATELY TO STOP STEFAN 🚨
-- Copy this entire file and paste into Supabase SQL Editor, then click RUN

-- =============================================================================
-- PART 1: BAN STEFAN IMMEDIATELY
-- =============================================================================

-- Create banned_users table
CREATE TABLE IF NOT EXISTS banned_users (
  user_id uuid PRIMARY KEY,
  reason text,
  banned_at timestamptz DEFAULT NOW()
);

-- Ban Stefan's account
INSERT INTO banned_users (user_id, reason)
VALUES (
  'b6640aec-a1bd-4f58-8c59-64a48c3fbfd1',
  'Exploiting client-side validation to submit fraudulent profit values'
)
ON CONFLICT (user_id) DO NOTHING;

-- Delete all of Stefan's fraudulent sessions
DELETE FROM sessions
WHERE user_id = 'b6640aec-a1bd-4f58-8c59-64a48c3fbfd1';

-- =============================================================================
-- PART 2: FIX THE SECURITY VULNERABILITY (PROFIT COLUMN)
-- =============================================================================

-- Drop the profit column (we'll recreate it as auto-calculated)
ALTER TABLE sessions DROP COLUMN IF EXISTS profit;

-- Recreate profit as a GENERATED column (auto-calculated, cannot be overridden)
ALTER TABLE sessions ADD COLUMN profit NUMERIC GENERATED ALWAYS AS (result_amount - bet_amount) STORED;

-- =============================================================================
-- PART 3: ADD VALIDATION CONSTRAINTS
-- =============================================================================

-- Ensure reasonable bet and result amounts
ALTER TABLE sessions DROP CONSTRAINT IF EXISTS reasonable_bet_amount;
ALTER TABLE sessions DROP CONSTRAINT IF EXISTS reasonable_result_amount;

ALTER TABLE sessions
  ADD CONSTRAINT reasonable_bet_amount CHECK (bet_amount >= 0 AND bet_amount <= 1000000),
  ADD CONSTRAINT reasonable_result_amount CHECK (result_amount >= 0 AND result_amount <= 100000000);

-- =============================================================================
-- PART 4: PREVENT BANNED USERS FROM SUBMITTING SESSIONS
-- =============================================================================

CREATE OR REPLACE FUNCTION prevent_banned_user_sessions()
RETURNS TRIGGER AS $$
BEGIN
  IF EXISTS (SELECT 1 FROM banned_users WHERE user_id = NEW.user_id) THEN
    RAISE EXCEPTION 'User is banned from submitting sessions';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS check_banned_user_before_insert ON sessions;
CREATE TRIGGER check_banned_user_before_insert
  BEFORE INSERT ON sessions
  FOR EACH ROW
  EXECUTE FUNCTION prevent_banned_user_sessions();

-- =============================================================================
-- PART 5: ADD RATE LIMITING
-- =============================================================================

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

DROP TRIGGER IF EXISTS check_rate_limit_before_insert ON sessions;
CREATE TRIGGER check_rate_limit_before_insert
  BEFORE INSERT ON sessions
  FOR EACH ROW
  EXECUTE FUNCTION check_session_rate_limit();

-- =============================================================================
-- PART 6: VALIDATE SESSION DATA
-- =============================================================================

CREATE OR REPLACE FUNCTION validate_session_insert()
RETURNS TRIGGER AS $$
BEGIN
  -- Ensure user_id matches authenticated user
  IF NEW.user_id != auth.uid() THEN
    RAISE EXCEPTION 'Cannot insert session for another user';
  END IF;

  -- Validate bet amount
  IF NEW.bet_amount < 0 OR NEW.bet_amount > 1000000 THEN
    RAISE EXCEPTION 'Invalid bet amount';
  END IF;

  -- Validate result amount
  IF NEW.result_amount < 0 OR NEW.result_amount > 100000000 THEN
    RAISE EXCEPTION 'Invalid result amount';
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS validate_session_before_insert ON sessions;
CREATE TRIGGER validate_session_before_insert
  BEFORE INSERT ON sessions
  FOR EACH ROW
  EXECUTE FUNCTION validate_session_insert();

-- =============================================================================
-- PART 7: TIGHTEN RLS POLICIES
-- =============================================================================

-- Drop existing policies
DROP POLICY IF EXISTS "Users can insert own sessions" ON sessions;
DROP POLICY IF EXISTS "Users can view own sessions" ON sessions;
DROP POLICY IF EXISTS "No updates allowed" ON sessions;
DROP POLICY IF EXISTS "No deletes allowed" ON sessions;

-- Users can only insert their own sessions
CREATE POLICY "Users can insert own sessions" ON sessions
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Anyone can view sessions (for leaderboards)
CREATE POLICY "Users can view own sessions" ON sessions
  FOR SELECT
  USING (true);

-- Prevent updates
CREATE POLICY "No updates allowed" ON sessions
  FOR UPDATE
  USING (false);

-- Prevent deletes
CREATE POLICY "No deletes allowed" ON sessions
  FOR DELETE
  USING (false);

-- =============================================================================
-- PART 8: ADD HELPFUL INDEXES
-- =============================================================================

CREATE INDEX IF NOT EXISTS idx_sessions_profit ON sessions(profit DESC);
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_created_at ON sessions(created_at DESC);

-- =============================================================================
-- VERIFICATION
-- =============================================================================

-- Show banned users
SELECT 'BANNED USERS:' as status;
SELECT * FROM banned_users;

-- Show current leaderboard (Stefan should be gone)
SELECT 'CURRENT LEADERBOARD (Top 5):' as status;
SELECT
  display_name,
  COUNT(*) as sessions,
  SUM(profit) as total_profit
FROM sessions
GROUP BY display_name, user_id
ORDER BY total_profit DESC
LIMIT 5;

-- Done!
SELECT '✅ SECURITY FIX APPLIED! Stefan is banned and vulnerability is patched.' as status;
