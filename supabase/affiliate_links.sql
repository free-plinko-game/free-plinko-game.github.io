-- Affiliate Links Table
-- Run this in your Supabase SQL Editor to create the table

CREATE TABLE IF NOT EXISTS affiliate_links (
  slug TEXT PRIMARY KEY,
  url TEXT,
  fallback_url TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE affiliate_links ENABLE ROW LEVEL SECURITY;

-- Allow public read access (needed for redirects)
CREATE POLICY "Allow public read access" ON affiliate_links
  FOR SELECT USING (true);

-- Insert default entries (update the 'url' field with your tracking links)
INSERT INTO affiliate_links (slug, url, fallback_url) VALUES
  ('mafia-casino', NULL, 'https://mafiacasino.com'),
  ('casinochan', NULL, 'https://www.casinochan.com'),
  ('joe-fortune', NULL, 'https://www.joefortune.com')
ON CONFLICT (slug) DO NOTHING;

-- To update a tracking link, run:
-- UPDATE affiliate_links SET url = 'https://your-tracking-link.com/xxx' WHERE slug = 'mafia-casino';
