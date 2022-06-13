import { Contact } from './contact';
export interface Account {
	id?: number;
	name: string;
	industry: string;
	phone: string;
	street: string;
	city: string;
	state: string;
	code: string;
	country: string;
	contacts?: Contact[]
}