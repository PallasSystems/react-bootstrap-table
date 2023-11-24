import { RBTColumnDefs, RBTOptions } from '@pallassystems/react-bootstrap-table';

const SimpleExamplesData: Person[] = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Sara',
    age: 25,
  },
];

const SimpleExamplesTableConfData: RBTColumnDefs<Person>[] = [
  {
    accessorKey: 'name', //simple recommended way to define a column
    header: 'Name',
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
  enablePagination: true,
  enableTableHead: true,
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
    "\t\t\t\taccessorKey: 'name',\n" +
    "\t\t\t\theader: 'Name',\n" +
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
