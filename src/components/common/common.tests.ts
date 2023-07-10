import { RBTData } from './common.types';

export type SimpleDataType = {
  firstName: string;
  surname: string;
  age: number;
};

export const searchableArgs: RBTData<SimpleDataType> = {
  columns: [
    { accessorKey: 'firstName', header: 'First Name', searchable: true },
    { accessorKey: 'surname', header: 'Surname', searchable: true },
    { accessorKey: 'age', header: 'Age' },
  ],
  data: [
    { firstName: 'Joe', surname: 'Bloggs', age: 24 },
    { firstName: 'Jane', surname: 'Doe', age: 36 },
    { firstName: 'John', surname: 'Smith', age: 48 },
    { firstName: 'Patty', surname: "O'Furniture", age: 24 },
    { firstName: 'Teri', surname: 'Dactyl', age: 36 },
    { firstName: 'Allie', surname: 'Grater', age: 48 },
  ],
  name: 'Simple Data',
  varient: 'dark',
};
