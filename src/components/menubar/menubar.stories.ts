import type { Meta, StoryObj } from '@storybook/react';

import { BootstrapTableMenuBar } from './menubar.components';

const meta = {
  title: 'react-bootstrap-table/Table Menu Bar',
  component: BootstrapTableMenuBar,
  tags: ['autodocs'],
  args: {
    isCompact: true,
    isSearchable: true,
    varient: 'dark',
    setCompact: (e) => {
      console.log('setCompact: ' + JSON.stringify(e));
    },
    setSearchValue: (e) => {
      console.log('setSearchValue: ' + JSON.stringify(e));
    },
  },
} satisfies Meta<typeof BootstrapTableMenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isCompact: false,
    isSearchable: false,
    varient: 'dark',
  },
};

export const Searchable: Story = {
  args: {
    isSearchable: true,
  },
};

export const Compact: Story = {
  args: {
    isCompact: true,
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
