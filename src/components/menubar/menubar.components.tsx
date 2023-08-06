import React, { useMemo } from 'react';

import { Button, Col, InputGroup, Row } from 'react-bootstrap';
import { Download, Grid3x2Gap, Grid3x3Gap } from 'react-bootstrap-icons';
import { ExportToCsv } from 'export-to-csv-fix-source-map';

import { RBTMenuBarOptions } from './menubar.types';
import { RBTSearch } from '../search';

/**
 * This component builds a menu bar.
 * @param {RBTMenuBarOptions} props
 */
export const RBTMenuBar = <TData extends Record<string, unknown>>(props: RBTMenuBarOptions<TData>) => {
  const displayCompactBtn = useMemo(() => props.enableDensityToggle ?? true, [props.enableDensityToggle]);
  const styleVarient = useMemo(() => props.varient ?? 'dark', [props.varient]);
  const tableName = useMemo(() => {
    props.name && props.name.length > 0 ? props.name + ' SearchBar' : 'SearchBar';
  }, [props.name]);

  const performExport = () => {
    const data = props.data.map((value) => value.data);

    const csvExport = new ExportToCsv({
      showLabels: true,
      filename: tableName + '_' + Date.now(),
      useKeysAsHeaders: true,
    });

    csvExport.generateCsv(data);
  };

  return (
    <Row>
      <Col />
      <Col md='auto'>
        <InputGroup>
          <RBTSearch {...props} />
          {displayCompactBtn ? (
            <Button
              variant={styleVarient}
              aria-label={tableName + ' Compact Setting Toggle'}
              onClick={() => {
                if (props.setCompact) {
                  props.setCompact(!props.isCompact);
                }
              }}
            >
              {props.isCompact ? <Grid3x3Gap /> : <Grid3x2Gap />}
            </Button>
          ) : null}
          <Button
            variant={styleVarient}
            aria-label={tableName + ' Download CSV Button'}
            tabIndex={0}
            onClick={() => performExport()}
          >
            <Download />
          </Button>
        </InputGroup>
      </Col>
    </Row>
  );
};
