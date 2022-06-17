import ejs from 'ejs';

export const generateFormEmail = (data: { [key: string]: string }) => {
	let stringResult;
	ejs.renderFile('src/templates/form-submission.ejs', data, {}, (err, str) => {
		stringResult = str;
	});

	return stringResult;
};

// generateFormEmail({ name: 'adam', guy: 'bad' });
