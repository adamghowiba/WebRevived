/* eslint-disable @typescript-eslint/no-unsafe-argument */
import prisma from '@controllers/db-controller';
import { DatabaseError } from '@errors/DatabaseError';
import { Account } from '@prisma/client';
import Prisma from '@prisma/client';

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
export const updateAccount = async (id: number, account: Partial<Account>) => {
	try {
		const updatedAccount = await prisma.account.update({
			where: { id },
			data: account
		});

		return updatedAccount
	} catch (error) {
		throw new DatabaseError(error);
	}
};

/* DELETE Account */
export const deleteAccount = async () => {};
