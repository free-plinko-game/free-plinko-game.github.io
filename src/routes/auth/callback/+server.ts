import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const code = url.searchParams.get('code');

	// If there's no code, redirect to home
	if (!code) {
		throw redirect(303, '/');
	}

	// Redirect to home page with the code as a query param
	// The client-side code will handle the session exchange
	throw redirect(303, `/?code=${code}`);
};
