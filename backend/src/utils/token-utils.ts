export const generateToken = () => {
	const randomSequenece = () => Math.random().toString(36).substring(2);
	return randomSequenece() + randomSequenece();
};
