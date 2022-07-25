export default class UnknownError extends Error {
	message: string;
	status: string | undefined;
	statusCode: number;
	error: unknown;

	constructor(message: string, error: unknown) {
		super(message);

		this.message = message;
		this.statusCode = 500;
		this.error = error;

		Error.captureStackTrace(this, UnknownError);
	}
}
