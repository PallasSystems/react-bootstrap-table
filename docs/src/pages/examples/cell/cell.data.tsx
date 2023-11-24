import { RBTColumnHeaderDefs, RBTColumnDefs, RBTOptions } from '@pallassystems/react-bootstrap-table';
import { FC } from 'react';

const CellExamplesData: CellPerson[] = [
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

const ModifiedAgeHeader: FC<RBTColumnHeaderDefs> = ({ header, id }) => {
  console.log('header: ' + header);
  return <h1 id={id}>{header}</h1>;
};
const CellExamplesTableConfData: RBTColumnDefs<CellPerson>[] = [
  {
    accessorFn: (row: CellPerson) => row.firstName + ' ' + row.surname,
    header: 'Name',
  },
  {
    accessorKey: 'age', //alternate way
    id: 'age', //id required if you use accessorFn instead of accessorKey
    header: 'Age',
    Header: (props: RBTColumnHeaderDefs) => ModifiedAgeHeader(props),
  },
];

export const CellExamplesRBTableData: RBTOptions = {
  columns: CellExamplesTableConfData,
  data: CellExamplesData,
};

export const GetCellExample = (): string => {
  return (
    'const CellExamplesData = ' +
    JSON.stringify(CellExamplesData, null, 2) +
    ';\n' +
    '\n' +
    'const CellExamplesPage: FC = () => {\n' +
    '\tconst columns = useMemo<RBTColumnDefs<Person>[]>(\n' +
    '\t\t() => [\n' +
    '\t\t\t{\n' +
    "\t\t\t\taccessorFn: (row: CellPerson) => row.firstName + ' ' + row.surname,\n" +
    "\t\t\t\theader: 'Full Name',\n" +
    '\t\t\t},{\n' +
    "\t\t\t\taccessorKey: 'age',\n" +
    '\t\t\t\tHeader: (props: RBTColumnHeaderDefs) => ModifiedAgeHeader(props),\n' +
    '\t\t\t}\n' +
    '\t\t],[]\n' +
    '\t);\n' +
    '\n' +
    '\treturn (\n' +
    "\t\t<main role={'main'} className={'flex-shrink-0'}>\n" +
    '\t\t\t<RBTable columns={columns} data={CellExamplesData} />\n' +
    '\t\t</main>\n' +
    '\t);\n' +
    '};'
  );
};
