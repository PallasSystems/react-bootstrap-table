import React, { FC, useCallback, useMemo, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { ChevronBarLeft, ChevronBarRight, ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

import { RBTRowControlOptions } from './rowcontrols.types';
import { getRowOptions, getRowRangeText } from './rowcontrols.helper';
import { RBTRow } from '../common/common.types';

export const RBTRowControls: FC<RBTRowControlOptions> = ({ rowsPerPage, data, name, varient, handleDisplayedRows }) => {
  const styleVarient = useMemo(() => varient ?? 'dark', [varient]);
  const [paginationRows, setPaginationRows] = useState<number>(rowsPerPage ?? 5);
  //
  const [tablePosition, setTablePosition] = useState<number>(0);
  const handleTablePosition = (tablePos: number) => {
    if (handleDisplayedRows) {
      const displayedRows: RBTRow<Record<string, any>>[] = [];

      let changed = false;
      const upperRange = tablePos + paginationRows;
      for (let index = 0; index < data.length; index++) {
        const row: RBTRow<Record<string, any>> = data[index];
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

  const numRows = useMemo(() => {
    return data ? data.length : 0;
  }, [data]);
  const rowOptions = useMemo(() => getRowOptions(numRows), [data]);
  const rangeText = useMemo(
    () => getRowRangeText(numRows, paginationRows, tablePosition),
    [numRows, paginationRows, tablePosition],
  );
  //
  const tableName = useMemo(() => {
    let result = 'Row Controls';
    if (name && name.length > 0) {
      result = name;
    }
    return result;
  }, [name]);

  const test = (): boolean => {
    console.log('test - numRows: ' + numRows);
    console.log('test - paginationRows: ' + paginationRows);
    console.log('test - tablePosition: ' + tablePosition);

    const result = tablePosition - paginationRows < 0;
    console.log('test - result: ' + result);

    return result;
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
          onChange={(e) => setPaginationRows(+e.currentTarget.value)}
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
          disabled={test()}
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
