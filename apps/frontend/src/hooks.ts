import authApi from '$lib/api/auth-api';
import type { GetSession, Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	try {
		const { response: userResponse, result } = await authApi.getUserInformation(
			event.request.headers.get('cookie')
		);
		if (userResponse.ok) event.locals.user = result;

		return await resolve(event);
	} catch (error) {
		console.error('Databse is offline.', error);
		
		return await resolve(event);
	}
};

export const getSession: GetSession = (event) => {
	return event.locals?.user
		? {
				user: event.locals.user
		  }
		: {};
};
