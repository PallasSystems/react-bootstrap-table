import { FC } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { BannerNavBar, Footer } from '@pallassystems/website-core';

// HomePage Properties
import { HomePageProperties } from './home.types';
import './home.css';

// Package properties
import projectProps from '../../../../package.json';

const HomePage: FC<HomePageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <>
      <BannerNavBar {...navBarProps} />
      <main role={'main'} className={'flex-grow-1'}>
        <Container id='intro' className={'my-3 text-center'}>
          <Row className={'my-2'}>
            <h1>React Bootstrap Table</h1>
          </Row>
          <Row className={'my-2'}>
            <h5>{projectProps.description}</h5>
          </Row>

          <Row>
            <Col>
              <div className={'d-grid gap-2 my-2'}>
                <LinkContainer to='/gettingStarted' style={{ minHeight: '4em' }}>
                  <Button variant='dark'>
                    <p className={'home_muti_line_btn'}>Getting Started</p>
                  </Button>
                </LinkContainer>
              </div>
            </Col>
            <Col>
              <div className={'d-grid gap-2 my-2'}>
                <LinkContainer to='/api' style={{ minHeight: '4em' }}>
                  <Button variant='dark'>
                    <p className={'home_btn'}>API</p>
                  </Button>
                </LinkContainer>
              </div>
            </Col>
            <Col>
              <div className={'d-grid gap-2 my-2'}>
                <LinkContainer to='/examples' style={{ minHeight: '4em' }}>
                  <Button variant='dark'>
                    <p className={'home_btn'}>Examples</p>
                  </Button>
                </LinkContainer>
              </div>
            </Col>
          </Row>
          <Row className={'my-2'}>
            <p>Current Version: {projectProps.version}</p>
          </Row>
        </Container>
      </main>
      <Footer {...footerProps} />
    </>
  );
};

export { HomePage };
