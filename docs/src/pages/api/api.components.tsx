import { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { PallasPageWrapper } from '@pallassystems/website-core';

// Getting Started Page Properties
import { ApiPageProperties } from './api.types';
import { ApiTablePageData } from './api.data';

const ApiHeadPage: FC<ApiPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <PallasPageWrapper authenticated={true} footerProps={footerProps} navBarProps={navBarProps}>
      <Container id='intro' className={'my-3'}>
        <Row className={'my-2'}>
          <h1>API Reference</h1>
        </Row>
        <Row className={'my-2'}>
          <h2>Table Properties</h2>
        </Row>
        <Row className={'mx-3'}>
          <ul>
            {ApiTablePageData.map((value) => {
              return (
                <li>
                  <LinkContainer to={value.link}>
                    <a>{value.text}</a>
                  </LinkContainer>
                </li>
              );
            })}
          </ul>
        </Row>
      </Container>
    </PallasPageWrapper>
  );
};

export { ApiHeadPage };
