import type { PageLoad } from './$types';
import { foods, categories, tags } from '../lib/data';
export const prerender = true;

export const load: PageLoad = () => {
	return {
		foods,
		categories,
		tags
	};
};
