import { ReactNode } from 'react';
import { RBTColumnDefs } from '@pallassystems/react-bootstrap-table';

import { ApiPage, ApiPageProperties, ApiTableEntry } from './api.types';
import { ApiRBTColumnDefsPage } from './RBTColumnDefs';
import { ApiRBTOptionsPage } from './RBTOptions';
import { ApiRBTHeaderOptionsPage } from './RBTHeaderOptions';
import { ApiRBTFooterOptionsPage } from './RBTFooterOptions';

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
  {
    link: '/api/rbtfooteroptions',
    text: 'RBTFooterOptions Property',
    page: (data: ApiPageProperties): ReactNode => {
      return ApiRBTFooterOptionsPage(data);
    },
  },
  {
    link: '/api/rbtheaderoptions',
    text: 'RBTHeaderOptions Property',
    page: (data: ApiPageProperties): ReactNode => {
      return ApiRBTHeaderOptionsPage(data);
    },
  },
];

// Generate the props table
export const ApiTableColumns: RBTColumnDefs<ApiTableEntry>[] = [
  {
    accessorKey: 'field',
    header: 'Field',
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
  {
    accessorKey: 'required',
    header: 'Required',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
];

export const ApiTableConfiguration = {
  columns: ApiTableColumns,
  footer: { enablePagination: false },
  header: { enableDensityToggle: false, enableExportButton: false },
};
