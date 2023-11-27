import { ReactNode } from 'react';
import { RBTColumnDefs, RBTOptions } from '@pallassystems/react-bootstrap-table';

import { ExamplesPage, ExamplesPageProperties, Person } from './examples.types';
import { SimpleBannerExamplesPage } from './simple';
import { AccessorFNExamplesPage } from './accessorfn';
import { CellExamplesPage } from './cell';
import { HeaderExamplesPage } from './header';

export const ExamplePageData: ExamplesPage[] = [
  {
    link: '/example/simple',
    text: 'Minimal Example',
    page: (data: ExamplesPageProperties): ReactNode => {
      return SimpleBannerExamplesPage(data);
    },
  },
  {
    link: '/example/modifiedAccessorFN',
    text: 'Making use of Accessor Functions',
    page: (data: ExamplesPageProperties): ReactNode => {
      return AccessorFNExamplesPage(data);
    },
  },
  {
    link: '/example/cell',
    text: 'Using Cell to modified a columns cells',
    page: (data: ExamplesPageProperties): ReactNode => {
      return CellExamplesPage(data);
    },
  },
  {
    link: '/example/header',
    text: 'Using Header to alter the column header',
    page: (data: ExamplesPageProperties): ReactNode => {
      return HeaderExamplesPage(data);
    },
  },
];
