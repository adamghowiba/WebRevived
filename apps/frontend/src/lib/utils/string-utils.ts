/**
 * Parses object of styles into a string to be used by svelte style.
 * 
 * @param styles Object of styles {width: 'auto'}
 * @returns string to be passed into svelte style --width: auto;
 */
export function parseStylesVars(styles: { [key: string]: string }) {
	const parsedString = Object.entries(styles).reduce((acc, [key, value]) => {
		acc += `--${key}: ${value};`;
		return acc;
	}, '');

	return parsedString;
}

/**
 * Parses object of styles into a string to be used by svelte style.
 * 
 * @param styles Object of styles {width: 'auto'}
 * @returns string to be passed into svelte style width: auto;
 */
 export function parseStyles(styles: { [key: string]: string }) {
	const parsedString = Object.entries(styles).reduce((acc, [key, value]) => {
		acc += `${key}: ${value}; `;
		return acc;
	}, '');

	return parsedString;
}
