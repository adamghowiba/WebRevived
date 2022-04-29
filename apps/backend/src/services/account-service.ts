/* eslint-disable @typescript-eslint/no-unsafe-argument */
import prisma from '@controllers/db-controller';
import { DatabaseError } from '@errors/DatabaseError';
import { Address } from '@type/account';

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
export const getAccountByID = async (id: number) => {
	const account = await prisma.account.findUnique({
		where: {
			id
		}
	});

	return account;
};

/* POST New Account */
export const createAccount = async (
	name: string,
	phone: string = undefined,
	industry: string = undefined,
	address: Address = undefined
) => {
	try {
		const accounteCreated = await prisma.account.create({
			data: {
				name,
				phone,
				industry,
				street: address?.street,
				city: address?.city,
				state: address?.state,
				code: address?.code,
				country: address?.country
			}
		});
		return accounteCreated;
	} catch (error) {
		throw new DatabaseError(error);
	}
};

/* UPDATE Account */
export const updateAccount = async () => {};

/* DELETE Account */
export const deleteAccount = async () => {};
