import { FC } from 'react';
import { People } from 'react-bootstrap-icons';
import { RBTColumnHeaderDefs, RBTColumnDefs, RBTOptions } from '@pallassystems/react-bootstrap-table';

import { HeaderPerson } from './header.type';

const HeaderExamplesData: HeaderPerson[] = [
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

const ModifiedAgeHeader: FC<RBTColumnHeaderDefs> = ({ id }) => {
  return (
    <h1 id={id} className={'text-center'}>
      Age
    </h1>
  );
};

const ModifiedNameHeader: FC<RBTColumnHeaderDefs> = () => {
  return (
    <>
      <People /> First Name
    </>
  );
};

const HeaderExamplesTableConfData: RBTColumnDefs<HeaderPerson>[] = [
  {
    accessorKey: 'firstName',
    id: 'First Name',
    Header: (props: RBTColumnHeaderDefs) => ModifiedNameHeader(props),
  },
  {
    accessorKey: 'age',
    id: 'Age',
    Header: (props: RBTColumnHeaderDefs) => ModifiedAgeHeader(props),
  },
];

export const HeaderExamplesRBTableData: RBTOptions = {
  columns: HeaderExamplesTableConfData,
  data: HeaderExamplesData,
};

export const GetHeaderExample = (): string => {
  return (
    'const HeaderExamplesData = ' +
    JSON.stringify(HeaderExamplesData, null, 2) +
    ';\n' +
    '\n' +
    'const ModifiedAgeHeader: FC<RBTColumnHeaderDefs> = ({ id }) => {\n' +
    "\treturn <h1 id={id} className={'text-center'}>Age</h1>;\n" +
    '};\n' +
    '\n' +
    'const ModifiedNameHeader: FC<RBTColumnHeaderDefs> = ({ id }) => {\n' +
    '\treturn <><Person /> First Name</>;\n' +
    '};\n' +
    '\n' +
    'const HeaderExamplesPage: FC = () => {\n' +
    '\tconst columns = useMemo<RBTColumnDefs<Person>[]>(\n' +
    '\t\t() => [\n' +
    '\t\t\t{\n' +
    "\t\t\t\taccessorkey: 'firstName',\n" +
    '\t\t\t\tHeader: (props: RBTColumnHeaderDefs) => ModifiedNameHeader(props),\n' +
    '\t\t\t},{\n' +
    "\t\t\t\taccessorKey: 'age',\n" +
    '\t\t\t\tHeader: (props: RBTColumnHeaderDefs) => ModifiedAgeHeader(props),\n' +
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
