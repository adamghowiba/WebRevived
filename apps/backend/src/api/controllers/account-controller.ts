import ApiError from '@errors/ApiError';
import { Account } from '@prisma/client';
import { accountService } from '@services';
import { catchAsync } from '@utils/error-utils';
import { Request, Response } from 'express';

/* GET All Accounts */
export const getAllAccounts = catchAsync(async (req: Request, res: Response) => {
	const allAccounts = await accountService.getAllAccounts();

	return res.json(allAccounts);
});

/* GET Specfic Account */
export const getAccountByID = catchAsync(async (req: Request, res: Response) => {
	const id = parseInt(req.params.account_id, 10);
	if (!id) throw new ApiError('account_id is required');

	const account = await accountService.getAccountByID(id, {contacts: true});

	res.json(account);
});

/* POST New Account */
export const postAccount = catchAsync(async (req: Request<unknown, unknown, Account>, res: Response) => {
	const createdAccount = await accountService.createAccount(req.body);

	res.json(createdAccount);
});

/* UPDATE Account */
type PutAccountRequest = Request<{account_id: number}, unknown, Partial<Account>>
export const putAccount = catchAsync(async (req: PutAccountRequest, res: Response) => {
	const accountId = req.params.account_id;

	const updatedAccount = await accountService.updateAccount(accountId, req.body);
	res.json(updatedAccount);
});

/* DELETE Account */
export const deleteAccount = catchAsync(async (req: Request, res: Response) => {});
