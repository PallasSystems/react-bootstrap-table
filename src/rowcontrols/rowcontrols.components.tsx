import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { ChevronBarLeft, ChevronBarRight, ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

import { RBTRowControlOptions } from './rowcontrols.types';
import { SetPaginationFilter, getRowOptions, getRowRangeText } from './rowcontrols.helper';
import { RBTRow } from '../common/common.types';
import { RemoveFilterFromArray } from '../common';

/** Unique value for filters applied by this component. */
const FILTER_VALUE = 'rowcontrols';

/**
 * This is used to create table paigniation controls at the bottom of the table
 * @param {RBTRowControlOptions} param0
 * @returns
 */

export const RBTRowControls = <TData extends Record<string, unknown>>({
  rowsPerPage,
  data,
  name,
  varient,
  handleDisplayedRows,
}: RBTRowControlOptions<TData>) => {
  const styleVarient = useMemo(() => varient ?? 'dark', [varient]);
  const tableName = useMemo(() => {
    let result = 'Row Controls';
    if (name) {
      if (name.length > 0) {
        result = name + ' ' + result;
      }
    }
    return result;
  }, [name]);

  /** How Many Table rows should be displayed? The default is 5 */
  const [paginationRows, setPaginationRows] = useState<number>(rowsPerPage ?? 5);
  /** What is the current position of displayed rows within the table (e.g. if there are 5 rows per page and 10 records, position could be 0, 5)*/
  const [tablePosition, setTablePosition] = useState<number>(0);

  /**
   * If a callback function has been supplied his will update the data to indicate if row controls should be applied to the data.
   *
   * @param position the position we should be centered on.
   * @param rowsPerPage  the number of rows we want to see on a 'page'
   * @param rows  the rows to be processed
   * @param rowsToMark allows us to control how much is displayed
   * @returns processed RBTRows
   */
  const updateDisplayedRows = useCallback(
    (position: number, rowsPerPage: number, rows: RBTRow<TData>[], rowsToMark = 0) => {
      if (typeof handleDisplayedRows === 'function') {
        const original = JSON.stringify(data);
        const updatedRows: RBTRow<TData>[] = SetPaginationFilter(position, rowsPerPage, rows, rowsToMark);
        const updated = JSON.stringify(updatedRows);
        // Use strings to check if we have added/removed rowcontrol filters to anytning
        if (original !== updated) {
          handleDisplayedRows(updatedRows);
        }
      }
    },
    [],
  );

  /**
   * This is supplied a new table position, it will iterate only data from that postion (to the range endpoint)
   * @param tablePos the new table position
   */
  const handleTablePosition = useCallback(
    (tablePos: number) => {
      if (tablePosition !== tablePos) {
        setTablePosition(tablePos);
      }

      updateDisplayedRows(tablePos, paginationRows, data);
    },
    [data],
  );

  /** Works out how many rows are visible to the user, to create a row total. */
  const numRows = useMemo(() => {
    let result = 0;
    if (data) {
      data.forEach((row) => {
        if (row) {
          if (row.filters.length === 0) {
            result++;
          } else {
            // Check it isn't this component filtering the value, if it is we should include it
            // within the count
            const filters = RemoveFilterFromArray(FILTER_VALUE, row.filters);
            if (filters.length === 0) {
              result++;
            }
          }
        }
      });
    }

    return result;
  }, [data]);
  /** Gets the table sizes based on the number of rows of data.*/
  const rowOptions = useMemo(() => getRowOptions(numRows), [data]);
  /** Generates the text which sits next to the drop down to indicate to the user, */
  const rangeText = useMemo(
    () => getRowRangeText(numRows, paginationRows, tablePosition),
    [numRows, paginationRows, tablePosition],
  );

  /**
   * Called as the drop down can contain numbers and string values, so this correctly converts
   * them as appropriate.
   *
   * @param {string} value the Rows Per Page value we want to update the table to
   */
  const handleTablePagination = (value: string) => {
    if (value) {
      if (value === 'All') {
        setPaginationRows(numRows);
        updateDisplayedRows(0, numRows, data);
      } else {
        const convertedValue = Number(value);
        if (isNaN(convertedValue)) {
          console.log('handleTablePagination: Invalid Value has been supplied ' + value);
        } else {
          setPaginationRows(convertedValue);
          updateDisplayedRows(tablePosition, convertedValue, data, convertedValue);
        }
      }
    }
  };

  useEffect(() => {
    handleTablePosition(tablePosition);
  }, [data, tablePosition]);

  return (
    <Row className={'justify-content-end mx-1 my-1'}>
      <Col xs={'auto'}>
        <p className={'pt-2'}>Rows per page</p>
      </Col>
      <Col xs={'auto'}>
        <Form.Select
          aria-expanded={false}
          aria-haspopup={'listbox'}
          aria-label={tableName + ' Set Rows Per Table Page'}
          className={'mx-1 my-1'}
          onChange={(e) => handleTablePagination(e.currentTarget.value)}
        >
          {rowOptions.map((option: string) => {
            return (
              <option role='menuitem' key={'table.dropdown.' + option}>
                {option}
              </option>
            );
          })}
        </Form.Select>
      </Col>
      <Col xs={'auto'}>
        <p className={'pt-2'}>{rangeText}</p>
      </Col>
      {numRows > paginationRows ? (
        <Col xs={'auto'}>
          <Button
            aria-label={tableName + ' Move to first page of table results'}
            className={'mx-1 my-1 px-2'}
            onClick={() => handleTablePosition(0)}
            disabled={tablePosition === 0}
            variant={styleVarient}
          >
            <ChevronBarLeft />
          </Button>
          <Button
            aria-label={tableName + ' Move to previous page of table results'}
            className={'mx-1 my-1 px-2'}
            onClick={() => handleTablePosition(tablePosition - paginationRows)}
            disabled={tablePosition - paginationRows < 0}
            variant={styleVarient}
          >
            <ChevronLeft />
          </Button>
          <Button
            aria-label={tableName + ' Move to next page of table results'}
            className={'mx-1 my-1 px-2'}
            onClick={() => handleTablePosition(tablePosition + paginationRows)}
            disabled={tablePosition + paginationRows >= numRows}
            variant={styleVarient}
          >
            <ChevronRight />
          </Button>
          <Button
            aria-label={tableName + ' Move to last page of table results'}
            className={'mx-1 my-1 px-2'}
            onClick={() => handleTablePosition(numRows - paginationRows)}
            disabled={numRows - paginationRows <= tablePosition}
            variant={styleVarient}
          >
            <ChevronBarRight />
          </Button>
        </Col>
      ) : null}
    </Row>
  );
};
