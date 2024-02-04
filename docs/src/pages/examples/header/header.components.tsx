import { FC, useEffect, useMemo } from 'react';
import { Container, Row } from 'react-bootstrap';
import Prism from 'prismjs';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { RBTable } from '@pallassystems/react-bootstrap-table';

// Getting Started Page Properties
import { ExamplesPageProperties } from '../examples.types';
import { GetHeaderExample, HeaderExamplesRBTableData } from './header.data';

// For code highlighting
import 'prismjs/themes/prism.min.css';

const HeaderExamplesPage: FC<ExamplesPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <>
      <BannerNavBar {...navBarProps} />
      <main role={'main'} className={'flex-grow-1'}>
        <Container id='intro' className={'my-3'}>
          <HeaderExamplesComponent />
        </Container>
      </main>
      <Footer {...footerProps} />
    </>
  );
};

const HeaderExamplesComponent: FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Container>
      <Row>
        <h2>Create a table with modified headers</h2>
      </Row>
      <Row>
        <p>
          The React Bootstrap table allows us to return JSX Elements to use as a column header allowing users to
          customise the look of the table.
        </p>
        <p>
          Below we have modified both column headers, the 'First Name' column has an embedded SVG element taken from
          Bootstrap Icons, while the the 'Age' column makes use of Bootstrap theming to centre the text elements.
        </p>
      </Row>
      <Row>
        <h3>Demonstration</h3>
      </Row>
      <Row>
        <RBTable {...HeaderExamplesRBTableData} />
      </Row>
      <Row>
        <h5>Source Code</h5>
      </Row>
      <Row>
        <pre className={'language-javascript'}>
          <code>{GetHeaderExample()}</code>
        </pre>
      </Row>
    </Container>
  );
};

export { HeaderExamplesPage, HeaderExamplesComponent };
