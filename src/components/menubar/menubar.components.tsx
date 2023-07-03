import React, { FC, useMemo } from 'react';

import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Download, Filter, Grid3x2Gap, Grid3x3Gap, Search } from 'react-bootstrap-icons';

import { BootstrapTableMenuBarProps } from './menubar.types';

/**
 *
 * @param param0
 * @returns
 */
export const BootstrapTableMenuBar: FC<BootstrapTableMenuBarProps> = ({
  isCompact,
  isSearchable,
  name,
  varient,
  setCompact,
  setSearchValue,
}) => {
  const styleVarient = useMemo(() => varient ?? 'dark', [varient]);
  const tableName = useMemo(() => {
    let result = 'Menu Bar';
    if (name && name.length > 0) {
      result = name + ' Menu Bar';
    }
    return result;
  }, [name]);

  return (
    <Row>
      <Col />
      <Col md='auto'>
        <InputGroup>
          {isSearchable ? (
            <Form.Control
              placeholder='Search'
              aria-label={tableName + ' Search Input'}
              tabIndex={0}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          ) : null}
          {isSearchable ? (
            <Button variant={varient} aria-label={tableName + ' Search Input Button'}>
              <Search />
            </Button>
          ) : null}
          <Button
            variant={varient}
            aria-label={tableName + ' Compact Setting Toggle'}
            onClick={() => setCompact(!isCompact)}
          >
            {isCompact ? <Grid3x3Gap /> : <Grid3x2Gap />}
          </Button>
          <Button variant={varient} aria-label={tableName + ' Download CSV Button'} tabIndex={0}>
            <Download />
          </Button>
        </InputGroup>
      </Col>
    </Row>
  );
};
