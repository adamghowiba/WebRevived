export interface Service {
	id: string;
	name: string;
	header: {
		title: string;
		subtitle: string;
		imgSrc: string;
	};
	description: string;
	images: [string, string];
	approach: string;
	capabilities: {
		description: string;
		listItems: string[];
	};
}
