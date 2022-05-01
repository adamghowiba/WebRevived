import type { Service } from '$lib/types/service';

export const SERVICES: Service[] = [
	{
		id: 'web-design',
		name: 'Web Design',
		header: {
			title: 'Human-centric experience build for conversions',
			subtitle: 'We are a team of people who believe in what they do.',
			imgSrc: '/images/services/webdesign_laptop.png'
		},
		description:
			'We listen to the needs of our clients regarding website development. Afterwards, our web developers formulate a strategy and provide our clients with custom web design services along with modular, high end and world class styling.',
		images: ['/images/services/webdesign_fortnite.png', '/images/services/webdesign_cart.png'],
		approach:
			'This approach helps our clients in standing out in their respective industries. Our web developers are well versed in providing exciting customer experience and uniqueness for e-commerce websites. For Wordpress-related websites, our developers create websites that engages users or drives sales.',
		capabilities: {
			description:
				'We bring vision to life by providing frictionless services of branding. We are not just identifying your brand, In fact we create seamless interaction between peoples & your ',
			listItems: [
				'Visual Design',
				'Information Archetcure',
				'UI UX Audit',
				'Front-end Development',
				'PWA',
				'Back-end Development',
				'PWA'
			]
		}
	},
	{
		id: 'social',
		name: 'Social Mangement',
		header: {
			title: 'Not Your Average Social Media Advertising Agency',
			subtitle: 'We are a team of people who believe in what they do.',
			imgSrc: '/images/services/mobile_screen.png'
		},
		description:
			'It’s essential for businesses today to have a presence on social media. Millions of people are looking at their phones each day, and it is important that they find your business, organization, or product whenever possible.',
		images: ['/images/services/webdesign_fortnite.png', '/images/services/webdesign_cart.png'],
		approach:
			'This approach helps our clients in standing out in their respective industries. Our web developers are well versed in providing exciting customer experience and uniqueness for e-commerce websites. For Wordpress-related websites, our developers create websites that engages users or drives sales.',
		capabilities: {
			description:
				'We bring vision to life by providing frictionless services of branding. We are not just identifying your brand, In fact we create seamless interaction between peoples & your product. To make your product or company memorable, We develop bespoke logos, high-end corporate identity, brand deck, modern stationary materials, digital assets and creative product appearance that your target market will love to use. Over the decade, We had chance to create strategy plannings for startup and promotion of brands.',
			listItems: [
				'Visual Design',
				'Information Archetcure',
				'UI UX Audit',
				'Front-end Development',
				'PWA',
				'Back-end Development',
				'PWA'
			]
		}
	}
];
