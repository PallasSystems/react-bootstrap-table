import type { Meta, StoryObj } from '@storybook/react';

import { RBTSearch } from './search.components';
import { searchableArgsRBTData } from '../common/common.testdata';
import type { SimpleDataType } from '../common/common.testdata';

const meta = {
  title: 'react-bootstrap-table/Search Bar',
  component: RBTSearch<SimpleDataType>,
  tags: ['autodocs'],
  args: {
    ...searchableArgsRBTData,
    handleDisplayedRows: (e) => {
      console.log('handleDisplayedRows: ' + JSON.stringify(e));
    },
  },
} satisfies Meta<typeof RBTSearch<SimpleDataType>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const NoSearchableColumns: Story = {
  args: {
    columns: [
      { accessorKey: 'firstName', header: 'First Name', searchable: false },
      { accessorKey: 'surname', header: 'Surname', searchable: false },
    ],
  },
};

export const NoSearchableCallback: Story = {
  args: {
    handleDisplayedRows: undefined,
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
