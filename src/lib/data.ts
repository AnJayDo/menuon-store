import type { ICategory, IFoodItem, ITag } from 'interfaces';

export const foods: IFoodItem[] = [
	{
		name: 'Edamame',
		description: 'Đậu nành Nhật',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 40,
		tags: ['1'],
		categories: ['1']
	},
	{
		name: 'Seasoned seaweed',
		description: 'Rong biển',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 40,
		tags: ['1'],
		categories: ['1']
	},
	{
		name: 'Miso corn',
		description: 'Bắp, hành tây, miso, bơ lạt',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 40,
		tags: ['1'],
		categories: ['1']
	},
	{
		name: 'Cold tofu',
		description: 'Đậu hủ, cá bào, rong biển',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 40,
		tags: ['1'],
		categories: ['1']
	},
	{
		name: "Stumble's tofu",
		description: 'Đậu hủ, hành tây, trứng',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 50,
		tags: ['1'],
		categories: ['1']
	},
	{
		name: 'Seasoned French fried',
		description: 'Khoai tây chiên',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 50,
		tags: ['1'],
		categories: ['1']
	},
	{
		name: 'Mandu',
		description: 'Bánh xếp Hàn Quốc',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 20,
		tags: ['1'],
		categories: ['1']
	},
	{
		name: 'Ramen egg',
		description: 'Trứng ngâm tương',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 20,
		tags: ['1'],
		categories: ['1']
	},

	{
		name: 'Mapo tofu',
		description: 'Đậu hủ, thịt băm, xuyên tiêu',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 90,
		tags: ['2'],
		categories: ['1']
	},
	{
		name: 'Chicken teriyaki',
		description: 'Gà, sốt teriyaki, bắp cải',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 90,
		tags: ['2'],
		categories: ['1']
	},
	{
		name: 'Sweet and sour chicken cartilage',
		description: 'Sụn gà, hành tây',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 90,
		tags: ['2'],
		categories: ['1']
	},
	{
		name: 'Cheesy chicken wings',
		description: 'Cánh gà, mozzarella',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 80,
		tags: ['2'],
		categories: ['1']
	},
	{
		name: 'Stir-fry kimchi',
		description: 'Gan mề gà, kimchi, bắp cải',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 70,
		tags: ['2'],
		categories: ['1']
	},
	{
		name: 'Pan-fry chicken',
		description: 'Gà, bắp',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 90,
		tags: ['2'],
		categories: ['1']
	},
	{
		name: 'Mozzarella beef rolls',
		description: 'Bò, mozzarella',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 80,
		tags: ['2'],
		categories: ['1']
	},

	{
		name: 'Sausage',
		description: 'Xúc xích, bắp cải',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 90,
		tags: ['3'],
		categories: ['1']
	},
	{
		name: 'Tempura',
		description: 'Bí đỏ, khoai lang, cà tím',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 90,
		tags: ['3'],
		categories: ['1']
	},
	{
		name: 'Tonkatsu',
		description: 'Thăn bò, bắp cải',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 90,
		tags: ['3'],
		categories: ['1']
	},
	{
		name: 'Karaage',
		description: 'Gà, bắp cải',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 90,
		tags: ['3'],
		categories: ['1']
	},
	{
		name: 'Skewer',
		description: 'Xiên gà',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 25,
		tags: ['4'],
		categories: ['1']
	},

	{
		name: 'Raw egg rice',
		description: 'Cơm, lòng đỏ sống trứng gà Nhật + canh miso',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 70,
		tags: ['5'],
		categories: ['1']
	},
	{
		name: 'Curry rice with egg',
		description: 'Cơm, cà ri Nhật, khoai tây, cà rốt, thịt băm, trứng',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 120,
		tags: ['5'],
		categories: ['1']
	},
	{
		name: 'Katsudon',
		description: 'Cơm, thăn heo chiên xù, hành tây',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 120,
		tags: ['5'],
		categories: ['1']
	},
	{
		name: 'Gyudon',
		description: 'Cơm, bò, hành tây, kimchi',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 120,
		tags: ['5'],
		categories: ['1']
	},
	{
		name: 'Curry katsudon',
		description: 'Cơm, cà ri, khoai tây, cà rốt, thăn heo chiên xù',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 120,
		tags: ['5'],
		categories: ['1']
	},
	{
		name: 'Care udon',
		description: 'Mì udon, cà ri Nhật, khoai tây, cà rốt, thịt heo xay',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 120,
		tags: ['5'],
		categories: ['1']
	},
	{
		name: 'Miso soup',
		description: 'Sốt miso, đậu hủ, rong biển',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 30,
		tags: ['6'],
		categories: ['1']
	},
	{
		name: 'Kimchi hotpot',
		description: 'Kimchi, ba chỉ bò, đậu hủ',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 150,
		tags: ['6'],
		categories: ['1']
	},

	{
		name: 'Sapporo',
		description: '',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 50,
		tags: ['7'],
		categories: ['1']
	},
	{
		name: 'Tsingtao',
		description: '',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 60,
		tags: ['7'],
		categories: ['1']
	},
	{
		name: '1664 blanc',
		description: '',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 60,
		tags: ['7'],
		categories: ['1']
	},

	{
		name: 'Negroni',
		description: 'Sui Gin | Campari | Rosso',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 140,
		tags: ['9'],
		categories: ['1']
	},
	{
		name: 'Whisky HighBall',
		description: 'Black Nikka | Seltzer',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 135,
		tags: ['9'],
		categories: ['1']
	},
	{
		name: 'Old Fashioned',
		description: 'Black Nikka | Antostura Bitter | Sugar | Seltzer',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 135,
		tags: ['9'],
		categories: ['1']
	},
	{
		name: 'Fernandito',
		description: 'Fernet Branca | Lime | Coke',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 140,
		tags: ['9'],
		categories: ['1']
	},
	{
		name: 'Cassic Spritz',
		description: 'Creme de cassic | Seltzer',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 140,
		tags: ['9'],
		categories: ['1']
	},
	{
		name: 'G &amp; T',
		description: 'Sui Gin | Tonic | Lime',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 135,
		tags: ['9'],
		categories: ['1']
	},
	{
		name: 'Umeshu &amp; Tonic',
		description: 'Umeshu | Tonic | Lime',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 135,
		tags: ['9'],
		categories: ['1']
	},
	{
		name: 'Jack &amp; Coke',
		description: 'Jack Daniel | Lime | Coke',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 135,
		tags: ['9'],
		categories: ['1']
	},
	{
		name: 'Cuba Libre',
		description: 'Gold Rum | Lime | Coke',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 135,
		tags: ['9'],
		categories: ['1']
	},
	{
		name: 'Persian',
		description: 'Sui Gin | Pomergranate | Lime | Tonic',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 140,
		tags: ['9'],
		categories: ['1']
	},
	{
		name: 'Coke',
		description: '',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 20,
		tags: ['10'],
		categories: ['1']
	},
	{
		name: 'Dasani',
		description: '',
		size: '300g',
		imageSrc: '',
		originalPrice: 0,
		price: 15,
		tags: ['10'],
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
		ifOnlyFoods: false
	}
];

export const tags: ITag[] = [
	{
		id: '1',
		name: 'Small dishes',
		imageSrc: '',
		categories: ['1']
	},
	{
		id: '2',
		name: 'To share',
		imageSrc: '',
		categories: ['1']
	},
	{
		id: '3',
		name: 'Deep fried',
		imageSrc: '',
		categories: ['1']
	},
	{
		id: '4',
		name: 'Yakitori',
		imageSrc: '',
		categories: ['1']
	},
	{
		id: '5',
		name: 'Main dishes',
		imageSrc: '',
		categories: ['1']
	},
	{
		id: '6',
		name: 'Other',
		imageSrc: '',
		categories: ['1']
	},

	{
		id: '7',
		name: 'Beer',
		imageSrc: '',
		categories: ['2']
	},
	{
		id: '8',
		name: 'Shot | Bottle ',
		imageSrc: '',
		categories: ['2']
	},
	{
		id: '9',
		name: 'Classic Cocktail',
		imageSrc: '',
		categories: ['2']
	},
	{
		id: '10',
		name: 'Soft drink',
		imageSrc: '',
		categories: ['2']
	}
];
