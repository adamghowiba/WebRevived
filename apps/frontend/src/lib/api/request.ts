import { HOST } from '$lib/constants/config';

interface ApiResponse<T = unknown> {
	error?: Error;
	data: T;
}

async function get<Data = unknown>(
	path: string,
	params?: { [key: string]: string }
): Promise<ApiResponse<Data>> {
	const response = await fetch(`${HOST}${path}`, {
		credentials: 'include'
	});

	const result = await response.json();
	if (!response.ok) return { data: null, error: result };

	return { data: result, error: null };
}

export default { get };
