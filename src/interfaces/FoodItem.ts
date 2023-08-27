interface IFoodItem {
	name: string;
	imageSrc: string;
	description: string;
	size: string;
	originalPrice: number;
	price: number;
	tags: string[];
	categories: string[];
}

export default IFoodItem;
