import { User } from '@prisma/client';

/**
 * Transforms a list of ids into a prisma connect format
 *
 * @example [1, 2, 3] = [{id: 1}, {id: 2}, ..]
 */
export const transformIdsArray = (ids: number[]) => {
	return ids.map(id => {
		return { id };
	});
};

/**
 * Transforms a list of users into a comma seperated string
 * of slack ids.
 *
 * @param users List of users to get slack ids from
 * @example [{name: adam, slack_uid: 1}, {name: mark, slack_uid: 2}] = 1,2
 */
export const transformSlackIds = (users: User[]) => {
	if (!users.length) return [];

	return users.reduce((acc, user) => {
		if (user.slack_uid) acc.push(user.slack_uid);
		return acc;
	}, []);
};

export const slugify = (string: string) =>
	string
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '');
