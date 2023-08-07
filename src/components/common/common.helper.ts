import { RBTRow } from '.';

/**
 * Function to
 * @param valueA
 * @param valueB
 * @returns
 */
export const CompareRBTRow = <TData extends Record<string, unknown>>(
  valueA: RBTRow<TData>,
  valueB: RBTRow<TData>,
): number => {
  let comparison = 0;
  if (valueA.position > valueB.position) {
    comparison = 1;
  } else if (valueA.position < valueB.position) {
    comparison = -1;
  }

  return comparison;
};

/**
 * Used to remove a value from the supplied array and return the rest of the array contents.
 *
 * @param filterValue the value to remove from the array
 * @param filters the values to be processed.
 * @returns  an empty string if the supplied
 */
export const RemoveFilterFromArray = (filterValue: string, filters: string[]) => {
  const result: string[] = [];

  if (Array.isArray(filters)) {
    for (let index = 0; index < filters.length; index++) {
      const filter = filters[index];
      if (filter !== filterValue) {
        result.push(filter);
      }
    }
  }

  return result;
};
