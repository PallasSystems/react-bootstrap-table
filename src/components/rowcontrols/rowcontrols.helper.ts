import { CompareRBTRow, RBTRow, RemoveFilterFromArray } from '../common';

/** Unique value for filters applied by this component. */
const FILTER_VALUE = 'rowcontrols';

/**
 * Used to work out the set ranges that should be displayed in the row controls based
 * on the supplied number.
 * @param rows the rows contained within the table (e.g. length of data array)
 * @returns a valid string array with row values.
 */
export const getRowOptions = (rows: number): string[] => {
  let results: string[] = ['0'];

  if (rows > 100) {
    results = ['5', '10', '25', '50', '100', 'All'];
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

/**
 * Used to create a text block to explain what rows are currently displayed on the page.
 *
 * @param rows the total rows of data within the table
 * @param rowsPerPage how many rows of data the table is currently displayed
 * @param position the current start position of the display
 * @returns a valid text string.
 */
export const getRowRangeText = (rows: number, rowsPerPage: number, position: number): string => {
  let result = '0 of 0';
  const tablePosition = position + 1;

  if (rows > 0) {
    if (tablePosition > 0 && tablePosition <= rows) {
      if (rowsPerPage > 0) {
        if (position + rowsPerPage <= rows) {
          result = tablePosition + ' - ' + (position + rowsPerPage) + ' of ' + rows;
        } else {
          result = tablePosition + ' - ' + rows + ' of ' + rows;
        }
      } else {
        result = tablePosition + ' - ? of ' + rows;
      }
    } else {
      result = '? of ' + rows;
    }
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
