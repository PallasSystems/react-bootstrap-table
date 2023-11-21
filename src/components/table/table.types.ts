import { RBTColumnDefs } from '../common';
import { RBTMenuBarStyleOptions } from '../menubar';

/**
 * @typedef {Object} RBTOptions Specifies the properties needed to generate a Bootstrap Table.
 */
export type RBTOptions<TData extends Record<string, unknown>> = Omit<RBTMenuBarStyleOptions, 'name varient'> & {
  columns?: RBTColumnDefs<TData>[];
  data?: TData[];
  enablePagination?: boolean;
  enableTableHead?: boolean;
};
