import { UserRole } from "@prisma/client";

export function transformRoleString(role: UserRole): UserRole {
    const roleMap = new Map<string, UserRole>();

    roleMap.set(UserRole.ADMIN.toLowerCase(), UserRole.ADMIN);
    roleMap.set(UserRole.DESIGNER.toLowerCase(), UserRole.DESIGNER);
    roleMap.set(UserRole.DEVELOPER.toLowerCase(), UserRole.DEVELOPER);
    roleMap.set(UserRole.GUEST.toLowerCase(), UserRole.GUEST);

    return roleMap.get(role);
}

export const getAboveRoles = (role: UserRole) => {
	const roleValues = Object.values(UserRole);
	const roleIndex = roleValues.findIndex((_role) => _role === role);

	const aboveRoles = roleValues.slice(roleIndex, roleValues.length);

	return aboveRoles
}