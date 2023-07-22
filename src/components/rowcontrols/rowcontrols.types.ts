import type { RBTData, RBTRow, RBTStyleOptions } from '../common';

/**
 * Row Control specific options, the row controls set the number of display objects within the table.
 * @alias RBTRowControlStyleOptions
 * @type {RBTStyleOptions}
 */
export type RBTRowControlStyleOptions = RBTStyleOptions & {
  rowsPerPage?: number;
};

/**
 * Properties required to construct the menu bar.
 * @alias RBTRowControlOptions
 * @type {Type}
 */
export type RBTRowControlOptions<TData extends Record<string, unknown>> = RBTData<TData> &
  RBTRowControlStyleOptions & {
    /**Indicates if the display should be compact. */
    isCompact?: boolean;
    /** If various pagination options are chosen it will lead to an update in the displayed tables, this is passed through this function. */
    handleDisplayedRows?: (e: RBTRow<TData>[]) => void;
  };
