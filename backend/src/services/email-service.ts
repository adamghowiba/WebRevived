import { SendEmailCommand, SESClient } from '@aws-sdk/client-ses';
import config from '@config';
import ApiError from '@errors/ApiError';
import { generateFormEmail } from '../templates/form-string';

const sesClient = new SESClient({
	region: 'us-east-1',
	credentials: {
		accessKeyId: config.awsAccessKeyId,
		secretAccessKey: config.awsSecretAccessKey
	}
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
		return `Email sent sucessfully to ${toAddress.toString()}`;
	} catch (error) {
		throw new ApiError('Failed to send email');
	}
};

export const sendFormEmail = async (title: string, toAddress: string[], data: { [key: string]: string }) => {
	const parsedHTML = generateFormEmail(data);
	const result = await sendEmail(title, toAddress, parsedHTML);

	return result;
};
