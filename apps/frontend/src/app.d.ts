/// <reference types="@sveltejs/kit" />

import type { SessionUser } from '$lib/types/user';

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces

declare namespace App {
	interface Locals {
		user?: SessionUser;
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface Platform {}

	// TODO: Match with backend
	interface Session {
		user?: SessionUser;
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface Stuff {}
}
