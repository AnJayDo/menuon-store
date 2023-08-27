// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import type { PageLoad } from './$types';
import { foods, categories, tags } from '../../lib/data';
export const prerender = true;

export const load: PageLoad = () => {
	return {
		foods,
		categories,
		tags
	};
};
