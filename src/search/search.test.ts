import { describe, expect, test } from '@jest/globals';

import type { SimpleDataType } from '../common/common.testdata';
import { RBTRow } from '../common';

import { FILTER_VALUE, isMatch, updateFilterAndDisplayed } from './search.helpers';

const testData: RBTRow<SimpleDataType>[] = [
  { position: 0, filters: [], data: { firstName: 'Joe', surname: 'Bloggs', age: 24 } },
  { position: 0, filters: [], data: { firstName: 'Jane', surname: 'Doe', age: 36 } },
  { position: 0, filters: [], data: { firstName: 'John', surname: 'Smith', age: 48 } },
  { position: 0, filters: [], data: { firstName: 'Patty', surname: "O'Furniture", age: 24 } },
  { position: 0, filters: [], data: { firstName: 'Teri', surname: 'Dactyl', age: 36 } },
  { position: 0, filters: [], data: { firstName: 'Allie', surname: 'Grater', age: 48 } },
];

describe('isMatch', () => {
  test('Empty Filter', () => {
    expect(isMatch<SimpleDataType>('', testData[0], [])).toStrictEqual(true);
  });
  test('No Match', () => {
    expect(isMatch<SimpleDataType>('blah', testData[0], ['firstName'])).toStrictEqual(false);
  });
  test('Valid Match', () => {
    expect(isMatch<SimpleDataType>('Joe', testData[0], ['firstName', 'surname', 'age'])).toStrictEqual(true);
  });
  test('Valid Term, Wrong fields', () => {
    expect(isMatch<SimpleDataType>('Joe', testData[0], ['surname', 'age'])).toStrictEqual(false);
  });
});

describe('updateFilterAndDisplayed', () => {
  test('Empty Request', () => {
    const result: RBTRow<SimpleDataType>[] = [];
    expect(updateFilterAndDisplayed<SimpleDataType>('', [], [])).toStrictEqual(result);
  });

  test('Valid 2 Page', () => {
    const supplied: RBTRow<SimpleDataType>[] = [
      { position: 0, filters: [], data: { firstName: 'Joe', surname: 'Bloggs', age: 24 } },
      { position: 1, filters: [], data: { firstName: 'Jane', surname: 'Doe', age: 36 } },
      { position: 2, filters: [], data: { firstName: 'John', surname: 'Smith', age: 48 } },
      { position: 3, filters: [], data: { firstName: 'Patty', surname: "O'Furniture", age: 24 } },
      { position: 4, filters: [FILTER_VALUE], data: { firstName: 'Teri', surname: 'Dactyl', age: 36 } },
      { position: 5, filters: [FILTER_VALUE], data: { firstName: 'Allie', surname: 'Grater', age: 48 } },
    ];

    const expected: RBTRow<SimpleDataType>[] = [
      { position: 0, filters: [], data: { firstName: 'Joe', surname: 'Bloggs', age: 24 } },
      { position: 1, filters: [FILTER_VALUE], data: { firstName: 'Jane', surname: 'Doe', age: 36 } },
      { position: 2, filters: [FILTER_VALUE], data: { firstName: 'John', surname: 'Smith', age: 48 } },
      { position: 3, filters: [FILTER_VALUE], data: { firstName: 'Patty', surname: "O'Furniture", age: 24 } },
      { position: 4, filters: [FILTER_VALUE], data: { firstName: 'Teri', surname: 'Dactyl', age: 36 } },
      { position: 5, filters: [FILTER_VALUE], data: { firstName: 'Allie', surname: 'Grater', age: 48 } },
    ];

    expect(updateFilterAndDisplayed<SimpleDataType>('joe', supplied, ['firstName'])).toStrictEqual(expected);
  });
});
