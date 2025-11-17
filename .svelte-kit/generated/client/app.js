export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/best-casinos": [3],
		"/dashboard": [4],
		"/dashboard/history": [5],
		"/dashboard/stats": [6],
		"/how-to-play": [7],
		"/leaderboard": [8],
		"/plinko-strategy": [9],
		"/plinko-vs-slots": [10],
		"/reviews": [11],
		"/reviews/bc-game": [12],
		"/reviews/betplay": [13],
		"/reviews/casinochan": [14],
		"/reviews/duelbits": [15],
		"/reviews/fairgo": [16],
		"/reviews/joe-fortune": [17],
		"/reviews/rollbit": [18],
		"/reviews/roobet": [19],
		"/reviews/stake": [20]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));
export const encoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.encode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.svelte';