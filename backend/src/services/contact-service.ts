import prisma from '@controllers/db-controller';
import type { Contact, Prisma } from '@prisma/client';

/* GET All Contacts */
export const getAllContacts = async (limit = 30) => {
	const page = 0;

	const contacts = await prisma.contact.findMany({
		skip: page * limit,
		take: limit
	});

	return contacts;
};

/* Get Contact By ID */
export const getContactByID = async (id: number): Promise<Contact> => {
	const contact = await prisma.contact.findUnique({
		where: {
			id
		}
	});

	return contact;
};

/* Create New Account */
export const createContact = async (data: Prisma.ContactCreateInput) => {
	const createdContact = await prisma.contact.create({
		data
	});

	return createdContact;
};

/* UPDATE Account */
export const updateContact = async () => {};

/* DELETE Account */
export const deleteContact = async () => {};
