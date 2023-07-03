export type BootstrapTableRowControlProps = {
  numRows: number;
  rowsPerPage: number;
  setRowsPerPage: (e: number) => void;
  tablePosition: number;
  setTablePosition: (e: number) => void;
  varient?: string;
};
