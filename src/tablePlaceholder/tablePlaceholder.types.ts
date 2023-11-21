import { RBTColumnDefs } from '../common';
import { RBTRowControlStyleOptions } from '../rowcontrols';

export type RBTablePlaceholderOptions<TData extends Record<string, unknown>> = RBTRowControlStyleOptions & {
  columns?: RBTColumnDefs<TData>[];
};
