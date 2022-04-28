import request from '$lib/api/request';

interface Account {
	id: number;
	name: string;
	industry: string;
	phone: string;
	street: string;
	city: string;
	state: string;
	code: string;
	country: string;
}

async function getAccounts() {
	const data = await request.get<Account[]>('/account');

	return data;
}

export default { getAccounts };
