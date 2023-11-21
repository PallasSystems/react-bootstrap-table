import { ReactNode } from 'react';

import { ApiPage, ApiPageProperties } from './api.types';
import { ApiRBTColumnDefsPage } from './RBTColumnDefs';
import { ApiRBTOptionsPage } from './RBTOptions';

export const ApiTablePageData: ApiPage[] = [
  {
    link: '/api/rbtcolumndefs',
    text: 'RBTColumnDefs Property',
    page: (data: ApiPageProperties): ReactNode => {
      return ApiRBTColumnDefsPage(data);
    },
  },
  {
    link: '/api/rbtoptions',
    text: 'RBTOptions Property',
    page: (data: ApiPageProperties): ReactNode => {
      return ApiRBTOptionsPage(data);
    },
  },
];
