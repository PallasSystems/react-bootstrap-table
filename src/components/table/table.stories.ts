import type { Meta, StoryObj } from '@storybook/react';

import { BootstrapTable } from './table.components';

const meta = {
  title: 'react-bootstrap-table/Table',
  component: BootstrapTable,
  tags: ['autodocs'],
  args: {
    columns: [
      { field: 'field1', label: 'Column 1' },
      { field: 'field2', label: 'Column 2' },
    ],
    data: [
      { field1: 'Field 1 Row 1', field2: 'Field 2 Row 1' },
      { field1: 'Field 1 Row 2', field2: 'Field 2 Row 3' },
      { field1: 'Field 1 Row 3', field2: 'Field 2 Row 3' },
      { field1: 'Field 1 Row 4', field2: 'Field 2 Row 4' },
      { field1: 'Field 1 Row 5', field2: 'Field 2 Row 5' },
      { field1: 'Field 1 Row 6', field2: 'Field 2 Row 6' },
      { field1: 'Field 1 Row 7', field2: 'Field 2 Row 7' },
      { field1: 'Field 1 Row 8', field2: 'Field 2 Row 8' },
      { field1: 'Field 1 Row 9', field2: 'Field 2 Row 9' },
      { field1: 'Field 1 Row 10', field2: 'Field 2 Row 10' },
    ],
  },
} satisfies Meta<typeof BootstrapTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const SearchableField1: Story = {
  args: {
    columns: [
      { field: 'field1', label: 'Column 1', searchable: true },
      { field: 'field2', label: 'Column 2' },
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
