import { HOST } from '$lib/constants/config';
import { derived, get, writable } from 'svelte/store';

export interface Project {
	id: number;
	name: string;
	type: string;
	description: string;
	slack_channel: string;
	account_id: string;
	createdAt: Date;
}

export interface AsyncStore<D> {
	state: 'loading' | 'error' | 'sucess' | 'idle';
	data: D;
	error?: string | Error;
}

const getProjects = async () => {
	const response = await fetch(`${HOST}/project`, {
		credentials: 'include'
	});
	const result = await response.json();

	return result;
};

const createProjectStore = () => {
	const { set, update, subscribe } = writable<AsyncStore<Project[]>>(
		{ state: 'idle', data: [] },
		() => {
			refresh();
		}
	);

	const refresh = async () => {
		set({ state: 'loading', data: [] });
		try {
			const projects = await getProjects();
			set({ data: projects, state: 'sucess' });
		} catch (error) {
			set({ data: [], state: 'error', error: error });
		}
	};

	return {
		subscribe,
		getProjects,
		refresh
	};
};

const createAsyncStore = <D>(inital: D, getData: () => Promise<D | undefined>) => {
	const store = writable<AsyncStore<D>>({ state: 'idle', data: inital }, () => {
		refresh();
	});
	const { set, subscribe } = store;

	const state = derived(store, ($store) => $store.state);

	const refresh = async () => {
		try {
			const data = await getData();
			set({ state: 'sucess', data });
		} catch (error) {
			set({ state: 'error', data: undefined, error });
		}
	};

	return {
		subscribe,
		state,
		refresh
	};
};

export const asyncProjectStore = createAsyncStore<Project[]>([], () => {
	return getProjects();
});
export const projectsStore = createProjectStore();
