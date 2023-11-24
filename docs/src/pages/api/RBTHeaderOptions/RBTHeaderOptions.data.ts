// Getting Started Page Properties
import { ApiTableEntry } from '../api.types';

export const RBTHeaderOptionsData: ApiTableEntry[] = [
  {
    field: 'enableTableHead',
    type: 'boolean',
    required: 'false',
    description: 'Specifies the properties needed to generate a Bootstrap Table.',
  },
  {
    field: 'enableDensityToggle',
    type: 'boolean',
    required: 'true',
    description: 'Data you want to display within the table.',
  },
  {
    field: 'enableExportButton',
    type: 'boolean',
    required: 'false',
    description: 'Should the pagination controls, row controls, etc.. be displayed.',
  },
];
