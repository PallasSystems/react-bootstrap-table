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
