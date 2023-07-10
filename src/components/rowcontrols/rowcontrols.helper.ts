export const getRowOptions = (rows: number): string[] => {
  let results: string[] = ['0'];

  if (rows > 100) {
    results = ['5', '10', '25', '50', '100'];
  } else if (rows > 50) {
    results = ['5', '10', '25', '50', rows.toString()];
  } else if (rows > 25) {
    results = ['5', '10', '25', rows.toString()];
  } else if (rows > 10) {
    results = ['5', '10', rows.toString()];
  } else if (rows > 5) {
    results = ['5', rows.toString()];
  } else {
    results = [rows.toString()];
  }

  return results;
};

export const getRowRangeText = (rows: number, rowsPerPage: number, tablePosition: number): string => {
  let result = '0 of 0';

  console.log('getRowRangeText - rows: ' + rows);
  console.log('getRowRangeText - rowsPerPage: ' + rowsPerPage);
  console.log('getRowRangeText - tablePosition: ' + tablePosition);

  if (rows > 0) {
    result = tablePosition + 1 + ' - ';
    if (tablePosition + rowsPerPage > rows) {
      result += rows;
    } else {
      result += tablePosition + rowsPerPage;
    }

    result += ' of ' + rows;
  }

  console.log('getRowRangeText - result: ' + result);

  return result;
};
