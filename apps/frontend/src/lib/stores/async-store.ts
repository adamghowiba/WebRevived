import { browser } from '$app/env';
import { derived, writable } from 'svelte/store';

export interface AsyncStore<D> {
	state: 'loading' | 'error' | 'success' | 'idle';
	data: D;
	error?: string | Error;
}

export const createAsyncStore = <D>(inital: D, getData: () => Promise<D | undefined>) => {
	const store = writable<AsyncStore<D>>({ state: 'idle', data: inital }, () => {
		if (browser) {
			refresh();
		}
	});
	const { set, subscribe, update } = store;

	const state = derived(store, ($store) => $store.state);

	const refresh = async () => {
		try {
			const data = await getData();
			set({ state: 'success', data });
		} catch (error) {
			set({ state: 'error', data: undefined, error });
		}
	};

	return {
		subscribe,
		state,
		refresh,
		update, 
		set
	};
};
