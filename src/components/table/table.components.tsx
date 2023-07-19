import React, { FC, useCallback, useMemo, useState } from 'react';

import { Col, Container, Row, Table } from 'react-bootstrap';

import { RBTMenuBar } from '../menubar';
import { RBTRowControls } from '../rowcontrols';

import type { RBTRow, RBTColumnDefs } from '../common';
import { RBTOptions } from './table.types';
import { RBTableHead } from '../tableHead';
import { RBTablePlaceholder } from '../tablePlaceholder';
import { RBTableBody } from '../tableCell/tableCell.components';

export const RBTable: FC<RBTOptions> = ({ columns, data, enableDensityToggle, enableTableHead, name, varient }) => {
  //
  const [rows, setRows] = useState<RBTRow<Record<string, any>>[]>(() => {
    const results: RBTRow<Record<string, any>>[] = [];
    //
    if (data) {
      for (let index = 0; index < data.length; index++) {
        const row: RBTRow<Record<string, any>> = {
          data: data[index],
          position: index,
          filtered: false,
          displayed: true,
        };
        results.push(row);
      }
    }

    return results;
  });
  const handleRows = (values: RBTRow<Record<string, any>>[]) => {
    setRows(values);
  };

  const [columnDefs, setColumnDefs] = useState<RBTColumnDefs[]>(columns ?? []);
  const [compact, setCompact] = useState<boolean>(false);
  const handleCompactState = useCallback((isCompact: boolean) => {
    setCompact(isCompact);
  }, []);

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
        setCompact={handleCompactState}
        name={name}
        varient={styleVarient}
        columns={columnDefs}
        data={rows}
        handleDisplayedRows={handleRows}
      />
      <Row>
        <Col>
          <Table hover responsive size={compact ? 'sm' : ''} aria-label={tableName}>
            <RBTableHead columns={columnDefs} enableTableHead={enableTableHead} name={name} varient={styleVarient} />
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
        handleDisplayedRows={handleRows}
        name={name}
        varient={styleVarient}
      />
    </Container>
  );
};
