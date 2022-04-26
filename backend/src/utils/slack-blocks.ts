const newProjectBlock = (title: string, data: string) => {
	return [
		{
			type: 'header',
			text: {
				type: 'plain_text',
				text: title,
				emoji: true
			}
		},
		{
			type: 'divider'
		},
		{
			type: 'context',
			elements: [
				{
					type: 'mrkdwn',
					text: data
				}
			]
		}
	];
};

export default { newProjectBlock };
