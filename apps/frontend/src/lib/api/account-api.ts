import { HOST } from '$lib/constants/config';
import type { Account } from '@prisma/client';
import type { Prisma } from '@webrevived/types/prisma';
import type { AccountApi } from '@webrevived/types/account';

const getAccounts = async () => {
	const response = await fetch(`${HOST}/account`, {
		credentials: 'include'
	});

	return await response.json();
};

const getAccountByID = async (id: number, include?: Prisma.AccountInclude) => {
	const URLParams = new URLSearchParams();

	if (include) {
		Object.entries(include).forEach(([key, value]) => {
			URLParams.set(key, String(value));
		});
	}

	const response = await fetch(`${HOST}/account/${id}?${URLParams.toString()}`);
	const result = await response.json();

	return result;
};

const postAccount = async (account: AccountApi.PutBody) => {
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

const putAccount = async (id: number, account: AccountApi.PutBody) => {
	try {
		const response = await fetch(`${HOST}/account/${id}`, {
			method: 'PUT',
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

export default { getAccounts, postAccount, putAccount };
