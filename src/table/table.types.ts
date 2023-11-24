import { RBTColumnDefs } from '../common';
import { RBTMenuBarStyleOptions, RBTMenuBarStyleOptions } from '../menubar';
import { RBTableHeadStyleOptions } from '../tableHead';

/**
 * @typedef {Object} RBTOptions Specifies the properties needed to generate a Bootstrap Table.
 */
export type RBTOptions<TData extends Record<string, unknown>> = Omit<RBTMenuBarStyleOptions, 'name varient'> & {
  columns: RBTColumnDefs<TData>[];
  data: TData[];
  name?: string;
  varient?: string;
  header?: RBTHeaderOptions;
  footer?: RBTFooterOptions;
};

export type RBTHeaderOptions = RBTableHeadStyleOptions & RBTMenuBarStyleOptions;

export type RBTFooterOptions = {
  enablePagination?: boolean;
};
