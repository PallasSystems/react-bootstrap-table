import { RBTOptions } from '../table';
import { RBTData } from './common.types';

/**
 * Simple Data type used within the various storybook stories to test out the functionality embedded within the React Bootstrap Table.
 */
export type SimpleDataType = {
  firstName: string;
  surname: string;
  age: number;
};

/**
 * Basic Dataset to use when combined with the SimpleDataType.
 */
export const SimpleDataset: SimpleDataType[] = [
  { firstName: 'Joe', surname: 'Bloggs', age: 24 },
  { firstName: 'Jane', surname: 'Doe', age: 36 },
  { firstName: 'John', surname: 'Smith', age: 48 },
  { firstName: 'Patty', surname: "O'Furniture", age: 24 },
  { firstName: 'Teri', surname: 'Dactyl', age: 36 },
  { firstName: 'Allie', surname: 'Grater', age: 48 },
];

export const searchableArgs: RBTOptions<SimpleDataType> = {
  columns: [
    { accessorKey: 'firstName', header: 'First Name', searchable: true },
    { accessorKey: 'surname', header: 'Surname', searchable: true },
    { accessorKey: 'age', header: 'Age' },
  ],
  data: SimpleDataset,
  name: 'Simple Data',
  varient: 'dark',
};

export const searchableArgsRBTData: RBTData<SimpleDataType> = {
  columns: [
    { accessorKey: 'firstName', header: 'First Name', searchable: true },
    { accessorKey: 'surname', header: 'Surname', searchable: true },
    { accessorKey: 'age', header: 'Age' },
  ],
  data: [
    { position: 0, filters: [], data: { firstName: 'Joe', surname: 'Bloggs', age: 24 } },
    { position: 0, filters: [], data: { firstName: 'Jane', surname: 'Doe', age: 36 } },
    { position: 0, filters: [], data: { firstName: 'John', surname: 'Smith', age: 48 } },
    { position: 0, filters: [], data: { firstName: 'Patty', surname: "O'Furniture", age: 24 } },
    { position: 0, filters: [], data: { firstName: 'Teri', surname: 'Dactyl', age: 36 } },
    { position: 0, filters: [], data: { firstName: 'Allie', surname: 'Grater', age: 48 } },
  ],
  name: 'Simple Data',
  varient: 'dark',
};
