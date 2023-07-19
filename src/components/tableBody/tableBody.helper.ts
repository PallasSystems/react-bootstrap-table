import { RBTRow } from '../common';

/**
 * Function to
 * @param valueA
 * @param valueB
 * @returns
 */
export const CompareRBTRow = (valueA: RBTRow, valueB: RBTRow): number => {
  let comparison = 0;
  if (valueA.position > valueB.position) {
    comparison = 1;
  } else if (valueA.position < valueB.position) {
    comparison = -1;
  }

  return comparison;
};
