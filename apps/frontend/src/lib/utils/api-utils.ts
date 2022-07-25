export const generateUrlParams = (data: { [key: string]: any }) => {
	if (!data) return '';
	const URLParams = new URLSearchParams();

	Object.entries(data).forEach(([key, value]) => {
		URLParams.set(key, value);
	});

	return `?${URLParams.toString()}`;
};
