export interface TableCellStyle {
	padding: string;
}

export type ColType = 'number' | 'string' | 'date';

export interface DataTableCol {
	feild: string;
	headerName: string;
	width?: number;
	type?: ColType;
	description?: string;
}

export interface DataTableRowLink { link: string; name: string };

export type DataTableRow = {
	[key: string]: DataTableRowLink | string | number | Array | Date;
};
