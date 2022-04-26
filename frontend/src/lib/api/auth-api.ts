import { HOST } from '$lib/constants/config';

interface ApiResult<T = unknown> {
	response: Response;
	result: T;
}

async function login(email: string, password: string): Promise<ApiResult<any>> {
	const response = await fetch(`${HOST}/auth/login`, {
		method: 'POST',
		body: JSON.stringify({ email, password }),
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	});
	const result = await response.json();

	return { result, response };
}

/* Todo type from shared. */
async function getUserInformation(cookies: string): Promise<ApiResult<any>> {
	const response = await fetch(`${HOST}/auth/me`, {
		method: 'get',
		credentials: 'include',
		headers: {
			cookie: cookies
		}
	});

	const result = await response.json();
	return { response, result };
}

export default { login, getUserInformation };
