import { ColumnDefs } from './table.types';

export const isSearchable = (columnDefs: ColumnDefs[]): boolean => {
  let result = false;

  columnDefs.forEach((value: ColumnDefs) => {
    if (value.searchable) {
      result = true;
    }
  });

  return result;
};

export const retrieveSearchMatches = (
  toFind: string,
  columnDefs: ColumnDefs[],
  values: Record<string, string>[],
): Record<string, string>[] => {
  const results: Record<string, string>[] = [];

  console.log('toFind: ' + toFind);

  const keys: string[] = [];
  columnDefs.forEach((value: ColumnDefs) => {
    if (value.searchable) {
      keys.push(value.accessorKey);
    }
  });

  const upperToFind = toFind.toUpperCase();

  values.forEach((value) => {
    let matched = false;
    keys.forEach((key) => {
      if (value[key] && value[key].toUpperCase().indexOf(upperToFind) > -1) {
        matched = true;
      }
    });
    if (matched) {
      results.push(value);
    }
  });

  console.log('results: ' + JSON.stringify(results));

  return results;
};
