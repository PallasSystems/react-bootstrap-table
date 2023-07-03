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

export const BootstrapTable: FC<TableData> = ({ request_url, columns, data, name, varient }) => {
  const [rows, setRows] = useState<Record<string, string>[]>(data ?? []);
  const [displayedRows, setDisplayedRows] = useState<Record<string, string>[]>(data ?? []);
  const [columnDefs, setColumnDefs] = useState<ColumnDefs[]>(columns ?? []);

  const [tablePosition, setTablePosition] = useState<number>(0);
  const handleTablePosition = (value: number) => {
    const display = rows.filter((_record: Record<string, string>, index: number) =>
      isInRange(index, rowsPerPage, value),
    );
    console.log('Table Position: ' + JSON.stringify(display));
    setDisplayedRows(display);
    setTablePosition(value);
  };

  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const handleRowsPerPage = (value: number) => {
    const display = rows.filter((_record: Record<string, string>, index: number) =>
      isInRange(index, value, tablePosition),
    );

    setDisplayedRows(display);
    setRowsPerPage(value);
  };

  const [compact, setCompact] = useState<boolean>(false);
  const handleCompactState = useCallback((isCompact: boolean) => {
    setCompact(isCompact);
  }, []);

  const isSearchableTable = useMemo(() => isSearchable(columnDefs), [columnDefs]);
  const handleSearchValue = useCallback((value: string) => {
    setDisplayedRows(retrieveSearchMatches(value, columnDefs, rows));
  }, []);

  const styleVarient = useMemo(() => varient ?? 'dark', [varient]);
  const tableName = useMemo(() => {
    let result = 'Table';
    if (name && name.length > 0) {
      result = name + ' Table';
    }
    return result;
  }, [name]);

  /**
   * This will retrieve data is a request URL is supplied, this simply perform a GET Request at this point.
   */
  useEffect(() => {
    if (request_url) {
      axios.get(request_url).then((response: AxiosResponse) => {
        if (response && response.data && Array.isArray(response.data)) {
          setRows(response.data);
          setTablePosition(0);
          if (response.data.length > 5) {
            handleRowsPerPage(5);
          } else {
            handleRowsPerPage(0);
          }
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
        name={tableName}
        varient={styleVarient}
      />
      <Row>
        <Col>
          <Table hover responsive size={compact ? 'sm' : ''} aria-label={tableName}>
            <thead className={'table-' + styleVarient}>
              <tr>
                {columnDefs.map((header: ColumnDefs) => {
                  return (
                    <th scope='col' key={'table.header.' + header.field}>
                      <span className={'px-3'} title={header.label}>
                        {header.label}
                      </span>
                    </th>
                  );
                })}
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {displayedRows.map((value: Record<string, string>) => {
                return (
                  <tr key={'table.row.' + JSON.stringify(value)}>
                    {columnDefs.map((header: ColumnDefs) => {
                      return (
                        <td key={'table.row.' + header.field + '.' + value[header.field]}>
                          <span className={'px-3'}>{value[header.field]}</span>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <BootstrapTableRowControls
        numRows={displayedRows.length}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={handleRowsPerPage}
        tablePosition={tablePosition}
        setTablePosition={handleTablePosition}
        name={tableName}
        varient={styleVarient}
      />
    </Container>
  );
};
