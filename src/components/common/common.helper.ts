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

export const RemoveFilterFromArray = (filterValue: string, filters: string[]) => {
  let result: string[] = [];

  if (Array.isArray(result)) {
    for (let index = 0; index < filters.length; index++) {
      const filter = filters[index];
      if (filter !== filterValue) {
        result.push(filter);
      }
    }
  }

  return result;
};
