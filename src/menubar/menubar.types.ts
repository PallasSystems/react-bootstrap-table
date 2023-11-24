import type { RBTData, RBTStyleOptions } from '../common';
import { RBTSearchOptions } from '../search';

/**
 * Menu Bar specific controls to be applied.
 * @alias RBTMenuBarStyleOptions
 * @type {RBTStyleOptions}
 */
export type RBTMenuBarStyleOptions = RBTStyleOptions & {
  /** Switch to allow ou to decide if you want the option to change the density of the data. */
  enableDensityToggle?: boolean;
  enableExportButton?: boolean;
};

/**
 * Properties required to construct the menu bar.
 * @alias RBTMenuBarStyleOptions
 * @type {Type}
 */
export type RBTMenuBarOptions<TData extends Record<string, unknown>> = RBTData<TData> &
  RBTSearchOptions<TData> &
  RBTMenuBarStyleOptions & {
    /**Indicates if the display should be compact. */
    isCompact?: boolean;
    /** Method supplied by table, if the density toggle is switched this function is called. */
    setCompact?: (e: boolean) => void;
  };
