import { RBTColumnDefs } from '../common';
import { RBTRowControlStyleOptions } from '../rowcontrols';

export type RBTablePlaceholderOptions<TData extends Record<string, any> = {}> = RBTRowControlStyleOptions & {
  columns?: RBTColumnDefs<TData>[];
};
