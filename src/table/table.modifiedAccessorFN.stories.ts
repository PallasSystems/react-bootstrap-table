import type { Meta, StoryObj } from '@storybook/react';

import { RBTable } from './table.components';
import { searchableArgs } from '../common/common.testdata';
import type { SimpleDataType } from '../common/common.testdata';
import { RBTColumnDefs } from '../common';

const meta = {
  title: 'react-bootstrap-table/Table',
  component: RBTable<SimpleDataType>,
  tags: ['autodocs'],
  args: {
    ...searchableArgs,
    header: {
      enableTableHead: true,
      enableDensityToggle: true,
    },
  },
} satisfies Meta<typeof RBTable<AccessorFNPerson>>;

export default meta;
type Story = StoryObj<typeof meta>;

type AccessorFNPerson = {
  firstName: string;
  surname: string;
  age: number;
};

const AccessorFNExamplesData: AccessorFNPerson[] = [
  {
    firstName: 'John',
    surname: 'Smith',
    age: 30,
  },
  {
    firstName: 'Sara',
    surname: 'Jane',
    age: 25,
  },
];

const AccessorFNExamplesTableConfData: RBTColumnDefs<AccessorFNPerson>[] = [
  {
    accessorFn: (row: AccessorFNPerson) => {
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
    columns: AccessorFNExamplesTableConfData,
    data: AccessorFNExamplesData,
  },
};
