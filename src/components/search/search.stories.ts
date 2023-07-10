import type { Meta, StoryObj } from '@storybook/react';

import { RBTSearch } from './search.components';
import { RBTSearchOptions } from './search.types';

const meta = {
  title: 'react-bootstrap-table/Search Bar',
  component: RBTSearch,
  tags: ['autodocs'],
  args: searchableArgs,
} satisfies Meta<typeof RBTSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const NotSearchable: Story = {
  args: {
    columns: [
      { accessorKey: 'surname', header: 'Column 1', searchable: false },
      { accessorKey: 'age', header: 'Column 2' },
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
