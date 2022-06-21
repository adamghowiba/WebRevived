/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ApiError from '@errors/ApiError';
import { contactService, portalService, tokenService } from '@services';
import { sendEmail } from '@services/email-service';
import { catchAsync } from '@utils/error-utils';
import { Request, Response } from 'express';

export const getPortal = catchAsync(async (req: Request, res: Response) => {});

export const postPortal = catchAsync(async (req: Request<unknown, unknown, {accountId: string}>, res: Response) => {
	const accountId = +req.body.accountId;
	if (!accountId) throw new ApiError('Request body must have a {accountId: number}');

	const createdPortal = await portalService.createPortal(accountId);

	res.json(createdPortal);
});

export const putPortal = catchAsync(async (req: Request, res: Response) => {});
export const deletePortal = catchAsync(async (req: Request, res: Response) => {});

/* TOKEN & USEr */
export const postPortalContact = catchAsync(async (req: Request, res: Response) => {});

export const putContactToPortal = catchAsync(async (req: Request<unknown, unknown, {contactId: string}>, res: Response) => {
	const contactId = parseInt(req.body.contactId);
	if (!contactId) throw new ApiError('Request body must have a {contactId number}');

	return res.json(contactId);
});

export const sendPortalRequest = catchAsync(async (req: Request<unknown, unknown, {contactId: string}>, res: Response) => {
	const contactId = +req.body.contactId;
	if (!contactId) throw new ApiError('Request body must have a {contactId number}');

	const contact = await contactService.getContactByID(contactId);
	const portalRequest = await portalService.sendPortalRequest(contactId);

	if (!contact?.email) throw new ApiError('No emails available to send too.');

	await sendEmail('Create your new portal', [contact.email], `<h1> <a href="${'a'}"> Crate Portal </a> </h1>`);

	res.json(portalRequest);
});

export const verifyPortalSignup = catchAsync(async (req: Request, res: Response) => {
	const token = req.body.token;
	const today = new Date();
	if (!token) throw new ApiError('No portal token');
	
	const portalToken = await tokenService.checkPortalToken(token);
	if (!portalToken || portalToken.expiration_date < today) throw new ApiError('Invalid token', 400);

	res.json({ status: 'Sucess', message: 'Token found sucssfully', ...portalToken });
});

export default {
	verifyPortalSignup,
	sendPortalRequest,
	putContactToPortal,
	postPortalContact,
	deletePortal,
	putPortal,
	postPortal,
	getPortal
};
