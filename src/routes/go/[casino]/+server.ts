import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

// Mapping of casino slugs to environment variable names
const casinoEnvMap: Record<string, string> = {
  'mafia-casino': 'AFFILIATE_MAFIA_CASINO',
  'casinochan': 'AFFILIATE_CASINOCHAN',
  'joe-fortune': 'AFFILIATE_JOE_FORTUNE'
};

// Fallback URLs (non-tracking) - used if env vars not set
const fallbackUrls: Record<string, string> = {
  'mafia-casino': 'https://mafiacasino.com',
  'casinochan': 'https://www.casinochan.com',
  'joe-fortune': 'https://www.joefortune.com'
};

export const GET: RequestHandler = async ({ params }) => {
  const casino = params.casino;

  if (!casino || !casinoEnvMap[casino]) {
    // Unknown casino, redirect to best-casinos page
    throw redirect(302, '/best-casinos');
  }

  const envVarName = casinoEnvMap[casino];
  const trackingUrl = env[envVarName];

  // Use tracking URL if set, otherwise fall back to direct URL
  const targetUrl = trackingUrl || fallbackUrls[casino];

  throw redirect(302, targetUrl);
};
