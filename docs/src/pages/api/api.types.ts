import { RBTColumnDefs } from '@pallassystems/react-bootstrap-table';
import { FooterProperties, NavbarProperty } from '@pallassystems/website-core';
import { ReactNode } from 'react';

type ApiPageProperties = {
  footerProps?: FooterProperties;
  navBarProps?: NavbarProperty;
};

type ApiPage = {
  link: string;
  text: string;
  page: (properties: ApiPageProperties) => ReactNode;
};

type ApiTableEntry = {
  field: String;
  type: String;
  required: String;
  description: string;
};

// Generate the props table
const ApiTableColumns: RBTColumnDefs<ApiTableEntry>[] = [
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

export { ApiTableColumns };
export type { ApiPage, ApiPageProperties, ApiTableEntry };
