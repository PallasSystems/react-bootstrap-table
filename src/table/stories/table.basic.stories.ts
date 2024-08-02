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

export const BasicTable: Story = {
  args: {
    columns: [
      { accessorKey: 'firstName', header: 'First Name', searchable: true, Header: () => 'Header Function Name' },
      { accessorKey: 'surname', header: 'Surname', searchable: true, Header: () => 'Header Function Surname' },
      { accessorKey: 'age', header: 'Age', Header: () => 'Header Function Age' },
    ],
    data: SimpleDataset,
  },
};
