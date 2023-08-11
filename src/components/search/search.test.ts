import { describe, expect, test } from '@jest/globals';

import type { SimpleDataType } from '../common/common.testdata';
import { RBTRow } from '../common';

import { isMatch } from './search.helpers';

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
    const result: RBTRow<SimpleDataType>[] = [];
    expect(isMatch<SimpleDataType>('', testData[0], [])).toStrictEqual(true);
  });
  test('No Match', () => {
    const result: RBTRow<SimpleDataType>[] = [];
    expect(isMatch<SimpleDataType>('blah', testData[0], ['firstName'])).toStrictEqual(false);
  });
  test('Valid Match', () => {
    const result: RBTRow<SimpleDataType>[] = [];
    expect(isMatch<SimpleDataType>('Joe', testData[0], ['firstName', 'surname', 'age'])).toStrictEqual(true);
  });
  test('Valid Term, Wrong fields', () => {
    const result: RBTRow<SimpleDataType>[] = [];
    expect(isMatch<SimpleDataType>('Joe', testData[0], ['surname', 'age'])).toStrictEqual(false);
  });
});
