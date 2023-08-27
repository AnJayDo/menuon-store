import type { ICategory, IFoodItem, ITag } from 'interfaces';

export const foods: IFoodItem[] = [
	{
		name: 'Care udon',
		description: 'Mì udon, thịt heo xay, khoai tây, cà rốt, cà ri Nhật',
		size: '300g',
		imageSrc: '370604318_673509874691550_3296238478479904712_n.jpg',
		originalPrice: 15,
		price: 10,
		tags: ['1'],
		categories: ['1']
	},
	{
		name: 'Gyudon',
		description: 'Cơm, ba chỉ bò, hành tây, kimchi',
		size: '300g',
		imageSrc: '370259580_3527186410885340_2019666133352764717_n.jpg',
		originalPrice: 0,
		price: 10,
		tags: ['1'],
		categories: ['1']
	},
	{
		name: 'Mapo tofu',
		description: 'Đậu hủ, thịt heo xay, xuyên tiêu',
		size: '300g',
		imageSrc: '369950172_335510652240011_1085990781119577424_n.jpg',
		originalPrice: 0,
		price: 10,
		tags: ['1'],
		categories: ['1']
	},
	{
		name: 'Pan-fry chicken',
		description: 'Gà, bắp ngọt, tỏi, hành tây',
		size: '300g',
		imageSrc: '370270275_1229658948428213_8852731495488633420_n.jpg',
		originalPrice: 0,
		price: 10,
		tags: ['1'],
		categories: ['1']
	}
];

export const categories: ICategory[] = [
	{
		id: '1',
		title: 'Foods',
		ifOnlyFoods: false
	},
	{
		id: '2',
		title: 'Drinks',
		ifOnlyFoods: true
	},
	{
		id: '3',
		title: 'Combo',
		ifOnlyFoods: true
	}
];

export const tags: ITag[] = [
	{
		id: '1',
		name: 'Hot meals',
		imageSrc: '/hot-meals.jpg',
		categories: ['1']
	},
	{
		id: '2',
		name: 'Salads',
		imageSrc: '/salads.jpg',
		categories: ['1']
	}
];
