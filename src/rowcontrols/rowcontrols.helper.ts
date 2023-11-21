import { CompareRBTRow, RBTRow, RemoveFilterFromArray } from '../common';

/** Unique value for filters applied by this component. */
export const FILTER_VALUE = 'rowcontrols';

/**
 * Used to work out the set ranges that should be displayed in the row controls based
 * on the supplied number.
 * @param rows the rows contained within the table (e.g. length of data array)
 * @returns a valid string array with row values.
 */
export const getRowOptions = (rows: number): string[] => {
  let results: string[];

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

/**
 * Various components in the library can cause a Table row to be filtered from the display (e.g. search).
 * The pagination filter is supposed to display blocks of results.
 *
 * This means it needs to move to the target position and look for rows which only have the pagination
 * filter applied and remove the pagination filter under the desired number of page objects is visible.
 *
 *
 * @param position the position we should be centered on.
 * @param rowsPerPage  the number of rows we want to see on a 'page'
 * @param rows  the rows to be processed
 * @param rowsToMark allows us to control how much is displayed
 * @returns processed RBTRows
 */
export const SetPaginationFilter = <TData extends Record<string, unknown>>(
  position: number,
  rowsPerPage: number,
  rows: RBTRow<TData>[],
  rowsToMark = 0,
) => {
  const results: RBTRow<TData>[] = [];
  let count = rowsToMark;

  const sortedRows = rows.sort(CompareRBTRow);

  for (let index = position; index < sortedRows.length; index++) {
    const row: RBTRow<TData> = sortedRows[index];

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

  if (position > 0 && position < sortedRows.length) {
    for (let index = 0; index < position; index++) {
      const row: RBTRow<TData> = sortedRows[index];
      //remove the row control filter from the list
      row.filters = RemoveFilterFromArray(FILTER_VALUE, row.filters);
      row.filters.push(FILTER_VALUE);
      results.push(row);
    }
  }

  return results.sort(CompareRBTRow);
};
