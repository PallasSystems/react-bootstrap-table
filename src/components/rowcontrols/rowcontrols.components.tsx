import React, { FC, useEffect, useMemo, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { ChevronBarLeft, ChevronBarRight, ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

import { RBTRowControlOptions } from './rowcontrols.types';
import { getRowOptions, getRowRangeText } from './rowcontrols.helper';
import { RBTRow } from '../common/common.types';

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
    name && name.length > 0 ? name + ' Row Controls' : 'Row Controls';
  }, [name]);

  /** How Many Table rows should be displayed? The default is 5 */
  const [paginationRows, setPaginationRows] = useState<number>(rowsPerPage ?? 5);
  /** What is the current position of displayed rows within the table (e.g. if there are 5 rows per page and 10 records, position could be 0, 5)*/
  const [tablePosition, setTablePosition] = useState<number>(0);
  /**
   * This is supplied a new table position, it will iterate only data from that postion (to the range endpoint)
   * @param tablePos the new table position
   */
  const handleTablePosition = (tablePos: number) => {
    if (handleDisplayedRows) {
      const displayedRows: RBTRow<TData>[] = [];

      let changed = false;
      const upperRange = tablePos + paginationRows;
      for (let index = 0; index < data.length; index++) {
        const row: RBTRow<TData> = data[index];
        if (row.position >= tablePos && row.position < upperRange) {
          changed = changed || !row.displayed;
          row.displayed = true;
        } else if (row.displayed) {
          row.displayed = false;
          changed = true;
        }
        displayedRows.push(row);
      }

      if (changed) {
        handleDisplayedRows(displayedRows);
      }
    }
    setTablePosition(tablePos);
  };

  /** Works out how many rows are visible to the user, to create a row total. */
  const numRows = useMemo(() => {
    let result = 0;
    if (data) {
      for (let index = 0; index < data.length; index++) {
        if (!data[index].filtered) {
          result++;
        }
      }
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
   *
   */
  useEffect(() => {
    handleTablePosition(0);
  });

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
      } else {
        const convertedValue = Number(value);
        if (isNaN(convertedValue)) {
          console.log('handleTablePagination: Invalid Value has been supplied ' + value);
        } else {
          setPaginationRows(convertedValue);
        }
      }
    }
  };

  return (
    <Row className={'align-items-center mx-0 px-0'}>
      <Col />
      <Col md='auto'>Rows per page:</Col>
      <Col md='auto'>
        <Form.Select
          aria-expanded={false}
          aria-haspopup={'listbox'}
          aria-label={tableName + ' Set Rows Per Table Page'}
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
      <Col md='auto'>{rangeText}</Col>
      <Col md='auto' className={'mx-1 px-0'}>
        <Button
          aria-label={tableName + ' Move to first page of table results'}
          onClick={() => handleTablePosition(0)}
          disabled={tablePosition === 0}
          variant={styleVarient}
        >
          <ChevronBarLeft />
        </Button>
      </Col>
      <Col md='auto' className={'mx-1 px-0'}>
        <Button
          aria-label={tableName + ' Move to previous page of table results'}
          onClick={() => handleTablePosition(tablePosition - paginationRows)}
          disabled={tablePosition - paginationRows < 0}
          variant={styleVarient}
        >
          <ChevronLeft />
        </Button>
      </Col>
      <Col md='auto' className={'mx-1 px-0'}>
        <Button
          aria-label={tableName + ' Move to next page of table results'}
          onClick={() => handleTablePosition(tablePosition + paginationRows)}
          disabled={tablePosition + paginationRows >= numRows}
          variant={styleVarient}
        >
          <ChevronRight />
        </Button>
      </Col>
      <Col md='auto' className={'mx-1 px-0'}>
        <Button
          aria-label={tableName + ' Move to last page of table results'}
          onClick={() => handleTablePosition(numRows - paginationRows)}
          disabled={numRows - paginationRows <= tablePosition}
          variant={styleVarient}
        >
          <ChevronBarRight />
        </Button>
      </Col>
    </Row>
  );
};
