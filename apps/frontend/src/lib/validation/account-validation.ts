import * as yup from 'yup';

export const accountSchema = yup.object({
	name: yup.string().required('Account name is required'),
	industry: yup.string().min(3),
});
