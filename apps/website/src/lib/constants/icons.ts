/* TODO: Find Better method for icons. */
/* Typed ICONS */

const icons = [
	'funnel',
	'wheel',
	'barChart',
	'puzzle',
	'number-1',
	'number-2',
	'number-3',
	'number-4'
] as const;
export type IconType = typeof icons[number];
