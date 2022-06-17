/* eslint-disable @typescript-eslint/no-unsafe-argument */
import prisma from '@common/db';
import { DatabaseError } from '@errors/DatabaseError';
import { Account } from '@prisma/client';
import Prisma from '@prisma/client';
import { AccountApi } from '@type/account';

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
export const getAccountByID = async (id: number, include?: Prisma.Prisma.AccountInclude) => {
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
	} catch (error) {
		throw new DatabaseError(error);
	}
};

/* UPDATE Account */
export const updateAccount = async (id: number, account: AccountApi.PutBody) => {
	const transformIds = (ids: number[]) => (ids?.length ? ids.map(id => ({ id })) : undefined);

	try {
		const updatedAccount = await prisma.account.update({
			where: { id },
			data: {
				...account,
				users: { connect: transformIds(account.users) },
				contacts: { connect: transformIds(account.users) }
			}
		});

		return updatedAccount;
	} catch (error) {
		throw new DatabaseError(error);
	}
};

export const updateAndConnectAccount = async (
	id: number,
	account: AccountApi.PutBody,
	connect: AccountApi.PutInclude
) => {
	const transformIds = (ids: number[]) => ids.map(id => ({ id }));

	const obj = {
		users: connect.users ? transformIds(connect.users) : undefined
	};

	try {
		const updatedAccount = await prisma.account.update({
			where: { id },
			data: { ...account, users: { connect: obj.users } }
		});

		return updatedAccount;
	} catch (error) {
		throw new DatabaseError(error);
	}
};

/* DELETE Account */
export const deleteAccount = async () => {};
