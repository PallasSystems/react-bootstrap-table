import { describe, expect, test } from '@jest/globals';

import { getRowOptions, getRowRangeText } from './rowcontrols.helper';

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
