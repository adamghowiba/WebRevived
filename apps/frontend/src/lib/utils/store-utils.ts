import type { AsyncState, AsyncStore } from '$lib/types/async';

export const isLoading = (state: AsyncState) => {
	return state === 'idle' || state === 'loading';
};

export const isEveryState = (state: AsyncState, ...store: AsyncStore<unknown>[]) => {
	return store.every((store) => store.state === state)
};
