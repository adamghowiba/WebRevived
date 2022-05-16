/* eslint-disable @typescript-eslint/no-unsafe-argument */
import prisma from '@controllers/db-controller';
import { DatabaseError, PrismaError } from '@errors/DatabaseError';
import { Form, Prisma } from '@prisma/client';

/* GET All Forms */
export const getAllForms = async (limit = 30) => {
	const page = 0;

	const accounts = await prisma.form.findMany({
		skip: page * limit,
		take: limit
	});

	return accounts;
};

export const getFormsByWebsiteID = async (websiteId: number) => {
	const forms = await prisma.form.findMany({
		where: {
			website_id: websiteId
		}
	});

	return forms;
};

/* GET Form By Id */
export const getFormByID = async (id: number, filter?: Prisma.FormSelect): Promise<Partial<Form>> => {
	const form = await prisma.form.findUnique({
		where: {
			id
		}
	});

	return form;
};

/* GET Form Contacts */
export const getFormEmails = async (id: number): Promise<string[]> => {
	const form = await prisma.form.findUnique({
		where: {
			id
		},
		include: {
			contacts: true
		}
	});

	const formEmails = form.contacts.reduce((acc, curr) => (acc = [...acc, curr.email]), []);
	return formEmails;
};

/* POST New Form */
export const createForm = async (name: string, websiteId: number, contactIds: number[]) => {
	const transformedContactIds = contactIds.map(id => {
		return { id };
	});

	try {
		const formCreated = await prisma.form.create({
			data: {
				name,
				contacts: {
					connect: transformedContactIds
				},
				website: {
					connect: { id: websiteId }
				}
			}
		});

		return formCreated;
	} catch (error) {
		throw new DatabaseError(error);
	}
};

/* UPDATE Form */
export const updateForm = async () => {};

/* DELETE Form */
export const deleteForm = async () => {};

/* ===== FORM SUBMISSIONS ==== */

/* POST New Form Submission */
export const createFormSubmission = async (formId: number, formData: object) => {
	try {
		const formSubmission = await prisma.formSubmission.create({
			data: {
				form: {
					connect: { id: formId }
				},
				data: formData
			}
		});

		return formSubmission;
	} catch (err) {
		throw new DatabaseError(err);
	}
};

/* GET Form Submissions */
export const getFormSubmissions = async (formId: number) => {
	const formSubmission = await prisma.formSubmission.findMany({
		where: {
			from_id: formId
		}
	});

	return formSubmission;
};
