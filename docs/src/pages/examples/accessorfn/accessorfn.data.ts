import { RBTColumnDefs, RBTOptions } from '@pallassystems/react-bootstrap-table';

const AccessorFNExamplesData: AccessorFNPerson[] = [
  {
    firstName: 'John',
    surname: 'Smith',
    age: 30,
  },
  {
    firstName: 'Sara',
    surname: 'Jane',
    age: 25,
  },
];

const AccessorFNExamplesTableConfData: RBTColumnDefs<AccessorFNPerson>[] = [
  {
    accessorFn: (row: AccessorFNPerson) => {
      return row.firstName + ' ' + row.surname;
    },
    id: 'name',
    header: 'Full Name',
  },
  {
    accessorFn: () => {
      return 'age';
    },
    id: 'age',
    header: 'Age',
  },
];

export const AccessorFNExamplesRBTableData: RBTOptions = {
  columns: AccessorFNExamplesTableConfData,
  data: AccessorFNExamplesData,
};

export const GetAccessorFNExample = (): string => {
  return (
    'const AccessorFNExamplesData = ' +
    JSON.stringify(AccessorFNExamplesData, null, 2) +
    ';\n' +
    '\n' +
    'const AccessorFNExamplesPage: FC = () => {\n' +
    '\tconst columns = useMemo<RBTColumnDefs<Person>[]>(\n' +
    '\t\t() => [\n' +
    '\t\t\t{\n' +
    "\t\t\t\taccessorFn: (row: AccessorFNPerson) => row.firstName + ' ' + row.surname,\n" +
    "\t\t\t\tid: 'name',\n" +
    "\t\t\t\theader: 'Full Name',\n" +
    '\t\t\t},{\n' +
    "\t\t\t\taccessorFn: (row: AccessorFNPerson) => return 'row',\n" +
    "\t\t\t\tid: 'age',\n" +
    "\t\t\t\theader: 'age',\n" +
    '\t\t\t}\n' +
    '\t\t],[]\n' +
    '\t);\n' +
    '\n' +
    '\treturn (\n' +
    "\t\t<main role={'main'} className={'flex-shrink-0'}>\n" +
    '\t\t\t<RBTable columns={columns} data={AccessorFNExamplesData} />\n' +
    '\t\t</main>\n' +
    '\t);\n' +
    '};'
  );
};
