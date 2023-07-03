import type { BaseTableEntity } from '../common';

export type BootstrapTableRowControlProps = BaseTableEntity & {
  numRows: number;
  rowsPerPage: number;
  setRowsPerPage: (e: number) => void;
  tablePosition: number;
  setTablePosition: (e: number) => void;
};
