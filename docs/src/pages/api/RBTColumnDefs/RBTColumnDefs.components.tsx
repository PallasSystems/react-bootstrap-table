import { FC, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Prism from 'prismjs';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { RBTable } from '@pallassystems/react-bootstrap-table';

// Getting Started Page Properties
import { ApiPageProperties } from '../api.types';
import { SimpleExamplesRBTableData } from '../../examples';
// For code highlighting
import 'prismjs/themes/prism.min.css';
import { RBTColumnDefData } from './RBTColumnDefs.data';
import { ApiTableConfiguration } from '../api.data';

const ApiRBTColumnDefsPage: FC<ApiPageProperties> = ({ footerProps, navBarProps }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <>
      <BannerNavBar {...navBarProps} />
      <main role={'main'} className={'flex-grow-1'}>
        <Container id='intro' className={'my-3'}>
          <Row>
            <h1>RBTColumnsDef</h1>
          </Row>
          <Row>
            <p>Information required to define a the table columns and data mapppings.</p>
          </Row>
          <Row>
            <RBTable data={RBTColumnDefData} {...ApiTableConfiguration} />
          </Row>
          <Row>
            <h2>Example</h2>
          </Row>
          <Row>
            <pre className={'language-javascript'}>
              <code>{JSON.stringify(SimpleExamplesRBTableData.columns, null, 2)}</code>
            </pre>
          </Row>
        </Container>
      </main>
      <Footer {...footerProps} />
    </>
  );
};

export { ApiRBTColumnDefsPage };
