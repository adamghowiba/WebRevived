import { NextFunction, Request, Response } from 'express';
import { catchAsync } from '@utils/error-utils';
import { accountService, websiteService } from '@services';
import { accountRequestBody } from '@validation/account-validation';
import ApiError from '@errors/ApiError';

/* GET All Accounts */
export const getAllAccounts = catchAsync(async (req: Request, res: Response) => {
	const allAccounts = await accountService.getAllAccounts();

	return res.json(allAccounts);
});

/* GET Specfic Account */
export const getAccountByID = catchAsync(async (req: Request, res: Response) => {
	const id = parseInt(req.body.account_id, 10);
	if (!id) throw new ApiError('account_id is required');

	const account = await accountService.getAccountByID(id);

	res.json(account);
});

/* POST New Account */
export const postAccount = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
	const { name, phone } = req.body;
	const { error } = accountRequestBody.validate(req.body);

	if (error) throw new ApiError(error.message, 505);

	const createdAccount = await accountService.createAccount(name, phone);

	res.json(createdAccount);
});

/* UPDATE Account */
export const putAccount = catchAsync(async (req: Request, res: Response) => {});

/* DELETE Account */
export const deleteAccount = catchAsync(async (req: Request, res: Response) => {});
