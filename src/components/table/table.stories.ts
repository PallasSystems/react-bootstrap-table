import type { Meta, StoryObj } from '@storybook/react';

import { RBTable } from './table.components';
import { RBTColumnDefs } from '../common';
import { RBTOptions } from './table.types';

type SimpleDataType = {
  firstName: string;
  surname: string;
};

const simpleArgs: RBTOptions<SimpleDataType> = {
  columns: [
    { accessorKey: 'firstName', header: 'First Name', searchable: true },
    { accessorKey: 'surname', header: 'Surname', searchable: true },
  ],
  data: [
    { firstName: 'Joe', surname: 'Bloggs' },
    { firstName: 'Jane', surname: 'Doe' },
    { firstName: 'John', surname: 'Smith' },
    { firstName: 'Sarah', surname: 'Wilson' },
    { firstName: 'Josiah', surname: 'Faulkner' },
    { firstName: 'Amanda', surname: 'Blaese' },
    { firstName: 'Maxim', surname: 'Ochoa' },
    { firstName: 'Stephanie', surname: 'Williams' },
    { firstName: 'Alfie', surname: 'Best' },
    { firstName: 'Jennifer', surname: 'Johnson' },
  ],
};

const meta = {
  title: 'react-bootstrap-table/Table',
  component: RBTable,
  tags: ['autodocs'],
  args: simpleArgs,
} satisfies Meta<typeof RBTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryVarient: Story = {
  args: {
    varient: 'primary',
  },
};

export const SecondaryVarient: Story = {
  args: {
    varient: 'secondary',
  },
};

export const SuccessVarient: Story = {
  args: {
    varient: 'success',
  },
};

export const WarningVarient: Story = {
  args: {
    varient: 'warning',
  },
};

export const DangerVarient: Story = {
  args: {
    varient: 'danger',
  },
};

export const InfoVarient: Story = {
  args: {
    varient: 'info',
  },
};

export const LightVarient: Story = {
  args: {
    varient: 'light',
  },
};

export const DarkVarient: Story = {
  args: {
    varient: 'dark',
  },
};

export const LinkVarient: Story = {
  args: {
    varient: 'link',
  },
};
