import { SendEmailCommand, SESClient } from '@aws-sdk/client-ses';
import { generateFormEmail } from '../templates/form-string';

const sesClient = new SESClient({
	region: 'us-east-1'
});

export const sendEmail = async (subject: string, toAddress: string[], htmlData: string): Promise<string> => {
	const params = {
		Destination: {
			ToAddresses: toAddress
		},
		Message: {
			Body: {
				Html: {
					Charset: 'UTF-8',
					Data: htmlData
				}
				// Text: {
				// 	Charset: 'UTF-8',
				// 	Data: 'This is the first email sent with SES'
				// }
			},
			Subject: {
				Charset: 'UTF-8',
				Data: subject
			}
		},
		Source: 'adam@webrevived.com'
	};

	try {
		await sesClient.send(new SendEmailCommand(params));
		return `Email sent sucessfully to ${toAddress}`;
	} catch (error) {
		return `Error sending email ${error}`;
	}
};

export const sendFormEmail = async (toAddress: string[], data: { [key: string]: string }) => {
	const parsedHTML = generateFormEmail(data);
	const result = await sendEmail('New Form Submission from [Adam Ghowiba]', ['adamware99@hotmail.com'], parsedHTML);

	console.log(result);
};
