// Getting Started Page Properties
import { ApiTableEntry } from '../api.types';

export const RBTFooterOptionsData: ApiTableEntry[] = [
  {
    field: 'enablePagination',
    type: 'boolean',
    required: 'false',
    description:
      'Should the row controls (paignation, etc..) be displayed on the table. By default they are included and need to be actively disabled.',
  },
];
