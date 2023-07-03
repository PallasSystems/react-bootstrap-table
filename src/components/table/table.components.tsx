import axios, { AxiosResponse } from 'axios';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { Col, Container, Row, Table } from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';

import { BootstrapTableMenuBar } from '../menubar';
import { BootstrapTableRowControls } from '../rowcontrols';

import { TableData, ColumnDefs } from './table.types';
import { isSearchable, retrieveSearchMatches } from './table.search';

const isInRange = (index: number, rowsPerPage: number, tablePosition: number): boolean => {
  return index >= tablePosition && tablePosition + rowsPerPage > index;
};

export const BootstrapTable: FC<TableData> = ({ request_url, columns, data }) => {
  const [rows, setRows] = useState<Record<string, string>[]>(data ?? []);
  const [displayedRows, setDisplayedRows] = useState<Record<string, string>[]>(data ?? []);
  const [columnDefs, setColumnDefs] = useState<ColumnDefs[]>(columns ?? []);

  const [tablePosition, setTablePosition] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const [compact, setCompact] = useState<boolean>(false);
  const handleCompactState = useCallback((isCompact: boolean) => {
    setCompact(isCompact);
  }, []);

  const isSearchableTable = useMemo(() => isSearchable(columnDefs), [columnDefs]);
  const handleSearchValue = useCallback((value: string) => {
    setDisplayedRows(retrieveSearchMatches(value, columnDefs, rows));
  }, []);

  /**
   * This will retrieve data is a request URL is supplied, this simply perform a GET Request at this point.
   */
  useEffect(() => {
    if (request_url) {
      axios.get(request_url).then((response: AxiosResponse) => {
        if (response && response.data && Array.isArray(response.data)) {
          if (response.data.length > 5) {
            setRowsPerPage(5);
          } else {
            setRowsPerPage(0);
          }

          setTablePosition(0);

          setRows(response.data);
          setDisplayedRows(response.data);
        }
      });
    }
  }, [request_url]);

  return (
    <Container fluid>
      <BootstrapTableMenuBar
        isCompact={compact}
        isSearchable={isSearchableTable}
        setCompact={handleCompactState}
        setSearchValue={handleSearchValue}
      />
      <Row>
        <Col>
          <Table hover responsive size={compact ? 'sm' : ''}>
            <thead className={'table-dark'}>
              <tr>
                {columnDefs.map((header: ColumnDefs) => {
                  return (
                    <th scope='col' key={'table.header.' + header.field}>
                      <span className={'px-3'}>{header.label}</span>
                    </th>
                  );
                })}
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {displayedRows.map((value: Record<string, string>, index: number) => {
                return isInRange(index, rowsPerPage, tablePosition) ? (
                  <tr key={'table.row.' + value.name}>
                    {columnDefs.map((header: ColumnDefs) => {
                      return (
                        <td key={'table.row.' + index + '.' + header.field}>
                          <span className={'px-3'}>{value[header.field]}</span>
                        </td>
                      );
                    })}
                    <td>
                      <ChevronRight />
                    </td>
                  </tr>
                ) : null;
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <BootstrapTableRowControls
        numRows={displayedRows.length}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        tablePosition={tablePosition}
        setTablePosition={setTablePosition}
      />
    </Container>
  );
};
