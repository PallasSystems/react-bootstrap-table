import type { Meta, StoryObj } from '@storybook/react';

import { RBTable } from '../table.components';
import { SimpleDataset } from '../../common/common.testdata';
import type { SimpleDataType } from '../../common/common.testdata';

const meta = {
  title: 'react-bootstrap-table/Table',
  component: RBTable<SimpleDataType>,
  tags: ['autodocs'],
} satisfies Meta<typeof RBTable<SimpleDataType>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MinimalTable: Story = {
  args: {
    columns: [
      {
        accessorKey: 'firstName',
        header: 'First Name',
        searchable: false,
        Header: () => 'Header Function Name',
        enableResizing: false,
      },
      {
        accessorKey: 'surname',
        header: 'Surname',
        searchable: false,
        Header: () => 'Header Function Surname',
        enableResizing: false,
      },
      {
        accessorKey: 'age',
        header: 'Age',
        Header: () => 'Header Function Age',
        searchable: false,
        enableResizing: false,
      },
    ],
    data: SimpleDataset,
    header: { enableTableHead: false },
    footer: { enablePagination: false },
  },
};
