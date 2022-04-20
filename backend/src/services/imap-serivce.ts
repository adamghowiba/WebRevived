import imap, { ImapSimple, Message } from 'imap-simple';

const config = {
	imap: {
		user: 'adam@webrevived.com',
		password: 'Webrevivedandteam9958!',
		host: 'imap.gmail.com',
		tls: true,
		tlsOptions: { rejectUnauthorized: false },
		port: 993,
		authTimeout: 6000
	}
};

export const getCustomerEmailData = async (email: string) => {
	const connection = await imap.connect(config);

    // Wait for inbox to load
	const inbox = await connection.openBox('INBOX');

    let delay = 24 * 3600 * 1000;
	let yesterday = new Date();
	yesterday.setTime(Date.now() - delay);

	const searchCriteria = [
		// ["SINCE", yesterday.toISOString()],
        ['FROM', email]
	];

	const fetchOptions = {
		bodies: ['HEADER', 'TEXT'],
		markSeen: false
	};

	const messages = await connection.search(searchCriteria, fetchOptions);

	const emailData = messages.reduce((acc: any[], curr: Message) => {
		const { date, subject, from, to } = curr.parts[1].body;

		const messageBody = curr.parts[0].body;
		acc.push({ date: date[0], subject: subject[0], from: from[0], to: to[0], body: messageBody });
		return acc;
	}, []);
    return emailData;
};

getCustomerEmailData('no-reply@accounts.google.com')