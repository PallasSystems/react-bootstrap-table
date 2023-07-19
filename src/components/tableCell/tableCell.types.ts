import { RBTData } from '../common';
import { RBTRowControlStyleOptions } from '../rowcontrols';

export type RBTableCellProps<TData extends Record<string, any> = {}> = RBTRowControlStyleOptions & RBTData<TData> & {

};