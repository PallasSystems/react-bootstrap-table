import React, { FC, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Prism from 'prismjs';

import { PallasPageWrapper } from '@pallassystems/website-core';
import { RBTable } from '@pallassystems/react-bootstrap-table';

// Getting Started Page Properties
import { ApiPageProperties } from '../api.types';
// For code highlighting
import 'prismjs/themes/prism.min.css';
import { RBTOptionsData } from './RBTOptions.data';
import { ApiTableConfiguration } from '../api.data';

const ApiRBTOptionsPage: FC<ApiPageProperties> = ({ footerProps, navBarProps }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <PallasPageWrapper authenticated={true} footerProps={footerProps} navBarProps={navBarProps}>
      <Container id='intro' className={'my-3'}>
        <Row>
          <h1>RBTOptions</h1>
        </Row>
        <Row>
          <p>Below we have provided the options you can supply to the RBTable object.</p>
        </Row>
        <Row>
          <RBTable data={RBTOptionsData} {...ApiTableConfiguration} />
        </Row>
      </Container>
    </PallasPageWrapper>
  );
};

export { ApiRBTOptionsPage };
