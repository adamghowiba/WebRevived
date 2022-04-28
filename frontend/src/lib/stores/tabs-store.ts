import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

interface Tab {
    name: string;
}

export const tabs: Writable<Tab[]> = writable([{name: 'project'}, {name: 'accounts'}]);