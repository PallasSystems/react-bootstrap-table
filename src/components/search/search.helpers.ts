import { RBTRow, RemoveFilterFromArray } from '../common';

/** Unique value for filters applied by this component. */
const FILTER_VALUE = 'search';

export const updateFilterAndDisplayed = <TData extends Record<string, unknown>>(
  toFind: string,
  rows: RBTRow<TData>[],
  searchableColumns: string[],
): RBTRow<TData>[] => {
  const results: RBTRow<TData>[] = [];

  //iterate over each table record to find ones which match our search term
  rows?.forEach((row: RBTRow<TData>) => {
    // If the filtering status of the row has changed we need to capture this and feed
    // it back to the other components.
    if (isMatch<TData>(toFind, row, searchableColumns)) {
      row.filters = RemoveFilterFromArray(FILTER_VALUE, row.filters);
    } else if (row.filters.indexOf(FILTER_VALUE) < 0) {
      row.filters.push(FILTER_VALUE);
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
    for (const key in searchableColumns) {
      // TODO This needs to be configured for multi level objects
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
