import type { Meta, StoryObj } from '@storybook/react';

import { RBTMenuBar } from './menubar.components';
import { searchableArgsRBTData } from '../common/common.testdata';

const meta = {
  title: 'react-bootstrap-table/Table Menu Bar',
  component: RBTMenuBar,
  tags: ['autodocs'],
  args: {
    ...searchableArgsRBTData,
    isCompact: false,
    setCompact: (e) => {
      console.log('setCompact: ' + JSON.stringify(e));
    },
    handleDisplayedRows: (e) => {
      console.log('handleDisplayedRows: ' + JSON.stringify(e));
    },
  },
} satisfies Meta<typeof RBTMenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Compact: Story = {
  args: {
    isCompact: true,
  },
};

export const NotSearchable: Story = {
  args: {
    columns: [
      { accessorKey: 'firstName', header: 'First Name', searchable: false },
      { accessorKey: 'surname', header: 'Surname', searchable: false },
      { accessorKey: 'age', header: 'Age' },
    ],
  },
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
