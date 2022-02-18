import prisma from '@controllers/db-controller';

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
export const getAccountByID = async () => {};

/* POST New Account */
export const createAccount = async () => {};

/* UPDATE Account */
export const updateAccount = async () => {};

/* DELETE Account */
export const deleteAccount = async () => {};
