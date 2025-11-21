# 🔒 Security Fix for Client-Side Profit Manipulation

## 🚨 Vulnerability Discovered

A software engineer found that they could intercept API requests and modify the `profit` field to submit fraudulent values (e.g., changing profit to $99,999).

## 🛡️ Fix Applied

### Database-Level Protection

The fix implements **multiple layers of server-side validation**:

1. **Generated Column** - `profit` is now auto-calculated by PostgreSQL as `(result_amount - bet_amount)`. Clients cannot override this value.

2. **Constraints** - Added CHECK constraints:
   - `bet_amount` must be between $0 and $1,000,000
   - `result_amount` must be between $0 and $100,000,000

3. **Validation Trigger** - A database trigger validates all inserts to ensure:
   - User can only insert sessions for their own `user_id`
   - Bet and result amounts are within reasonable ranges

4. **Rate Limiting** - Users are limited to 60 session submissions per minute to prevent spam/bot attacks

5. **RLS Policies** - Tightened Row Level Security:
   - Users can only INSERT their own sessions
   - UPDATE and DELETE operations are blocked entirely
   - SELECT is public (for leaderboards)

### Client-Side Changes

- Updated `SessionLogger.svelte` to **no longer send `profit` field**
- Profit is now calculated server-side only

## 📋 How to Apply This Fix

### Step 1: Run the SQL Migration

Go to your Supabase dashboard:
1. Navigate to **SQL Editor**
2. Open the file `supabase-security-fix.sql`
3. Copy the entire contents
4. Paste into SQL Editor and click **Run**

### Step 2: Deploy the Code Changes

The code has already been updated in `src/lib/components/SessionLogger.svelte`. Just commit and push:

```bash
git add .
git commit -m "Security fix: Prevent client-side profit manipulation"
git push
```

### Step 3: Test the Fix

Try to submit a fraudulent session:

1. Open browser DevTools (F12)
2. Go to Network tab
3. Submit a session
4. Right-click the request → Copy as fetch
5. Paste into console and modify the profit value
6. Run the modified request

**Expected result**: The request should either:
- Ignore the profit field (since it's auto-calculated)
- Return an error if you try to force it

### Step 4: Audit Existing Data

Check for suspicious sessions:

```sql
-- Find sessions with impossibly high profits
SELECT
  user_id,
  display_name,
  bet_amount,
  result_amount,
  profit,
  created_at
FROM sessions
WHERE profit > 100000 -- Adjust threshold as needed
ORDER BY profit DESC
LIMIT 50;
```

If you find fraudulent entries, you can delete them:

```sql
-- Delete specific fraudulent sessions
DELETE FROM sessions
WHERE id = 'session-id-here';

-- Or bulk delete by user_id if someone abused the system
DELETE FROM sessions
WHERE user_id = 'user-id-here'
  AND profit > 100000;
```

## 🔍 What Changed

### Before (Vulnerable)
```javascript
const { error } = await supabase.from('sessions').insert({
  user_id: user.id,
  bet_amount: betAmount,
  result_amount: resultAmount,
  profit: profit  // ❌ Attacker can change this value
});
```

### After (Secure)
```javascript
const { error } = await supabase.from('sessions').insert({
  user_id: user.id,
  bet_amount: betAmount,
  result_amount: resultAmount
  // ✅ profit is auto-calculated by database
});
```

## 🎯 Attack Prevention

This fix prevents:
- ✅ Modifying profit values in browser DevTools
- ✅ Intercepting/editing API requests with tools like Burp Suite
- ✅ Creating fake sessions for other users
- ✅ Submitting impossibly large profit values
- ✅ Bot/spam attacks (rate limited to 60/min)
- ✅ Updating or deleting historical sessions

## ⚠️ Important Notes

1. **Existing Data**: This fix only protects NEW sessions. You should audit and clean up any existing fraudulent data.

2. **Rate Limits**: The 60 sessions/minute limit should be fine for normal users. Adjust if needed:
   ```sql
   -- To change rate limit to 100/minute
   -- Edit the check_session_rate_limit() function
   IF recent_count >= 100 THEN  -- Change from 60 to 100
   ```

3. **Leaderboard**: After applying this fix and cleaning up fraud, you may want to reset the leaderboard or add a "Season 2" that starts fresh.

4. **Future Features**: If you add more game modes or calculations, always validate them **server-side**, never trust client data.

## 🚀 Additional Hardening (Optional)

For extra security, consider:

1. **Add a max profit per session constraint**:
   ```sql
   ALTER TABLE sessions ADD CONSTRAINT max_profit_per_session
     CHECK (profit <= bet_amount * 1000);  -- Max 1000x multiplier
   ```

2. **Log failed attempts**:
   ```sql
   CREATE TABLE security_events (
     id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
     user_id uuid REFERENCES auth.users(id),
     event_type text,
     details jsonb,
     created_at timestamptz DEFAULT now()
   );
   ```

3. **Add IP-based rate limiting** (requires Supabase Edge Functions)

4. **Add anomaly detection** to flag suspicious patterns
