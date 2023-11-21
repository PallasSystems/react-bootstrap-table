import { FC, useEffect, useMemo } from 'react';
import { Container, Row } from 'react-bootstrap';
import Prism from 'prismjs';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { RBTable, RBTColumnDefs } from '@pallassystems/react-bootstrap-table';

// Getting Started Page Properties
import { ExamplesPageProperties } from '../examples.types';
import { GetSimpleBannerExample, SimpleExamplesRBTableData } from './simple.data';

// For code highlighting
import 'prismjs/themes/prism.min.css';

const SimpleBannerExamplesPage: FC<ExamplesPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content my-5'}>
        <SimpleBannerExamplesComponent />
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

const SimpleBannerExamplesComponent: FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Container>
      <Row>
        <h4>Create a simple table</h4>
      </Row>
      <Row>
        <p>This will outline how to define a simple table:</p>
        <pre className={'language-javascript'}>
          <code>{GetSimpleBannerExample()}</code>
        </pre>
      </Row>
      <Row>
        <h5>Demonstration</h5>
      </Row>
      <Row>
        <RBTable {...SimpleExamplesRBTableData} />
      </Row>
    </Container>
  );
};

export { SimpleBannerExamplesPage, SimpleBannerExamplesComponent };
