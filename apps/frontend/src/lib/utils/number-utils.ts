export const range = (start: number, end?: number) => {
	const maxOrder = Math.max(end, start) - Math.min(end, start);
	const rangeArray = Array.from({ length: maxOrder || start }, (_, x) =>
		end ? x + Math.min(end, start) : x
	);

	return rangeArray;
};
