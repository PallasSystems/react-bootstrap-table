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
import { RBTFooterOptionsData } from './RBTFooterControls.data';
import { ApiTableConfiguration } from '../api.data';

const ApiRBTFooterOptionsPage: FC<ApiPageProperties> = ({ footerProps, navBarProps }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content my-5'}>
        <Row>
          <h1>RBTFooterOptions</h1>
        </Row>
        <Row>
          <p>The options you can supply RBTable to modify and update the Table Row Controls.</p>
        </Row>
        <Row>
          <RBTable data={RBTFooterOptionsData} {...ApiTableConfiguration} />
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

export { ApiRBTFooterOptionsPage };
