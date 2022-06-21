import { HOST } from '$lib/constants/config';
import { generateUrlParams } from '$lib/utils/api-utils';
import type { Contact, Prisma, Project, User, Website } from '@webrevived/types/prisma';
import type { ContactApi } from '@webrevived/types/contact';

const URL = `${HOST}/contacts`;

const getContacts = async () => {
	const result = await fetch(URL);
	const response = await result.json();

	return response;
};

type ContactReturn = Contact & {
	projects: Project[];
	contacts: Contact[];
	websites: Website[];
	users: User[];
};

const getContactById = async (
	contactId: number,
	include?: Prisma.AccountInclude
): Promise<ContactReturn> => {
	const urlParams = generateUrlParams(include);
	const result = await fetch(`${URL}/${contactId}${urlParams}`);
	const response = await result.json();

	if (!result.ok) {
		throw new Error('Failed to load contacts by id');
	}

	return response;
};

const putContact = async (contactId: number, body: ContactApi.PutBody) => {
	const { json, ok } = await fetch(`${URL}/${contactId}`, {
		method: 'put',
		credentials: 'include',
		body: JSON.stringify(body),
		headers: {
			'content-type': 'application/json'
		}
	});

	if (!ok) throw new Error('Failed to update contact');

	return json;
};

export default { getContacts, getContactById, putContact };
