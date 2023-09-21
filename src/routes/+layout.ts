// import * as db from '$lib/server/database';
import type { IStore } from '../interfaces';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	return {
		storeData: {
			name: 'Izakaya Stumble',
			slug: 'stumble',
			avatar: '/avatar.jpg',
			cover: '/cover.jpg',
			phoneNumber: '0988878880',
			location: '57 Lý Tự Trọng, Da Nang, Vietnam',
			wifiName: 'Izakaya Stumble',
			wifiPassword: 'Lytutrong57',
			description: '',
			primaryColor: '#777777',
			secondaryColor: '#777777'
		} as IStore
	};
};
