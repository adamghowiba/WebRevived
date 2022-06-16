/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Connection, createConnection } from 'mysql';

const connection = createConnection({
	host: 'arn:aws:timestream:us-east-1:040133161491:database/sampleDB',
	database: 'sampleDB'
});

connection.connect(err => {
	if (err) {
		console.log('Error connecting', err);
		return;
	}
	console.log('Connected to database');
});
