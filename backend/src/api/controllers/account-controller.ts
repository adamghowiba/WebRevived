import { Request, Response } from 'express';
import { catchAsync } from '@utils/ErrorUtil';

/* GET All Accounts */
export const getAllAccounts = catchAsync(async (req: Request, res: Response) => {
    res.send('Got all accounts')
});

/* GET Specfic Account */
export const getAccountByID = catchAsync(async (req: Request, res: Response) => {

});

/* POST New Account */
export const postAccount = catchAsync(async (req: Request, res: Response) => {
    
});

/* UPDATE Account */
export const putAccount = catchAsync(async (req: Request, res: Response) => {
    
});

/* DELETE Account */
export const deleteAccount = catchAsync(async (req: Request, res: Response) => {
    
});