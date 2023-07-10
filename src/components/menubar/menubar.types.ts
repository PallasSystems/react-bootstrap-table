import type { RBTData, RBTStyleOptions } from '../common';
import { RBTSearchOptions } from '../search';

export type RBTMenuBarStyleOptions = RBTStyleOptions & {
  enableDensityToggle?: boolean;
};

export type RBTMenuBarOptions<TData extends Record<string, any> = {}> = RBTData<TData> &
  RBTSearchOptions<TData> &
  RBTMenuBarStyleOptions & {
    isCompact?: boolean;
    setCompact?: (e: boolean) => void;
  };
