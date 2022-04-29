/**
 * Create an object composed of the picked object properties
 * @param {Object} object
 * @param {string[]} keys
 * @returns {Object}
 */
export const pick = (object: { [key: string]: any }, keys: string[]) => {
	return keys.reduce((obj, key) => {
		if (object && Object.prototype.hasOwnProperty.call(object, key)) {
			//@ts-ignore
			obj[key] = object[key];
		}
		return obj;
	}, {});
};
