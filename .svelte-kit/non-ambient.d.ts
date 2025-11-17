
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/best-casinos" | "/dashboard" | "/dashboard/history" | "/dashboard/profile" | "/dashboard/stats" | "/how-to-play" | "/leaderboard" | "/plinko-strategy" | "/plinko-vs-slots" | "/reviews" | "/reviews/bc-game" | "/reviews/betplay" | "/reviews/casinochan" | "/reviews/duelbits" | "/reviews/fairgo" | "/reviews/joe-fortune" | "/reviews/rollbit" | "/reviews/roobet" | "/reviews/stake";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/best-casinos": Record<string, never>;
			"/dashboard": Record<string, never>;
			"/dashboard/history": Record<string, never>;
			"/dashboard/profile": Record<string, never>;
			"/dashboard/stats": Record<string, never>;
			"/how-to-play": Record<string, never>;
			"/leaderboard": Record<string, never>;
			"/plinko-strategy": Record<string, never>;
			"/plinko-vs-slots": Record<string, never>;
			"/reviews": Record<string, never>;
			"/reviews/bc-game": Record<string, never>;
			"/reviews/betplay": Record<string, never>;
			"/reviews/casinochan": Record<string, never>;
			"/reviews/duelbits": Record<string, never>;
			"/reviews/fairgo": Record<string, never>;
			"/reviews/joe-fortune": Record<string, never>;
			"/reviews/rollbit": Record<string, never>;
			"/reviews/roobet": Record<string, never>;
			"/reviews/stake": Record<string, never>
		};
		Pathname(): "/" | "/best-casinos" | "/best-casinos/" | "/dashboard" | "/dashboard/" | "/dashboard/history" | "/dashboard/history/" | "/dashboard/profile" | "/dashboard/profile/" | "/dashboard/stats" | "/dashboard/stats/" | "/how-to-play" | "/how-to-play/" | "/leaderboard" | "/leaderboard/" | "/plinko-strategy" | "/plinko-strategy/" | "/plinko-vs-slots" | "/plinko-vs-slots/" | "/reviews" | "/reviews/" | "/reviews/bc-game" | "/reviews/bc-game/" | "/reviews/betplay" | "/reviews/betplay/" | "/reviews/casinochan" | "/reviews/casinochan/" | "/reviews/duelbits" | "/reviews/duelbits/" | "/reviews/fairgo" | "/reviews/fairgo/" | "/reviews/joe-fortune" | "/reviews/joe-fortune/" | "/reviews/rollbit" | "/reviews/rollbit/" | "/reviews/roobet" | "/reviews/roobet/" | "/reviews/stake" | "/reviews/stake/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/admin/config.yml" | "/admin/index.html" | "/android-chrome-192x192.png" | "/android-chrome-512x512.png" | "/apple-touch-icon.png" | "/da72498d-543a-4c19-a50b-23339894b828.html" | "/favicon-16x16.png" | "/favicon-32x32.png" | "/favicon.ico" | "/favicon.svg" | "/google63a521b1988d19c1.html" | "/logo.svg" | "/logos/.DS_Store" | "/logos/README.md" | "/logos/bcgame.png" | "/logos/bcgame.svg" | "/logos/betplay.svg" | "/logos/casinochan.svg" | "/logos/duelbits.svg" | "/logos/fairgo.svg" | "/logos/joefortune.svg" | "/logos/rollbit.svg" | "/logos/roobet.svg" | "/logos/stake.svg" | "/robots.txt" | "/site.webmanifest" | "/sitemap.xml" | string & {};
	}
}