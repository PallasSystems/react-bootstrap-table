import { FC, useEffect, useMemo } from 'react';
import { Container, Row } from 'react-bootstrap';
import Prism from 'prismjs';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { RBTable } from '@pallassystems/react-bootstrap-table';

// Getting Started Page Properties
import { ExamplesPageProperties } from '../examples.types';
import { GetCellExample, CellExamplesRBTableData } from './Cell.data';

// For code highlighting
import 'prismjs/themes/prism.min.css';

const CellExamplesPage: FC<ExamplesPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content my-5'}>
        <CellExamplesComponent />
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

const CellExamplesComponent: FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Container>
      <Row>
        <h2>Create a table with modified cells</h2>
      </Row>
      <Row>
        <p>
          The React Bootstrap table allows us to return JSX Elements to use as cell values allowing users to customise
          the look of the table.
        </p>
      </Row>
      <Row>
        <h3>Demonstration</h3>
      </Row>
      <Row>
        <RBTable {...CellExamplesRBTableData} />
      </Row>
      <Row>
        <h5>Source Code</h5>
      </Row>
      <Row>
        <pre className={'language-javascript'}>
          <code>{GetCellExample()}</code>
        </pre>
      </Row>
    </Container>
  );
};

export { CellExamplesPage, CellExamplesComponent };
