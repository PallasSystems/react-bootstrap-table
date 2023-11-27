import { RBTColumnDefs, RBTOptions } from '@pallassystems/react-bootstrap-table';

const SimpleExamplesData: Person[] = [
  {
    firstName: 'John',
    surname: 'Smith',
    age: 30,
  },
  {
    firstName: 'Sarah',
    surname: 'Jane',
    age: 21,
  },
  {
    firstName: 'Joe',
    surname: 'Bloggs',
    age: 43,
  },
  {
    firstName: 'John',
    surname: 'Doe',
    age: 37,
  },
  {
    firstName: 'Jessica',
    surname: 'Johnson',
    age: 55,
  },
  {
    firstName: 'Jennifer',
    surname: 'Williams',
    age: 26,
  },
  {
    firstName: 'Emily',
    surname: 'Wilson',
    age: 55,
  },
  {
    firstName: 'Alfie',
    surname: 'Best',
    age: 63,
  },
  {
    firstName: 'Edwin',
    surname: 'Sharpe',
    age: 42,
  },
  {
    firstName: 'Angus',
    surname: 'Fowler',
    age: 39,
  },
];

const SimpleExamplesTableConfData: RBTColumnDefs<Person>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'surname',
    header: 'Surname',
  },
  {
    accessorKey: 'age', //alternate way
    id: 'age', //id required if you use accessorFn instead of accessorKey
    header: 'Age',
  },
];

export const SimpleExamplesRBTableData: RBTOptions = {
  columns: SimpleExamplesTableConfData,
  data: SimpleExamplesData,
};

export const GetSimpleBannerExample = (): string => {
  return (
    'const SimpleExamplesData = ' +
    JSON.stringify(SimpleExamplesData, null, 2) +
    ';\n' +
    '\n' +
    'const GettingStartedUsagePage: FC = () => {\n' +
    '\tconst columns = useMemo<RBTColumnDefs<Person>[]>(\n' +
    '\t\t() => [\n' +
    '\t\t\t{\n' +
    "\t\t\t\taccessorKey: 'firstName',\n" +
    "\t\t\t\theader: 'First Name',\n" +
    '\t\t\t},{\n' +
    "\t\t\t\taccessorKey: 'surname',\n" +
    "\t\t\t\theader: 'Surname',\n" +
    '\t\t\t},{\n' +
    "\t\t\t\taccessorKey: 'age',\n" +
    "\t\t\t\theader: 'Age',\n" +
    '\t\t\t}\n' +
    '\t\t],[]\n' +
    '\t);\n' +
    '\n' +
    '\treturn (\n' +
    "\t\t<main role={'main'} className={'flex-shrink-0'}>\n" +
    '\t\t\t<RBTable columns={columns} data={SimpleExamplesData} />\n' +
    '\t\t</main>\n' +
    '\t);\n' +
    '};'
  );
};
