import { RBTRow } from '../common';

export const updateFilterAndDisplayed = <TData extends Record<string, unknown>>(
  toFind: string,
  rows: RBTRow<TData>[],
  searchableColumns: string[],
): RBTRow<TData>[] => {
  const results: RBTRow<TData>[] = [];

  let displayCounter = 0;
  //iterate over each table record to find ones which match our search term
  rows?.forEach((row: RBTRow<TData>) => {
    // If the filtering status of the row has changed we need to capture this and feed
    // it back to the other components.
    if (isMatch<TData>(toFind, row, searchableColumns)) {
      row.filters = row.filters.filter((filter) => filter === 'search');
    } else if (row.filters.indexOf('search') < 0) {
      row.filters.push('search');
    }

    results.push(row);
  });

  // if we haven't changed what is displayed update nothing!
  return results;
};

export const isMatch = <TData extends Record<string, unknown>>(
  toFind: string,
  row: RBTRow<TData>,
  searchableColumns: string[],
): boolean => {
  // if toFind is cleared then we assume nothing is filtered.
  let match = toFind.length == 0;
  const data = row.data;

  if (data) {
    for (let keyIndex = 0; keyIndex < searchableColumns.length; keyIndex++) {
      // TODO This needs to be configured for multi level objects
      const key = searchableColumns[keyIndex];
      const value = data[key];
      if (typeof value === 'string') {
        match = value.toUpperCase().indexOf(toFind) > -1;

        if (match) {
          break;
        }
      }
    }
  }

  return match;
};
