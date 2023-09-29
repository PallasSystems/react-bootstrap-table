import React, { FC } from 'react';

import { BannerNavBar, Footer } from '@pallassystems/website-core';

// HomePage Properties
import { HomePageProperties } from './Home.types';
import { Button, Col, Row } from 'react-bootstrap';

const HomePage: FC<HomePageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <div className='px-4 py-5 my-5 text-center'>
        <h1>React Bootstrap Table</h1>
        <Row className={'mt-5'}>
          <Col xs={3} />
          <Col>
            <img src={'https://badgen.net/npm/v/@pallassystems/react-bootstrap-table?color=green'} />
          </Col>
          <Col>
            <img src={'https://badgen.net/npm/dt/material-react-table?label=installs&icon=npm&color=green'} />
          </Col>
          <Col>
            <img
              src={'https://badgen.net/bundlephobia/minzip/@pallassystems/react-bootstrap-table@latest?color=green'}
            />
          </Col>
          <Col>
            <img src={'https://img.shields.io/github/license/apache/maven.svg?label=License'} />
          </Col>
          <Col xs={3} />
        </Row>
        <Row className={'mt-5'}>
          <Col xs={3} />
          <Col>
            <Button variant='primary'>Getting Started</Button>
          </Col>
          <Col>
            <Button variant='primary'>API</Button>
          </Col>
          <Col>
            <Button variant='primary'>Examples</Button>
          </Col>
          <Col xs={3} />
        </Row>
        <Row className={'mt-5 bg-body-tertiary rounded-3'}>
          <pre>
            <code>npm install @pallassystems/react-bootstrap-table react-bootstrap react-bootstrap-icons</code>
          </pre>
        </Row>
      </div>
      <Footer {...footerProps} />
    </main>
  );
};

export { HomePage };
