export type UserRole = 'ADMIN' | 'DEVELOPER' | 'DESIGNER' | 'GUEST';

export enum UserR {
	ADMIN,
	DEVELOPER,
	DESIGNER,
	GUEST
}

export interface SessionUser {
	email: string;
	role: UserRole;
	id: number;
}

export interface User {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	title: string;
	clickup_uid: string;
	slack_uid: string;
	zoho_uid: string;
	bio: string;
	role: UserRole
}
