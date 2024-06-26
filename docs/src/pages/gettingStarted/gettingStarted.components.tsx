import { FC } from 'react';

import { PallasPageWrapper } from '@pallassystems/website-core';

// Getting Started Page Properties
import { GettingStartedPageProperties } from './gettingStarted.types';
import { Container, Row } from 'react-bootstrap';

import { GettingStartedInstallComponent } from './gettingStarted.install.components';
import { GettingStartedUsageComponent } from './gettingStarted.usage.components';

const GettingStartedPage: FC<GettingStartedPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <PallasPageWrapper authenticated={true} footerProps={footerProps} navBarProps={navBarProps}>
      <Container id='intro' className={'my-3'}>
        <Row className={'my-2'}>
          <GettingStartedInstallComponent />
        </Row>
        <Row className={'my-2'}>
          <GettingStartedUsageComponent />
        </Row>
      </Container>
    </PallasPageWrapper>
  );
};

export { GettingStartedPage };
