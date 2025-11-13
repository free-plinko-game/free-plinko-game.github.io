import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  return resolve(event, {
    transformPageChunk: ({ html }) => {
      // SvelteKit will inline critical CSS automatically in production
      return html;
    }
  });
};
