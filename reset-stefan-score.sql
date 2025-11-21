-- Reset Stefan's (s.grigore) score to -1,000,000 as punishment for exploiting the game

-- Stefan's user_id: b6640aec-a1bd-4f58-8c59-64a48c3fbfd1

-- Step 1: Delete all existing sessions for Stefan
DELETE FROM sessions
WHERE user_id = 'b6640aec-a1bd-4f58-8c59-64a48c3fbfd1';

-- Step 2: Insert a single "punishment" session with -1,000,000 profit
-- Since profit = result_amount - bet_amount
-- We need: 0 - 1,000,000 = -1,000,000
INSERT INTO sessions (
  user_id,
  display_name,
  casino,
  risk_level,
  bet_amount,
  result_amount,
  created_at
) VALUES (
  'b6640aec-a1bd-4f58-8c59-64a48c3fbfd1',
  's.grigore',
  'Stake',
  'high',
  1000000,  -- Bet $1,000,000
  0,        -- Won $0 (total loss)
  NOW()     -- profit will be auto-calculated as 0 - 1,000,000 = -1,000,000
);

-- Verify the result
SELECT
  display_name,
  bet_amount,
  result_amount,
  profit,
  created_at
FROM sessions
WHERE user_id = 'b6640aec-a1bd-4f58-8c59-64a48c3fbfd1';
