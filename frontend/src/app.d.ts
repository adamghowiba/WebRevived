/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
interface UserSession {
	email: string;
	role: 'ADMIN' | 'DEVELOPER' | 'DESIGNER' | 'GUEST';
	id: number;
}

declare namespace App {
	interface Locals {
		user?: UserSession;
	}

	interface Platform {}

	// TODO: Match with backend
	interface Session {
		user?: UserSession;
	}

	interface Stuff {}
}
