/* eslint-disable @typescript-eslint/no-floating-promises */
import { SNSClient, AddPermissionCommand, SNS, PublishCommandInput } from '@aws-sdk/client-sns';

const params: PublishCommandInput = {
	Message: JSON.stringify({ name: 'adam', title: 'big man' }),
	TopicArn: 'arn:aws:sns:us-east-1:040133161491:TestingTopic'
};

const sendMessage = async () => {
	const publishText = new SNS({ region: 'us-east-1' }).publish(params);
	const data = await publishText;
	console.log(data);
};

// sendMessage();
