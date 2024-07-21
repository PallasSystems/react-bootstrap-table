import React, { FC } from 'react';
import { Person } from 'react-bootstrap-icons';
import type { Meta, StoryObj } from '@storybook/react';

import { RBTable } from '../table.components';
import type { RBTColumnDefs, RBTColumnCellDef } from '../../common';

import { SimpleDataset } from '../../common/common.testdata';
import type { SimpleDataType } from '../../common/common.testdata';

const meta = {
  title: 'react-bootstrap-table/Table',
  component: RBTable<SimpleDataType>,
  tags: ['autodocs'],
} satisfies Meta<typeof RBTable<SimpleDataType>>;

export default meta;
type Story = StoryObj<typeof meta>;

const SimpleColumnDefs: RBTColumnDefs<SimpleDataType>[] = [
  {
    Cell: (props: RBTColumnCellDef<SimpleDataType>) => ModifiedFirstNameCell(props),
    header: 'Name',
  },
  {
    Cell: (props: RBTColumnCellDef<SimpleDataType>) => ModifiedAgeCell(props),
    header: 'Age',
  },
];

const ModifiedAgeCell: FC<RBTColumnCellDef<SimpleDataType>> = ({ originalRow }) => {
  return <h1>{originalRow.age}</h1>;
};

const ModifiedFirstNameCell: FC<RBTColumnCellDef<SimpleDataType>> = ({ originalRow }) => {
  return (
    <p>
      <Person></Person>
      {originalRow.firstName} {originalRow.surname}
      <Person></Person>
    </p>
  );
};

export const ModifiedCellFn: Story = {
  args: {
    columns: SimpleColumnDefs,
    data: SimpleDataset,
    header: { enableTableHead: false },
    footer: { enablePagination: false },
  },
};
