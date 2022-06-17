import ApiError from '@errors/ApiError';
import { Account } from '@prisma/client';
import { accountService } from '@services';
import { AccountApi } from '@type/account';
import { catchAsync } from '@utils/error-utils';
import accountValidation from '@api/v1/accounts/account-validation';
import { Request, Response } from 'express';
import { validateRequest } from '../../middlewears/validate';

/* GET All Accounts */
export const getAllAccounts = catchAsync(async (req: Request, res: Response) => {
	const allAccounts = await accountService.getAllAccounts();

	return res.json(allAccounts);
});

/* GET Specfic Account */
export const getAccountByID = catchAsync(async (req: AccountApi.GetRequest, res: Response) => {
	const id = parseInt(req.params.account_id, 10);
	if (!id) throw new ApiError('account_id is required');

	const { error, values } = validateRequest<AccountApi.GetRequest>(accountValidation.getByIdSchema, { req });
	if (error) throw new ApiError(error);

	const account = await accountService.getAccountByID(id, values.query);

	res.json(account);
});

/* POST New Account */
export const postAccount = catchAsync(async (req: Request<unknown, unknown, Account>, res: Response) => {
	const createdAccount = await accountService.createAccount(req.body);

	res.json(createdAccount);
});

/* UPDATE Account */
export const putAccount = catchAsync(async (req: AccountApi.PutRequest, res: Response) => {
	const accountId = parseInt(req.params.account_id);

	const updatedAccount = await accountService.updateAccount(accountId, req.body);
	res.json(updatedAccount);
});

/* DELETE Account */
export const deleteAccount = catchAsync(async (req: Request, res: Response) => {});

export default { deleteAccount, putAccount, postAccount, getAccountByID, getAllAccounts };
