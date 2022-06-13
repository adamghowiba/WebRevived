import type { UserRole } from '$lib/types/user';

export const isRole = (role: UserRole, ...roles: UserRole[]) => {
	return roles.includes(role);
};
