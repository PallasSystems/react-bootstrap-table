import React, { useMemo, useState } from 'react';

import { Col, Container, Row, Table } from 'react-bootstrap';

import { RBTMenuBar } from '../menubar';
import { RBTRowControls } from '../rowcontrols';

import { type RBTRow, type RBTColumnDefs, CompareRBTRow } from '../common';
import { RBTOptions } from './table.types';
import { RBTableHead } from '../tableHead';
import { RBTablePlaceholder } from '../tablePlaceholder';
import { RBTableBody } from '../tableBody/tableBody.components';

export const RBTable = <TData extends Record<string, unknown>>({
  columns,
  data,
  enableDensityToggle,
  enableTableHead,
  name,
  varient,
}: RBTOptions<TData>) => {
  //
  const initialisedRows = useMemo(() => {
    const results: RBTRow<TData>[] = [];
    //
    if (data) {
      for (let index = 0; index < data.length; index++) {
        const row: RBTRow<TData> = {
          data: data[index],
          position: index,
          filters: [],
        };
        results.push(row);
      }
    }

    // Ensure all the results are correctly sorted
    return results.sort(CompareRBTRow);
  }, [data]);
  const showTableHead = useMemo(() => enableTableHead ?? true, [enableTableHead]);

  // We want to wrap eac data item within a row object which controls how informaiton is displayed
  // by default nothing should be filtered from view and everything should be displayed.
  const [rows, setRows] = useState<RBTRow<TData>[]>(initialisedRows);
  const [columnDefs] = useState<RBTColumnDefs<TData>[]>(columns ?? []);
  const [compact, setCompact] = useState<boolean>(false);

  const styleVarient = useMemo(() => varient ?? 'dark', [varient]);
  const tableName = useMemo(() => {
    let result = 'Table';
    if (name && name.length > 0) {
      result = name + ' Table';
    }
    return result;
  }, [name]);

  return (
    <Container fluid>
      <RBTMenuBar
        enableDensityToggle={enableDensityToggle}
        isCompact={compact}
        setCompact={setCompact}
        name={name}
        varient={styleVarient}
        columns={columnDefs}
        data={rows}
        handleDisplayedRows={setRows}
      />
      <Row>
        <Col>
          <Table hover responsive size={compact ? 'sm' : ''} aria-label={tableName}>
            <RBTableHead columns={columnDefs} enableTableHead={showTableHead} name={name} varient={styleVarient} />
            {rows.length > 0 ? (
              <RBTableBody columns={columnDefs} name={name} varient={styleVarient} data={rows} />
            ) : (
              <RBTablePlaceholder columns={columnDefs} name={name} varient={styleVarient} />
            )}
          </Table>
        </Col>
      </Row>
      <RBTRowControls
        columns={columnDefs}
        data={rows}
        handleDisplayedRows={setRows}
        name={name}
        varient={styleVarient}
      />
    </Container>
  );
};
