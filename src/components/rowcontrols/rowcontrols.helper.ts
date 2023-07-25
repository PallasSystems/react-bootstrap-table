import { CompareRBTRow, RBTRow, RemoveFilterFromArray } from '../common';

/** Unique value for filters applied by this component. */
const FILTER_VALUE = 'rowcontrols';

export const getRowOptions = (rows: number): string[] => {
  let results: string[] = ['0'];

  if (rows > 100) {
    results = ['5', '10', '25', '50', '100'];
  } else if (rows > 50) {
    results = ['5', '10', '25', '50', 'All'];
  } else if (rows > 25) {
    results = ['5', '10', '25', 'All'];
  } else if (rows > 10) {
    results = ['5', '10', 'All'];
  } else if (rows > 5) {
    results = ['5', 'All'];
  } else {
    results = ['All'];
  }

  return results;
};

export const getRowRangeText = (rows: number, rowsPerPage: number, tablePosition: number): string => {
  let result = '0 of 0';

  if (rows > 0) {
    result = tablePosition + 1 + ' - ';
    if (tablePosition + rowsPerPage > rows) {
      result += rows;
    } else {
      result += tablePosition + rowsPerPage;
    }

    result += ' of ' + rows;
  }

  return result;
};

export const SetPaginationFilter = <TData extends Record<string, unknown>>(
  position: number,
  rowsPerPage: number,
  rows: RBTRow<TData>[],
  rowsToMark = 0,
) => {
  const results: RBTRow<TData>[] = [];
  let count = rowsToMark;

  rows = rows.sort(CompareRBTRow);

  for (let index = position; index < rows.length; index++) {
    const row: RBTRow<TData> = rows[index];

    if (count < rowsPerPage) {
      if (row.filters.length === 0) {
        count++;
      } else {
        //remove the row control filter from the list
        row.filters = RemoveFilterFromArray(FILTER_VALUE, row.filters);

        // If after removing the row control filter there
        // are no filters we can assume the record is displayed
        // otherwise we need to keep it filtered out
        if (row.filters.length === 0) {
          count++;
        } else {
          row.filters.push(FILTER_VALUE);
        }
      }
    } else if (row.filters.length === 0) {
      row.filters.push(FILTER_VALUE);
    } else {
      //remove the row control filter from the list
      row.filters = RemoveFilterFromArray(FILTER_VALUE, row.filters);
      row.filters.push(FILTER_VALUE);
    }

    results.push(row);
  }

  if (position > 0 && position < rows.length) {
    for (let index = 0; index < position; index++) {
      const row: RBTRow<TData> = rows[index];
      //remove the row control filter from the list
      row.filters = RemoveFilterFromArray(FILTER_VALUE, row.filters);
      row.filters.push(FILTER_VALUE);
      results.push(row);
    }
  }

  //console.log('Results: ' + JSON.stringify(results));

  return results.sort(CompareRBTRow);
};
