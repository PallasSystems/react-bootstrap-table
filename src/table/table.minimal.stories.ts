import type { Meta, StoryObj } from '@storybook/react';

import { RBTable } from './table.components';
import { searchableArgs } from '../common/common.testdata';
import type { SimpleDataType } from '../common/common.testdata';

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
} satisfies Meta<typeof RBTable<SimpleDataType>>;

export default meta;
type Story = StoryObj<typeof meta>;

type Person = {
  firstName: string;
  surname: string;
  age: number;
};

const SimpleExamplesData: Person[] = [
  {
    firstName: 'John',
    surname: 'Smith',
    age: 30,
  },
  {
    firstName: 'Sarah',
    surname: 'Jane',
    age: 21,
  },
  {
    firstName: 'Joe',
    surname: 'Bloggs',
    age: 43,
  },
  {
    firstName: 'John',
    surname: 'Doe',
    age: 37,
  },
  {
    firstName: 'Jessica',
    surname: 'Johnson',
    age: 55,
  },
  {
    firstName: 'Jennifer',
    surname: 'Williams',
    age: 26,
  },
  {
    firstName: 'Emily',
    surname: 'Wilson',
    age: 55,
  },
  {
    firstName: 'Alfie',
    surname: 'Best',
    age: 63,
  },
  {
    firstName: 'Edwin',
    surname: 'Sharpe',
    age: 42,
  },
  {
    firstName: 'Angus',
    surname: 'Fowler',
    age: 39,
  },
];

export const MinimalTable: Story = {
  args: {
    columns: [
      { accessorKey: 'firstName', header: 'First Name', searchable: true, Header: () => 'Header Function Name' },
      { accessorKey: 'surname', header: 'Surname', searchable: true, Header: () => 'Header Function Surname' },
      { accessorKey: 'age', header: 'Age', Header: () => 'Header Function Age' },
    ],
    data: SimpleExamplesData,
  },
};
