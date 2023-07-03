export type ColumnDefs = {
  field: string;
  label: string;
  searchable?: boolean;
};

export type TableData = {
  request_url?: string;
  columns?: ColumnDefs[];
  data?: Record<string, string>[];
};
