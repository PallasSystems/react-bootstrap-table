import { describe, expect, test } from '@jest/globals';

import type { SimpleDataType } from './common.testdata';
import { CompareRBTRow, RemoveFilterFromArray } from './common.helper';
import { RBTRow } from './common.types';

describe('CompareRBTRow', () => {
  test('Equal', () => {
    const rowA: RBTRow<SimpleDataType> = {
      position: 0,
      filters: [],
      data: { firstName: 'Joe', surname: 'Bloggs', age: 24 },
    };
    const rowB: RBTRow<SimpleDataType> = {
      position: 0,
      filters: [],
      data: { firstName: 'Jane', surname: 'Doe', age: 36 },
    };

    expect(CompareRBTRow<SimpleDataType>(rowA, rowB)).toBe(0);
  });

  test('A is Lower', () => {
    const rowA: RBTRow<SimpleDataType> = {
      position: 0,
      filters: [],
      data: { firstName: 'Joe', surname: 'Bloggs', age: 24 },
    };
    const rowB: RBTRow<SimpleDataType> = {
      position: 1,
      filters: [],
      data: { firstName: 'Jane', surname: 'Doe', age: 36 },
    };

    expect(CompareRBTRow<SimpleDataType>(rowA, rowB)).toBe(-1);
  });

  test('A is Greater', () => {
    const rowA: RBTRow<SimpleDataType> = {
      position: 1,
      filters: [],
      data: { firstName: 'Joe', surname: 'Bloggs', age: 24 },
    };
    const rowB: RBTRow<SimpleDataType> = {
      position: 0,
      filters: [],
      data: { firstName: 'Jane', surname: 'Doe', age: 36 },
    };

    expect(CompareRBTRow<SimpleDataType>(rowA, rowB)).toBe(1);
  });
});

describe('RemoveFilterFromArray', () => {
  test('Happy Path', () => {
    const supplied = ['abc', 'def', 'ghi'];
    const filter = 'abc';
    const expected = ['def', 'ghi'];

    expect(RemoveFilterFromArray(filter, supplied)).toStrictEqual(expected);
  });

  test('Empty Array', () => {
    expect(RemoveFilterFromArray('', [])).toStrictEqual([]);
  });

  test('Empty Filter Value', () => {
    const supplied = ['abc', 'def', 'ghi'];
    const filter = '';
    const expected = ['abc', 'def', 'ghi'];

    expect(RemoveFilterFromArray(filter, supplied)).toStrictEqual(expected);
  });
});
