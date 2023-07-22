import { RBTData, RBTRow } from '../common';

/**
 * @typedef {Object} RBTSearchOptions Properties the Search Bar component requires to create
 * @property {string} accessorKey the Field name within a data object we want to represent in the table.
 * @property {string} header the Label to provide in the column header for the table
 * @property {boolean} [searchable] should this particular field be part of the search mechanisim?
 */
export type RBTSearchOptions<TData extends Record<string, unknown>> = RBTData<TData> & {
  handleDisplayedRows?: (e: RBTRow<TData>[]) => void;
};
