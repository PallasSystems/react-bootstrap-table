import type { Meta, StoryObj } from '@storybook/react';

import { RBTable } from '../table.components';
import { SimpleDataset } from '../../common/common.testdata';
import type { SimpleDataType } from '../../common/common.testdata';
import { RBTColumnDefs } from '../../common';

const meta = {
  title: 'react-bootstrap-table/Table',
  component: RBTable<SimpleDataType>,
  tags: ['autodocs'],
} satisfies Meta<typeof RBTable<SimpleDataType>>;

export default meta;
type Story = StoryObj<typeof meta>;

const SimpleColumnDefs: RBTColumnDefs<SimpleDataType>[] = [
  {
    accessorFn: (row: SimpleDataType) => {
      return row.firstName + ' ' + row.surname;
    },
    id: 'name',
    header: 'Full Name',
  },
  {
    accessorFn: () => {
      return 'age';
    },
    id: 'age',
    header: 'Age',
  },
];

export const ModifiedAccessorFN: Story = {
  args: {
    columns: SimpleColumnDefs,
    data: SimpleDataset,
  },
};
