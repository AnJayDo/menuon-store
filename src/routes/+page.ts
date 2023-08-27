import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	if (!params?.store) {
		throw redirect(307, '/stumble');
	}
}) satisfies PageLoad;
