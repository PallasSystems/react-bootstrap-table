import { FC, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Prism from 'prismjs';

import { PallasPageWrapper } from '@pallassystems/website-core';
import { RBTable } from '@pallassystems/react-bootstrap-table';

// Getting Started Page Properties
import { ApiPageProperties } from '../api.types';

// For code highlighting
import 'prismjs/themes/prism.min.css';
import { RBTFooterOptionsData } from './RBTFooterControls.data';
import { ApiTableConfiguration } from '../api.data';

const ApiRBTFooterOptionsPage: FC<ApiPageProperties> = ({ footerProps, navBarProps }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <PallasPageWrapper authenticated={true} footerProps={footerProps} navBarProps={navBarProps}>
      <Container id='intro' className={'my-3'}>
        <Row>
          <h1>RBTFooterOptions</h1>
        </Row>
        <Row>
          <p>The options you can supply RBTable to modify and update the Table Row Controls.</p>
        </Row>
        <Row>
          <RBTable data={RBTFooterOptionsData} {...ApiTableConfiguration} />
        </Row>
      </Container>
    </PallasPageWrapper>
  );
};

export { ApiRBTFooterOptionsPage };
