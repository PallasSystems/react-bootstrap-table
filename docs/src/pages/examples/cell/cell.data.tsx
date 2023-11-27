import { RBTColumnCellDefs, RBTColumnDefs, RBTOptions } from '@pallassystems/react-bootstrap-table';
import { FC } from 'react';
import { Person } from 'react-bootstrap-icons';

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

const ModifiedAgeCell: FC<RBTColumnCellDefs> = ({ originalRow }) => {
  return <p className={'text-center'}>{originalRow.age}</p>;
};

const ModifiedFirstNameCell: FC<RBTColumnCellDefs> = ({ originalRow }) => {
  return (
    <>
      <Person /> {originalRow.firstName} <Person />
    </>
  );
};

const CellExamplesTableConfData: RBTColumnDefs<CellPerson>[] = [
  {
    Cell: (props: RBTColumnCellDefs) => ModifiedFirstNameCell(props),
    id: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'surname',
    header: 'Surname',
  },
  {
    Cell: (props: RBTColumnCellDefs) => ModifiedAgeCell(props),
    id: 'age',
    header: 'Age',
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
    'const ModifiedAgeCell: FC<RBTColumnCellDefs> = ({ originalRow }) => {\n' +
    "\treturn <p className={'text-center'}>{originalRow.age}</p>;\n" +
    '}\n' +
    'const ModifiedFirstNameCell: FC<RBTColumnCellDefs> = ({ originalRow }) => {\n' +
    '\treturn <><Person /> {originalRow.firstName} <Person /></>;\n' +
    '}\n' +
    '\n' +
    'const CellExamplesPage: FC = () => {\n' +
    '\tconst columns = useMemo<RBTColumnDefs<Person>[]>(\n' +
    '\t\t() => [\n' +
    '\t\t\t{\n' +
    '\t\t\t\tCell: (props: RBTColumnCellDefs) => ModifiedFirstNameCell(props),\n' +
    "\t\t\t\tid: 'firstName',\n" +
    "\t\t\t\theader: 'Full Name',\n" +
    '\t\t\t},{\n' +
    "\t\t\t\taccessorKey: 'age',\n" +
    '\t\t\t\tHeader: (props: RBTColumnHeaderDefs) => ModifiedAgeHeader(props),\n' +
    '\t\t\t},{\n' +
    '\t\t\t\tCell: (props: RBTColumnCellDefs) => ModifiedAgeCell(props),\n' +
    "\t\t\t\tid: 'age',\n" +
    "\t\t\t\theader: 'Age',\n" +
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
