import React, { FC, useMemo } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { ChevronBarLeft, ChevronBarRight, ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

import { BootstrapTableRowControlProps } from './rowcontrols.types';
import { getRowOptions, getRowRangeText } from './rowcontrols.helper';

export const BootstrapTableRowControls: FC<BootstrapTableRowControlProps> = ({
  numRows,
  rowsPerPage,
  tablePosition,
  name,
  varient,
  setRowsPerPage,
  setTablePosition,
}) => {
  const styleVarient = useMemo(() => varient ?? 'dark', [varient]);
  const rowOptions = useMemo(() => getRowOptions(numRows), [numRows]);
  const rangeText = useMemo(
    () => getRowRangeText(numRows, rowsPerPage, tablePosition),
    [numRows, rowsPerPage, tablePosition],
  );
  const tableName = useMemo(() => {
    let result = 'Row Controls';
    if (name && name.length > 0) {
      result = name;
    }
    return result;
  }, [name]);

  return (
    <Row className={'align-items-center mx-0 px-0'}>
      <Col />
      <Col md='auto'>Rows per page:</Col>
      <Col md='auto'>
        <Form.Select
          aria-expanded={false}
          aria-haspopup={'listbox'}
          aria-label={tableName + ' Set Rows Per Table Page'}
          onChange={(e) => setRowsPerPage(+e.currentTarget.value)}
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
          onClick={() => setTablePosition(0)}
          disabled={tablePosition === 0}
          variant={styleVarient}
        >
          <ChevronBarLeft />
        </Button>
      </Col>
      <Col md='auto' className={'mx-1 px-0'}>
        <Button
          aria-label={tableName + ' Move to previous page of table results'}
          onClick={() => setTablePosition(tablePosition - rowsPerPage)}
          disabled={tablePosition - rowsPerPage < 0}
          variant={styleVarient}
        >
          <ChevronLeft />
        </Button>
      </Col>
      <Col md='auto' className={'mx-1 px-0'}>
        <Button
          aria-label={tableName + ' Move to next page of table results'}
          onClick={() => setTablePosition(tablePosition + rowsPerPage)}
          disabled={tablePosition + rowsPerPage >= numRows}
          variant={styleVarient}
        >
          <ChevronRight />
        </Button>
      </Col>
      <Col md='auto' className={'mx-1 px-0'}>
        <Button
          aria-label={tableName + ' Move to last page of table results'}
          onClick={() => setTablePosition(numRows - rowsPerPage)}
          disabled={numRows - rowsPerPage <= tablePosition}
          variant={styleVarient}
        >
          <ChevronBarRight />
        </Button>
      </Col>
    </Row>
  );
};
