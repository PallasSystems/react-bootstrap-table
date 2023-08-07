import React, { useMemo } from 'react';

import { Button, Col, InputGroup, Row } from 'react-bootstrap';
import { Download, Grid3x2Gap, Grid3x3Gap } from 'react-bootstrap-icons';
import { ExportToCsv } from 'export-to-csv-fix-source-map';

import { RBTMenuBarOptions } from './menubar.types';
import { RBTSearch } from '../search';

/**
 * This component builds a menu bar, this includes the Search box, spacing and download table as a csv.
 *
 * @param {RBTMenuBarOptions} props
 */
export const RBTMenuBar = <TData extends Record<string, unknown>>(props: RBTMenuBarOptions<TData>) => {
  const displayCompactBtn = useMemo(() => props.enableDensityToggle ?? true, [props.enableDensityToggle]);
  const styleVarient = useMemo(() => props.varient ?? 'dark', [props.varient]);
  const tableName = useMemo(() => {
    let result = 'SearchBar';
    if (props.name) {
      if (props.name.length > 0) {
        result = props.name + ' ' + result;
      }
    }
    return result;
  }, [props.name]);

  /**
   * Called by the download button, this will capture the information in the table and
   * return is a CSV for download by the user.
   */
  const performExport = () => {
    const data = props.data.map((value) => value.data);
    let exportName = 'Unknown' + '_' + Date.now();
    if (props.name) {
      if (props.name.length > 0) {
        exportName = props.name + '_' + Date.now();
      }
    }
    // Define rules for exporting.
    const csvExport = new ExportToCsv({
      showLabels: true,
      filename: exportName,
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
