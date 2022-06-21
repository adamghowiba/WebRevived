/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import prisma from '@common/db';
import { DatabaseError } from '@errors/DatabaseError';
import { Account, Prisma } from '@prisma/client';
import { AccountApi } from '@webrevived/types/account';
import { transformIdsArray } from '@utils/transforms';
import { connectIds } from '../../../utils/transforms';

/* GET All Accounts */
export const getAllAccounts = async (limit = 30) => {
	const page = 0;

	const accounts = await prisma.account.findMany({
		skip: page * limit,
		take: limit
	});

	return accounts;
};

/* GET Specfic Account */
export const getAccountByID = async (id: number, include?: Prisma.AccountInclude) => {
	const account = await prisma.account.findUnique({
		where: {
			id
		},
		include: include
	});

	return account;
};

/* POST New Account */
export const createAccount = async (account: Account) => {
	try {
		const accounteCreated = await prisma.account.create({
			data: account
		});
		return accounteCreated;
	} catch (error: any) {
		throw new DatabaseError(error);
	}
};

/* UPDATE Account */
export const updateAccount = async (id: number, account: AccountApi.PutBody) => {
	try {
		const updatedAccount = await prisma.account.update({
			where: { id },
			data: {
				...account,
				users: connectIds(account.users),
				websites: connectIds(account.websites),
				projects: connectIds(account.projects),
			}
		});

		return updatedAccount;
	} catch (error: any) {
		throw new DatabaseError(error);
	}
};

/* DELETE Account */
export const deleteAccount = async () => {};
