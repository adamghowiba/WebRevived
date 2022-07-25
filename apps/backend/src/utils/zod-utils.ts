import { ZodError } from 'zod';

export const formatZodErrors = (errors: ZodError) =>
	errors.errors.map(error => `${error.path.join('.')}: ${error.message}`).join(', ');
