import websiteApi from '$lib/api/website-api';
import { createAsyncStore } from '$lib/stores/async-store';
import type { Website } from '@webrevived/types/prisma';

const createAccountStore = () => {
	const { refresh, state, subscribe, update } = createAsyncStore<Website[]>([], () => {
		return websiteApi.getWebsites();
	});

	const addWebsite = async (website: Website) => {
		
	};

	return {
		refresh,
		addWebsite,
		state,
		subscribe
	};
};

export const websiteStore = createAccountStore();
