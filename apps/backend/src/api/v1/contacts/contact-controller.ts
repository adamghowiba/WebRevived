/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import contactService from '@api/v1/contacts/contact-service';
import { ContactRequest } from '@type/contact';
import { catchAsync } from '@utils/error-utils';
import { Request, Response } from 'express';
import ApiError from '../../../errors/ApiError';
import { formatZodErrors } from '../../../utils/zod-utils';
import { contactModel, relatedContactModel } from '../../../validations/contact';
import { validateRequest } from '../../middlewears/validate';
import contactValidation from './contact-validation';

const getAllContacts = catchAsync(async (req: Request, res: Response) => {
	const allContacts = await contactService.getAllContacts();

	res.json(allContacts);
});

const getContactById = catchAsync(async (req: ContactRequest.GetByIdRequest, res: Response) => {
	const { error, values } = validateRequest<ContactRequest.GetByIdRequest>(contactValidation.getByIdValidation, req);
	if (error) throw new ApiError(error);

	const contact = await contactService.getContactByID(+req.params.contact_id, req.query);

	res.json(contact);
});

const postContact = (req: Request, res: Response) => {
	const validate = contactModel.safeParse(req.body);
	if (!validate.success) throw new ApiError(formatZodErrors(validate.error));

	res.json('Create');
};

const putContact = async (req: ContactRequest.PutRequest, res: Response) => {
	const contactId = +req.params.contact_id;

	const validate = contactValidation.zodPutSchemaBody.safeParse(req.body);
	if (!validate.success) throw new ApiError(formatZodErrors(validate.error));

	const updatedContact = await contactService.updateContact(contactId, req.body);

	return res.json(updatedContact);
};

export default { getAllContacts, getContactById, postContact, putContact };
