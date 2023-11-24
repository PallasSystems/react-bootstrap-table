import { ReactNode } from 'react';

import { ExamplesPage, ExamplesPageProperties } from './examples.types';
import { SimpleBannerExamplesPage } from './simple';
import { CellExamplesPage } from './cell';

export const ExamplePageData: ExamplesPage[] = [
  {
    link: '/example/simple',
    text: 'Minimal Example',
    page: (data: ExamplesPageProperties): ReactNode => {
      return SimpleBannerExamplesPage(data);
    },
  },
  {
    link: '/example/modifiedcell',
    text: 'Modified Cell Example',
    page: (data: ExamplesPageProperties): ReactNode => {
      return CellExamplesPage(data);
    },
  },
];
