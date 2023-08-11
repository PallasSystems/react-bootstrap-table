import { describe, expect, test } from '@jest/globals';

import { FILTER_VALUE, SetPaginationFilter, getRowOptions, getRowRangeText } from './rowcontrols.helper';
import { SimpleDataType } from '../common/common.testdata';
import { RBTRow } from '../common';

const testData: RBTRow<SimpleDataType>[] = [
  { position: 0, filters: [], data: { firstName: 'Joe', surname: 'Bloggs', age: 24 } },
  { position: 1, filters: [], data: { firstName: 'Jane', surname: 'Doe', age: 36 } },
  { position: 2, filters: [], data: { firstName: 'John', surname: 'Smith', age: 48 } },
  { position: 3, filters: [], data: { firstName: 'Patty', surname: "O'Furniture", age: 24 } },
  { position: 4, filters: [], data: { firstName: 'Teri', surname: 'Dactyl', age: 36 } },
  { position: 5, filters: [], data: { firstName: 'Allie', surname: 'Grater', age: 48 } },
];

describe('getRowOptions', () => {
  test('Happy Path', () => {
    expect(getRowOptions(250)).toStrictEqual(['5', '10', '25', '50', '100', 'All']);
  });

  test('Less Than 100', () => {
    expect(getRowOptions(75)).toStrictEqual(['5', '10', '25', '50', 'All']);
  });

  test('Less Than 50', () => {
    expect(getRowOptions(30)).toStrictEqual(['5', '10', '25', 'All']);
  });

  test('Less Than 25', () => {
    expect(getRowOptions(20)).toStrictEqual(['5', '10', 'All']);
  });

  test('Less Than 10', () => {
    expect(getRowOptions(7)).toStrictEqual(['5', 'All']);
  });

  test('Less Than 5', () => {
    expect(getRowOptions(3)).toStrictEqual(['All']);
  });

  test('Negative', () => {
    expect(getRowOptions(-10)).toStrictEqual(['All']);
  });
});

describe('getRowRangeText', () => {
  test('Happy Path', () => {
    expect(getRowRangeText(100, 10, 0)).toBe('1 - 10 of 100');
  });

  test('Invalid Rows', () => {
    expect(getRowRangeText(-123, 10, 0)).toBe('0 of 0');
  });

  test('Invalid Rows on Page', () => {
    expect(getRowRangeText(100, -10, 0)).toBe('1 - ? of 100');
  });

  test('Invalid Position', () => {
    expect(getRowRangeText(100, 10, 200)).toBe('? of 100');
  });
});

describe('SetPaginationFilter', () => {
  test('Empty Request', () => {
    const result: RBTRow<SimpleDataType>[] = [];
    expect(SetPaginationFilter<SimpleDataType>(0, 0, result)).toStrictEqual(result);
  });
  test('Valid 2 Page', () => {
    const expected: RBTRow<SimpleDataType>[] = [
      { position: 0, filters: [FILTER_VALUE], data: { firstName: 'Joe', surname: 'Bloggs', age: 24 } },
      { position: 1, filters: [FILTER_VALUE], data: { firstName: 'Jane', surname: 'Doe', age: 36 } },
      { position: 2, filters: [], data: { firstName: 'John', surname: 'Smith', age: 48 } },
      { position: 3, filters: [], data: { firstName: 'Patty', surname: "O'Furniture", age: 24 } },
      { position: 4, filters: [FILTER_VALUE], data: { firstName: 'Teri', surname: 'Dactyl', age: 36 } },
      { position: 5, filters: [FILTER_VALUE], data: { firstName: 'Allie', surname: 'Grater', age: 48 } },
    ];

    expect(SetPaginationFilter<SimpleDataType>(2, 2, testData)).toStrictEqual(expected);
  });
});
