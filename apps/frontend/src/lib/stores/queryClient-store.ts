import type { QueryClient } from '@sveltestack/svelte-query';
import { writable } from 'svelte/store';

export const queryClientStore = writable<QueryClient>();