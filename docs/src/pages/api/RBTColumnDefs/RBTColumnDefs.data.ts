// Getting Started Page Properties
import { ApiTableEntry } from '../api.types';

export const RBTColumnDefData: ApiTableEntry[] = [
  {
    field: 'AccessorFN',
    type: '(props: RBTColumnAccessorFNDef) => ReactNode',
    required: 'true',
    description: 'Allows users to define a function to return an element for the table header contents.',
  },
  {
    field: 'Header',
    type: '(props: RBTColumnHeaderDef) => ReactNode',
    required: 'true',
    description: 'Allows users to define a function to return an element for the table header contents.',
  },
  {
    field: 'accessorFn',
    type: '(originalRow: TData) => string',
    required: 'false',
    description:
      'Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition. Specify a function here to point to the correct property in the data object.',
  },
  {
    field: 'accessorKey',
    type: 'keyof TData',
    required: 'false',
    description:
      'Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition. Specify which key in the row this column should use to access the correct data. Also supports Deep Key Dot Notation.',
  },
  {
    field: 'header',
    type: 'string',
    required: 'true',
    description: 'Header must be a string.',
  },
  {
    field: 'id',
    type: 'string',
    required: 'false',
    description:
      'Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition. If you have also specified an `accessorFn`, MRT still needs to have a valid `id` to be able to identify the column uniquely. `id` defaults to the `accessorKey` or `header` if not specified.',
  },
  {
    field: 'searchable',
    type: 'boolean',
    required: 'false',
    description: 'Should this particular field be part of the search mechanisim?',
  },
];
