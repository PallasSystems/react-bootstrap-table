import type { Meta, StoryObj } from '@storybook/react';

import { BootstrapTableRowControls } from './rowcontrols.components';

const meta = {
  title: 'react-bootstrap-table/Table Row Controls',
  component: BootstrapTableRowControls,
  tags: ['autodocs'],
  args: {
    numRows: 10,
    rowsPerPage: 5,
    tablePosition: 0,
    varient: 'dark',
    setRowsPerPage: (e) => {
      console.log('setRowsPerPage: ' + JSON.stringify(e));
    },
    setTablePosition: (e) => {
      console.log('setTablePosition: ' + JSON.stringify(e));
    },
  },
} satisfies Meta<typeof BootstrapTableRowControls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    numRows: 205,
    rowsPerPage: 5,
    tablePosition: 0,
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
