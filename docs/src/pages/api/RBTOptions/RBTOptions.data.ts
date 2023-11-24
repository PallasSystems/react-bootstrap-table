// Getting Started Page Properties
import { ApiTableEntry } from '../api.types';

export const RBTOptionsData: ApiTableEntry[] = [
  {
    field: 'columns',
    type: 'RBTColumnDefs<TData>[]',
    required: 'true',
    description: 'Specifies the properties needed to generate a Bootstrap Table.',
  },
  {
    field: 'data',
    type: 'TData[]',
    required: 'true',
    description: 'Data you want to display within the table.',
  },
  {
    field: 'header',
    type: 'RBTHeaderControls',
    required: 'false',
    description: 'Should the table headers, export button, compaction, etc.. be displayed.',
  },
  {
    field: 'footer',
    type: 'RBTFooterControls',
    required: 'false',
    description: 'Should the pagination controls, row controls, etc.. be displayed.',
  },
];
