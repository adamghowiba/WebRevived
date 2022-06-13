import { HOST } from '$lib/constants/config';
import type { Account } from '$lib/types/account';

const getAccounts = async () => {
	const response = await fetch(`${HOST}/account`, {
		credentials: 'include'
	})

	return await response.json();
}

const getAccountByID = async (id: number) => {
	const response = await fetch(`${HOST}/account/${id}`);
	const result = await response.json();

	return result;
}

const postAccount = async (account: Account) => {
	try {
		const response = await fetch(`${HOST}/account`, {
			method: 'POST',
			body: JSON.stringify(account),
			credentials: 'include',
			headers: {
				'content-type': 'application/json'
			}
		});

		return await response.json();
	} catch (error) {
		return error;
	}
};

export default { getAccounts, postAccount };
