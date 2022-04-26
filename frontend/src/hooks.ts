import authApi from '$lib/api/auth-api';
import type { GetSession, Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { response: userResponse, result } = await authApi.getUserInformation(
		event.request.headers.get('cookie')
	);
	if (userResponse.ok) event.locals.user = result;

	const response = await resolve(event);
	return response;
};

export const getSession: GetSession = (event) => {
	return event.locals?.user
		? {
				user: event.locals.user
		  }
		: {};
};
