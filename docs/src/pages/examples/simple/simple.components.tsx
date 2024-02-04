import { FC, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Prism from 'prismjs';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { RBTable } from '@pallassystems/react-bootstrap-table';

// Getting Started Page Properties
import { ExamplesPageProperties } from '../examples.types';
import { GetSimpleBannerExample, SimpleExamplesRBTableData } from './simple.data';

// For code highlighting
import 'prismjs/themes/prism.min.css';

const SimpleBannerExamplesPage: FC<ExamplesPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <>
      <BannerNavBar {...navBarProps} />
      <main role={'main'} className={'flex-grow-1'}>
        <Container id='intro' className={'my-3'}>
          <SimpleBannerExamplesComponent />
        </Container>
      </main>
      <Footer {...footerProps} />
    </>
  );
};

const SimpleBannerExamplesComponent: FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Container>
      <Row>
        <h2>Create a simple table</h2>
      </Row>
      <Row>
        <p>
          The React Bootstrap Table library aims to provide extensive configurability with defaults which should meet
          the majority of use cases. In this example we are showcasing the default behavour it the table.
        </p>
      </Row>
      <Row>
        <h3>Demonstration</h3>
      </Row>
      <Row>
        <RBTable {...SimpleExamplesRBTableData} />
      </Row>
      <Row>
        <h5>Source Code</h5>
      </Row>
      <Row>
        <pre className={'language-javascript'}>
          <code>{GetSimpleBannerExample()}</code>
        </pre>
      </Row>
    </Container>
  );
};

export { SimpleBannerExamplesPage, SimpleBannerExamplesComponent };
