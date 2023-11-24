import { ReactNode } from 'react';

/**
 * Basic data properties almost every RBT componet requires (e.g. the columns and data).
 * @alias RBTStyleOptions
 * @type {Type}
 */
export type RBTStyleOptions = {
  /** References the Bootstrap varient property. */
  varient?: 'light' | 'dark' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link';
  /** Unique name prefix to give to each table element. */
  name?: string;
};

/**
 * Basic data properties almost every RBT componet requires (e.g. the columns and data).
 * @alias RBTData
 * @type {RBTStyleOptions}
 */
export type RBTData<TData extends Record<string, unknown>> = RBTStyleOptions & {
  /** List of all columns  you want to display within the table, along with various configuration information. */
  columns: RBTColumnDefs<TData>[];
  /** The data objects you want to display in the table. */
  data: RBTRow<TData>[];
};

/**
 * Column configuration choices.
 * @alias RBTColumnSizing
 * @type {Type}
 */
export type RBTColumnSizing = {
  /** Can the column be resized? */
  enableResizing?: boolean;
  /** The minimum width (in pixels) of the column. */
  minSize?: number;
  /** The maximum width (in pixels) of the column. */
  maxSize?: number;
};

export type RBTColumnCellDef<TData extends Record<string, unknown>> = {
  column: string;
  originalRow: TData;
};

export type RBTColumnHeaderDef = {
  header: string;
  id?: string;
  minSize?: number;
  maxSize?: number;
};

/**
 * Information required to define a the table columns and data mapppings.
 * @alias RBTColumnDefs
 * @type {RBTStyleOptions}
 */
export type RBTColumnDefs<TData extends Record<string, unknown>> = RBTColumnSizing & {
  /**
   * Allows users to define a function to return an element for the table header contents.
   */
  Cell?: (props: RBTColumnCellDef<TData>) => ReactNode;

  /**
   * Allows users to define a function to return an element for the table header contents.
   */
  Header?: (props: RBTColumnHeaderDef) => ReactNode;

  /**
   * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
   * Specify a function here to point to the correct property in the data object.
   *
   * @example accessorFn: (row) => row.username
   */
  accessorFn?: (originalRow: TData) => string;
  /**
   * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
   * Specify which key in the row this column should use to access the correct data.
   * Also supports Deep Key Dot Notation.
   *
   * @example accessorKey: 'username' //simple
   * @example accessorKey: 'name.firstName' //deep key dot notation
   */
  accessorKey?: keyof TData;
  /**
   * Header must be a string.
   */
  header: string;
  /**
   * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
   *
   * If you have also specified an `accessorFn`, MRT still needs to have a valid `id` to be able to identify the column uniquely.
   *
   * `id` defaults to the `accessorKey` or `header` if not specified.
   *
   * @default gets set to the same value as `accessorKey` by default
   */
  id?: string;
  /**
   * Should this particular field be part of the search mechanisim?
   */
  searchable?: boolean;
};

/**
 * Internal wrapper around supplied data objects. We give each record a position within the table list.
 * Filtering ensurings the record is not included in the display and display is linked to table pagination
 * (e.g. only show X records).
 * @alias RBTColumnSizing
 * @type {Type}
 */
export type RBTRow<TData extends Record<string, unknown>> = {
  /** The record we need to create a table row for. */
  data: TData;
  /** The records table row number. */
  position: number;
  /** List of filters currently applied to the object */
  filters: string[];
};
