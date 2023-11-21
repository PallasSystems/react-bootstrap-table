import { FC } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { BannerNavBar, Footer } from '@pallassystems/website-core';

// HomePage Properties
import { HomePageProperties } from './home.types';

// Package properties
import projectProps from '../../../../package.json';

const HomePage: FC<HomePageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content text-center my-5'}>
        <Row className={'my-2'}>
          <h1>React Bootstrap Table</h1>
        </Row>
        <Row className={'my-2'}>
          <h5>{projectProps.description}</h5>
        </Row>

        <Row>
          <Col>
            <div className={'d-grid gap-2 my-2'}>
              <LinkContainer to='/gettingStarted'>
                <Button variant='dark'>Getting Started</Button>
              </LinkContainer>
            </div>
          </Col>
          <Col>
            <div className={'d-grid gap-2 my-2'}>
              <LinkContainer to='/api'>
                <Button variant='dark'>API</Button>
              </LinkContainer>
            </div>
          </Col>
          <Col>
            <div className={'d-grid gap-2 my-2'}>
              <LinkContainer to='/examples'>
                <Button variant='dark'>Examples</Button>
              </LinkContainer>
            </div>
          </Col>
        </Row>
        <Row className={'my-2'}>
          <p>Current Version: {projectProps.version}</p>
        </Row>
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

export { HomePage };
