interface IStore {
	name: string;
	slug: string;
	avatar: string;
	cover: string;
	qrCode: string;
	phoneNumber: string;
	location: string;
	locationHref?: string;
	wifiName: string;
	wifiPassword: string;
	description: string;
	primaryColor: string;
	secondaryColor: string;
}

export default IStore;
