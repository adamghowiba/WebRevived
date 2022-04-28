export interface TableCellStyle {
    padding: string;
}

type ColType = 'number' | 'string';

export interface DataTableCol {
    feild: string;
    headerName: string;
    width?: number;
    type?: ColType;
    description?: string;
}