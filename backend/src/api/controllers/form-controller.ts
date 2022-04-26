import ApiError from '@errors/ApiError';
import { formService } from '@services';
import { sendFormEmail } from '@services/email-service';
import { catchAsync } from '@utils/error-utils';
import { formPost } from '@validation/form-validation';
import { Request, Response } from 'express';
import { FormPostRequest } from '../../types/form-api';

/* GET All Forms */
export const getAllForms = catchAsync(async (req: Request, res: Response) => {
	const forms = await formService.getAllForms();

	return res.json(forms);
});

/* GET Specfic Form */
// eslint-disable-next-line @typescript-eslint/require-await
export const getFormByID = catchAsync(async (req: Request, res: Response) => {
	res.json('Unimplemented')
});

/* P0OST New Form */
export const postForm = catchAsync(async (req: FormPostRequest, res: Response) => {
	const websiteId = parseInt(req.params.websiteId, 10);
	if (!websiteId) throw new ApiError('Missing website id paramter');

	const { error } = formPost.validate(req.body);
	if (error) return res.json(error.message);
	
	const createdForm = await formService.createForm(req.body.name, websiteId, req.body.contactIds);
	return res.json(createdForm);
});

/* UPDATE Form */
// eslint-disable-next-line @typescript-eslint/require-await
export const putForm = catchAsync(async (req: Request, res: Response) => {
	res.json('Unimplemented');
});

/* DELETE Form */
// eslint-disable-next-line @typescript-eslint/require-await
export const deleteForm = catchAsync(async (req: Request, res: Response) => {
	res.json('Unimplemented');
});

/* --------------------------------------------------------------------------------- */

/* GET Form Submissions */
export const getFormSubmissions = catchAsync(async (req: Request, res: Response) => {
	const formId = parseInt(req.params.id, 10);

	if (!formId) throw new ApiError('"formId" must be valid');

	const submissions = await formService.getFormSubmissions(formId);

	return res.json(submissions);
});

/* POST Form Submissions */
export const postFormSubmission = catchAsync(
	async (req: Request<{ formId: string }, unknown, { [key: string]: string }>, res: Response) => {
		const formId = parseInt(req.params.formId, 10);

		if (!formId) throw new ApiError('"formId" must be valid');

		const formSubmission = await formService.createFormSubmission(formId, req.body);
		const formContacts = await formService.getFormEmails(formId);

		if (formContacts.length) await sendFormEmail('New Form Submission', formContacts, req.body);

		res.json(formSubmission);
	}
);
