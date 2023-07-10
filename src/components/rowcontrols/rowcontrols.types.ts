import type { RBTData, RBTStyleOptions } from '../common';

export type RBTRowControlStyleOptions = RBTStyleOptions & {
  rowsPerPage?: number;
};

export type RBTRowControlOptions<TData extends Record<string, any> = {}> = RBTData<TData> &
  RBTRowControlStyleOptions & {
    isCompact?: boolean;
    handleDisplayedRows?: (e: TData[]) => void;
  };
