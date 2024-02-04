import { FC } from 'react';

import { BannerNavBar, Footer } from '@pallassystems/website-core';

// Getting Started Page Properties
import { ExamplesPageProperties } from './examples.types';
import { Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ExamplePageData } from './example.data';

const ExamplesHeadPage: FC<ExamplesPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <>
      <BannerNavBar {...navBarProps} />
      <main role={'main'} className={'flex-grow-1'}>
        <Container id='intro' className={'my-3'}>
          <Row>
            <h1>Examples</h1>
          </Row>
          <Row className={'mx-3'}>
            <ul>
              {ExamplePageData.map((value) => {
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
      </main>
      <Footer {...footerProps} />
    </>
  );
};

export { ExamplesHeadPage };
