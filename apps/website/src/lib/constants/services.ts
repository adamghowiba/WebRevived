import type { Service } from '$lib/types/service';

export const SERVICES: Service[] = [
	{
		id: 'web-design',
		name: 'Web Design',
		header: {
			title: 'We develop human-centric websites that deliver results',
			subtitle: 'We create websites that steal the hearts of target audiences',
			imgSrc: '/images/services/webdesign_laptop.png'
		},
		description:
			'We listen to the needs of our clients regarding website development. Afterwards, our web developers formulate a strategy and provide our clients with custom web design services along with modular, high end and world class styling.',
		images: ['/images/services/webdesign_fortnite.png', '/images/services/webdesign_cart.png'],
		approach:
			'Our approach helps our clients in standing out in their respective industries. Our web developers are well versed in providing exciting customer experience and uniqueness for e-commerce websites. For Wordpress-related websites, our developers create websites that engages users or drives sales.',
		capabilities: {
			description:
				'We employ full spectrum of interactive design, illustrations, motion graphics and animations in the web development process so that we create websites that steal the hearts of our clients’ target audiences.',
			listItems: [
				'Visual Design',
				'Information Architecture',
				'UI UX Audit',
				'Front-End Development',
				'PWA',
				'Back-End Development',
				'Wordpress Website',
				'Interactive Web Design',
				'Responsive Web App'
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
			"It's essential for businesses today to have a presence on social media. Millions of people are looking at their phones each day, and it is important that they find your business, organization, or product whenever possible.",
		images: ['/images/services/webdesign_fortnite.png', '/images/services/webdesign_cart.png'],
		approach:
			"We work collaboratively to define an ecosystem of values and beliefs, outlining your objectives, exploring your markets, and  translating this into authentic activations and guidelines that differentiate - not just for today but tomorrow as well.",
		capabilities: {
			description:
				'We help you navigate social. With so many channels these days it can be a little overwhelming which to choose, what to post and how much time to put in - not seeing sales after your 10th TikTok with you and your pet iguana Tim?',
			listItems: [
				'Content Design',
				'Content Strategy',
				'Data Analysis',
				'Paid Social',
				'Facebook',
				'TikTok',
				'Instagram',
				'LinkedIn',
				'Twitter'
			]
		}
	},
	{
		id: 'branding',
		name: 'Branding Identity',
		header: {
			title: 'We help our clients in becoming memorable brands',
			subtitle: 'We are a team of people who believe in what they do.',
			imgSrc: '/images/services/mobile_screen.png'
		},
		description:
			"Properly executed branding today is more than just logos, typography, colors, and imagery. It's a cohesive system that equips your business with the fundamental building blocks for a successful, sustainable, and recognizable brand.",
		images: ['/images/services/webdesign_fortnite.png', '/images/services/webdesign_cart.png'],
		approach:
			"Our branding process begins with a deep analysis of the essence of your brand, your market, and what makes you unique. After establishing your brand’s purpose and proposition, we dive into the visual communication of your brand.",
		capabilities: {
			description:
				'We bring vision to life by providing frictionless services of branding. We are not just identifying your brand, In fact we create seamless interaction between peoples & your product. To make your product or company memorable, We develop bespoke logos, high-end corporate identity, brand deck, modern stationary materials, digital assets and creative product appearance that your target market will love to use',
			listItems: [
				'Brand Audit',
				'Art Direction',
				'Visual Design',
				'Branding Identity',
				'Branding Guidelines',
				'Brand Assets/Deck',
				'Visual Identity',
				'Creative Graphics Design',
				'Illustrations & Icons'
			]
		}
	}
];
