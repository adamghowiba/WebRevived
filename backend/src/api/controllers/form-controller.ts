import { NextFunction, Request, Response } from 'express';
import { catchAsync } from '@utils/error-utils';
import { formService } from '@services';
import { accountRequestBody } from '@validation/account-validation';
import ApiError from '@errors/ApiError';
import { sendEmail, sendFormEmail } from '@services/email-service';
import { formPost } from '@validation/form-validation';
import { FormPostRequest } from '../../types/form-api';

/* GET All Forms */
export const getAllForms = catchAsync(async (req: Request, res: Response) => {
	const forms = await formService.getAllForms();

	return res.json(forms);
});

/* GET Specfic Form */
export const getFormByID = catchAsync(async (req: Request, res: Response) => {});

/* POST New Form */
export const postForm = catchAsync(async (req: FormPostRequest, res: Response) => {
	const websiteId = parseInt(req.params.websiteId);
	if (!websiteId) throw new ApiError('Missing website id paramter');

	const { error } = formPost.validate(req.body);
	if (error) return res.json(error.message);

	const createdForm = await formService.createForm(req.body.name, websiteId, req.body.contactIds);
	return res.json(createdForm);
});

/* UPDATE Form */
export const putForm = catchAsync(async (req: Request, res: Response) => {});

/* DELETE Form */
export const deleteForm = catchAsync(async (req: Request, res: Response) => {});

/* --------------------------------------------------------------------------------- */

/* GET Form Submissions */
export const getFormSubmissions = catchAsync(async (req: Request, res: Response) => {
	const formId = parseInt(req.params.id);

	if (!formId) throw new ApiError('"formId" must be valid');

	const submissions = await formService.getFormSubmissions(formId);

	return res.json(submissions);
});

/* POST Form Submissions */
export const postFormSubmission = catchAsync(async (req: Request, res: Response) => {
	const formId = parseInt(req.params.formId);

	if (!formId) throw new ApiError('"formId" must be valid');

	const formSubmission = await formService.createFormSubmission(formId, req.body);
	const formContacts = await formService.getFormEmails(formId);

	if (!Array.isArray(formContacts) || formContacts.length == 0) return;
	const email = await sendFormEmail('New Form Submission', formContacts, req.body);

	return res.json(formSubmission);
});
