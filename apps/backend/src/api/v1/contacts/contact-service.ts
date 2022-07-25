/* eslint-disable @typescript-eslint/no-unsafe-argument */
import prisma from '@common/db';
import type { Contact, Prisma } from '@prisma/client';
import { ContactApi } from '@webrevived/types/contact';
import { connect } from 'http2';
import { DatabaseError } from '../../../errors/DatabaseError';
import { transformIdsArray, connectIds } from '../../../utils/transforms';

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
export const getContactByID = async (id: number, query?: Prisma.ContactInclude): Promise<Contact | null> => {
	const getIncludes = () => (query && Object.values(query)?.length ? query : undefined);

	try {
		const contact = await prisma.contact.findUnique({
			where: {
				id
			},
			include: getIncludes()
		});

		return contact;
	} catch (error: any) {
		throw new DatabaseError(error);
	}
};

/* Create New Account */
export const createContact = async (data: Prisma.ContactCreateInput) => {
	const createdContact = await prisma.contact.create({
		data
	});

	return createdContact;
};

/* UPDATE Account */
export const updateContact = async (id: number, data: ContactApi.PutBody) => {
	const updatedContact = await prisma.contact.update({
		where: {
			id
		},
		data: {
			...data,
			projects: connectIds(data.projects),
			forms: connectIds(data.forms)
		}
	});

	return updatedContact;
};

/* DELETE Account */
export const deleteContact = async () => {};

export default { getAllContacts, getContactByID, createContact, updateContact, deleteContact };
