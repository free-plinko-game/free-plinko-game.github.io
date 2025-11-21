-- EMERGENCY: Ban Stefan immediately and delete all fraudulent sessions
-- Run this RIGHT NOW in Supabase SQL Editor

-- Step 1: Create a banned_users table if it doesn't exist
CREATE TABLE IF NOT EXISTS banned_users (
  user_id uuid PRIMARY KEY,
  reason text,
  banned_at timestamptz DEFAULT NOW()
);

-- Step 2: Ban Stefan
INSERT INTO banned_users (user_id, reason)
VALUES (
  'b6640aec-a1bd-4f58-8c59-64a48c3fbfd1',
  'Exploiting client-side validation to submit fraudulent profit values'
)
ON CONFLICT (user_id) DO NOTHING;

-- Step 3: Delete ALL of Stefan's sessions
DELETE FROM sessions
WHERE user_id = 'b6640aec-a1bd-4f58-8c59-64a48c3fbfd1';

-- Step 4: Add a trigger to prevent banned users from inserting sessions
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

-- Step 5: Verify Stefan is gone
SELECT
  display_name,
  COUNT(*) as session_count,
  SUM(profit) as total_profit
FROM sessions
WHERE user_id = 'b6640aec-a1bd-4f58-8c59-64a48c3fbfd1'
GROUP BY display_name;
-- Should return 0 rows

-- Step 6: Show who is banned
SELECT * FROM banned_users;
