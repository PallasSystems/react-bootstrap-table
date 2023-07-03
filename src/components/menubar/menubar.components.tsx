import React, { FC, useMemo } from 'react';

import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Download, Filter, Grid3x2Gap, Grid3x3Gap, Search } from 'react-bootstrap-icons';

import { BootstrapTableMenuBarProps } from './menubar.types';

export const BootstrapTableMenuBar: FC<BootstrapTableMenuBarProps> = ({
  isCompact,
  isSearchable,
  varient,
  setCompact,
  setSearchValue,
}) => {
  const styleVarient = useMemo(() => varient ?? 'dark', [varient]);

  return (
    <Row>
      <Col />
      <Col md='auto'>
        <InputGroup>
          {isSearchable ? (
            <Form.Control
              placeholder='Search'
              aria-label='Search Table'
              aria-describedby='basic-addon2'
              onChange={(e) => setSearchValue(e.target.value)}
            />
          ) : null}
          {isSearchable ? (
            <Button variant={varient} id='button-addon2'>
              <Search />
            </Button>
          ) : null}
          <Button variant={varient} id='button-addon2'>
            <Filter />
          </Button>
          <Button variant={varient} id='button-addon2' onClick={() => setCompact(!isCompact)}>
            {isCompact ? <Grid3x3Gap /> : <Grid3x2Gap />}
          </Button>
          <Button variant={varient} id='button-addon2'>
            <Download />
          </Button>
        </InputGroup>
      </Col>
    </Row>
  );
};
