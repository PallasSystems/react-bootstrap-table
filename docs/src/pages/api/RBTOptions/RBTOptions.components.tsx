import { FC, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Prism from 'prismjs';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { RBTable } from '@pallassystems/react-bootstrap-table';

// Getting Started Page Properties
import { ApiTableColumns, ApiPageProperties, ApiTableEntry } from '../api.types';
import { SimpleExamplesRBTableData } from '../../examples';
// For code highlighting
import 'prismjs/themes/prism.min.css';
import { RBTOptionsData } from './RBTOptions.data';

const ApiRBTOptionsPage: FC<ApiPageProperties> = ({ footerProps, navBarProps }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content my-5'}>
        <Row>
          <h1>RBTOptions</h1>
        </Row>
        <Row>
          <p>Below we have provided the options you can supply to the RBTable object.</p>
        </Row>
        <Row>
          <RBTable columns={ApiTableColumns} data={RBTOptionsData} enablePagination={false} />
        </Row>
        <Row>
          <h2>Example</h2>
        </Row>
        <Row>
          <pre className={'language-javascript'}>
            <code>{JSON.stringify(SimpleExamplesRBTableData, null, 2)}</code>
          </pre>
        </Row>
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

export { ApiRBTOptionsPage };
