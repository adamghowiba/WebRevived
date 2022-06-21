import contactApi from '$lib/api/contact-api';
import { createAsyncStore } from '$lib/stores/async-store';
import type { Contact } from '@webrevived/types/prisma';

const createContactStore = () => {
	const { refresh, state, subscribe, update } = createAsyncStore<Contact[]>([], () => {
		return contactApi.getContacts();
	});

	return {
		refresh,
		state,
		subscribe
	};
};

export const contactStore = createContactStore();
