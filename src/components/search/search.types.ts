import { RBTData } from '../common';

export type RBTSearchOptions<TData extends Record<string, any> = {}> = RBTData<TData> & {
  handleDisplayedRows?: (e: TData[]) => void;
};
