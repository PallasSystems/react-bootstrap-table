import React, { FC } from 'react';
import { Person } from 'react-bootstrap-icons';
import type { Meta, StoryObj } from '@storybook/react';

import { RBTable } from '../table.components';
import type { RBTColumnDefs, RBTColumnCellDef, RBTColumnHeaderDef } from '../../common';

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
    accessorKey: 'firstName',
    Header: (props: RBTColumnHeaderDef) => ModifiedNameHeader(props),
  },
  {
    accessorKey: 'age',
    Header: (props: RBTColumnHeaderDef) => ModifiedAgeHeader(props),
  },
];

const ModifiedAgeHeader: FC<RBTColumnHeaderDef> = ({ id }) => {
  return (
    <h1 id={id} className={'text-center'}>
      Age
    </h1>
  );
};

const ModifiedNameHeader: FC<RBTColumnHeaderDef> = () => {
  return (
    <>
      <Person /> First Name
    </>
  );
};

export const ModifiedHeaderFn: Story = {
  args: {
    columns: SimpleColumnDefs,
    data: SimpleDataset,
  },
};
