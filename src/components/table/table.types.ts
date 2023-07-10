import { RBTColumnDefs, RBTData } from '../common';
import { RBTMenuBarOptions, RBTMenuBarStyleOptions } from '../menubar';

/**
 * @typedef {Object} RBTOptions Specifies the properties needed to generate a Bootstrap Table.
 * @property {string} [request_url] A URL the table will perform a GET request on and use the response as part of the 'data' property.
 * @property {string} [varient]
 * @property {string} [name]
 */
export type RBTOptions<TData extends Record<string, any> = {}> = Omit<RBTMenuBarStyleOptions, 'name varient'> & {
  columns?: RBTColumnDefs<TData>[];
  data?: TData[];
  enablePagination?: boolean;
  enableTableHead?: boolean;
};
