import { FC, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Prism from 'prismjs';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { RBTable } from '@pallassystems/react-bootstrap-table';

// Getting Started Page Properties
import { ExamplesPageProperties } from '../examples.types';
import { GetAccessorFNExample, AccessorFNExamplesRBTableData } from './accessorfn.data';

// For code highlighting
import 'prismjs/themes/prism.min.css';

const AccessorFNExamplesPage: FC<ExamplesPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content my-5'}>
        <AccessorFNExamplesComponent />
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

const AccessorFNExamplesComponent: FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Container>
      <Row>
        <h2>Making use of Accessor Functions</h2>
      </Row>
      <Row>
        <p>
          The React Bootstrap table allows us to supply a function to decide which field should be retrieved or perform
          a calculation and generate a result.
        </p>
        <p>
          The first column concatenates two fields from the data object to provide a combined name column. The Age
          column returns the field name 'age'. The system will identify this is a key in the data and return the value.
          The purpose of this action is to allow you to dynamically select the field displayed.
        </p>
      </Row>
      <Row>
        <h3>Demonstration</h3>
      </Row>
      <Row>
        <RBTable {...AccessorFNExamplesRBTableData} />
      </Row>
      <Row>
        <h5>Source Code</h5>
      </Row>
      <Row>
        <pre className={'language-javascript'}>
          <code>{GetAccessorFNExample()}</code>
        </pre>
      </Row>
    </Container>
  );
};

export { AccessorFNExamplesPage, AccessorFNExamplesComponent };
