import type { Theme } from '$lib/types/theme';
import { writable } from 'svelte/store';

const createThemeStore = () => {
	const { set, update, subscribe } = writable<Theme>('light');

	return {
		set,
		subscribe
	};
};

export const themeStore = createThemeStore();
