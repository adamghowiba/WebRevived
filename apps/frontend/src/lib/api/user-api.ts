import { HOST } from '$lib/constants/config';
import type { User } from '$lib/types/user';

const getUsers = async (): Promise<User[]> => {
	const response = await fetch(`${HOST}/user`, { credentials: 'include' });
	const result = await response.json();

	return result;
};

const postUser = async (user: User) => {
	const response = await fetch(`${HOST}/user`, {
		method: 'POST',
		body: JSON.stringify(user),
		credentials: 'include'
	});

	return await response.json();
};

export default { getUsers, postUser };
