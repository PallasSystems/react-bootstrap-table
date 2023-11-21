import { RBTColumnDefs, RBTStyleOptions } from '../common';

export type RBTableHeadStyleOptions = RBTStyleOptions & {
  enableTableHead?: boolean;
};

export type RBTableHeadOptions<TData extends Record<string, unknown>> = RBTableHeadStyleOptions & {
  columns?: RBTColumnDefs<TData>[];
};
