import { RBTColumnDefs } from '../common';

export const isSearchable = <TData extends Record<string, unknown>>(columnDefs: RBTColumnDefs<TData>[]): boolean => {
  let result = false;

  columnDefs.forEach((value: RBTColumnDefs<TData>) => {
    if (value.searchable) {
      result = true;
    }
  });

  return result;
};

export const retrieveSearchMatches = <TData extends Record<string, unknown>>(
  toFind: string,
  columnDefs: RBTColumnDefs<TData>[],
  values: TData[],
): TData[] => {
  const results: TData[] = [];

  const keys: string[] = [];
  columnDefs.forEach((value: RBTColumnDefs<TData>) => {
    const accessor = value.accessorKey;
    if (value.searchable) {
      if (typeof accessor === 'string') {
        keys.push(accessor);
      } else {
        console.log('retrieveSearchMatches - Unable to retrieve accessor for column: ' + JSON.stringify(value));
      }
    }
  });

  const upperToFind = toFind.toUpperCase();

  values.forEach((value) => {
    let matched = false;
    keys.forEach((key) => {
      const field = value[key];
      if (typeof field === 'string') {
        if (field.toUpperCase().indexOf(upperToFind) > -1) {
          matched = true;
        }
      }
    });
    if (matched) {
      results.push(value);
    }
  });

  return results;
};
