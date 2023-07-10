export type RBTStyleOptions = {
  varient?: string;
  name?: string;
};

export type RBTData<TData extends Record<string, any> = {}> = RBTStyleOptions & {
  columns: RBTColumnDefs<TData>[];
  data: TData[];
};

export type RBTColumnSizing {
  enableResizing?: boolean;
  size?: number;
  minSize?: number;
  maxSize?: number;
}

/**
 * @typedef {Object} RBTColumnDefs Information required to define a the table columns and data mapppings.
 * @property {string} accessorKey the Field name within a data object we want to represent in the table.
 * @property {string} header the Label to provide in the column header for the table
 * @property {boolean} [searchable] should this particular field be part of the search mechanisim?
 */
export type RBTColumnDefs<TData extends Record<string, any> = {}> = RBTColumnSizing & {
  /**
   * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
   * Specify a function here to point to the correct property in the data object.
   *
   * @example accessorFn: (row) => row.username
   */
  accessorFn?: (originalRow: TData) => any;
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

  searchable?: boolean;
};

export type RBTRow<TData extends Record<string, any>> = {
  data: TData;
  position: number;
  filtered: boolean;
  displayed: boolean;
};
