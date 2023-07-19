import type { Meta, StoryObj } from '@storybook/react';

import { RBTRowControls } from './rowcontrols.components';
import { searchableArgs } from '../common/common.testdata';

const meta = {
  title: 'react-bootstrap-table/Table Row Controls',
  component: RBTRowControls,
  tags: ['autodocs'],
  args: {
    ...searchableArgs,
    name: 'bob',
    varient: 'dark',
    handleDisplayedRows: (e) => {
      console.log('handleDisplayedRows: ' + JSON.stringify(e));
    },
  },
} satisfies Meta<typeof RBTRowControls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

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
