import { HOST } from '$lib/constants/config';
import type { Account } from '@prisma/client';
import type { Contact, Prisma, Project, User, Website } from '@webrevived/types/prisma';
import type { AccountApi } from '@webrevived/types/account';
import { generateUrlParams } from '../utils/api-utils';

const getAccounts = async () => {
	const response = await fetch(`${HOST}/account`, {
		credentials: 'include'
	});

	return await response.json();
};

type GetAccountResult = Account & {
	projects: Project[];
	contacts: Contact[];
	websites: Website[];
	users: User[];
};
const getAccountByID = async (
	id: number,
	include?: Prisma.AccountInclude
): Promise<GetAccountResult> => {
	const urlParams = generateUrlParams(include);

	const response = await fetch(`${HOST}/account/${id}${urlParams}`, { credentials: 'include' });
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

export default { getAccounts, postAccount, putAccount, getAccountByID };
