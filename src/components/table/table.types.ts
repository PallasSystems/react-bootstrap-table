import type { BaseTableEntity } from '../common';

/**
 * @typedef {Object} ColumnDefs Information required to define a the table columns and data mapppings.
 * @property {string} field the Field name within a data object we want to represent in the table.
 * @property {string} label the Label to provide in the column header for the table
 * @property {boolean} [searchable] should this particular field be part of the search mechanisim?
 */
export type ColumnDefs = {
  field: string;
  label: string;
  searchable?: boolean;
};

/**
 * @typedef {Object} TableData Specifies the properties needed to generate a Bootstrap Table.
 * @property {string} [request_url] A URL the table will perform a GET request on and use the response as part of the 'data' property.
 * @property {string} [varient]
 * @property {string} [name]
 */
export type TableData = BaseTableEntity & {
  request_url?: string;
  columns?: ColumnDefs[];
  data?: Record<string, string>[];
};
