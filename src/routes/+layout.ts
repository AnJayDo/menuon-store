// import * as db from '$lib/server/database';
import type { IStore } from '../interfaces';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	return {
		storeData: {
			name: 'Izakaya Stumble',
			slug: 'stumble',
			avatar: '/avatar.png',
			cover: '/cover.jpg',
			qrCode: '/stumble.menuon.site.svg',
			phoneNumber: '0988878880',
			location: '19 Phan Kế Bính, Da Nang, Vietnam',
			locationHref:
				'https://www.google.com/maps/place/Izakaya+Stumble/@16.0824997,108.2183304,18z/data=!4m15!1m8!3m7!1s0x3142183ebce08409:0x3ade0e2dd255b4be!2zMTkgUGhhbiBL4bq_IELDrW5oLCBUaHXhuq1uIFBoxrDhu5tjLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!3b1!8m2!3d16.0823865!4d108.2191132!16s%2Fg%2F11hhv2gs4p!3m5!1s0x31421979102e2d51:0xb34b72deade7f891!8m2!3d16.0823865!4d108.2191132!16s%2Fg%2F11rz78md1k?entry=ttu',
			wifiName: 'Izakaya Stumble',
			wifiPassword: 'Lytutrong57',
			description: '',
			primaryColor: '#777777',
			secondaryColor: '#777777'
		} as IStore
	};
};
