import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as i}from"./index-FeUjBnvO.js";import{M as o,C as r}from"./index-BFeavrTM.js";import{T as s,M as m}from"./table.minimal.stories-Bh3okihN.js";import"./index-uubelm5h.js";import"./iframe-B1WIIyin.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-DXimoRZY.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./table.components-EyjfkwRm.js";import"./menubar.components-B-qAqYFO.js";import"./search.components-BgQgJIIA.js";import"./common.testdata-CGJEWT8M.js";import"./index-Bres9Iq4.js";import"./Row-C7mB3ljR.js";import"./rowcontrols.components-1jIZ_AR-.js";function a(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{name:"Minimal Example",of:s}),`
`,e.jsx(n.h1,{id:"create-a-minimal-table",children:"Create a minimal table"}),`
`,e.jsx(n.p,{children:"The React Bootstrap Table library aims to provide extensive configurability which can be disabled or customised to meet you needs."}),`
`,e.jsx(n.p,{children:"In this example we have extended the basic table example and disabled all of the optional parameters."}),`
`,e.jsx(n.h1,{id:"demonstration",children:"Demonstration"}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h1,{id:"source-code",children:"Source code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/**
 * Simple Data type used within the various storybook stories to test out the functionality embedded within the React Bootstrap Table.
 */
export type SimpleDataType = {
  firstName: string;
  surname: string;
  age: number;
};

const BasicExampleComponent: FC<SimpleDataType[]> = (tableData) => {

  /**
   * This provides a definition for the columns in the table, in this example we are providing
   * two modified cell functions.
   */
  const SimpleColumnDefs: RBTColumnDefs<SimpleDataType>[] = [
    { accessorKey: 'firstName', header: 'First Name', searchable: true, Header: () => 'Header Function Name' },
    { accessorKey: 'surname', header: 'Surname', searchable: true, Header: () => 'Header Function Surname' },
    { accessorKey: 'age', header: 'Age', Header: () => 'Header Function Age' },
  ];

  // Generates an instance of the table supplies our column definitions and the test data
  return (<RBTable  columns={ SimpleColumnDefs }, data={tableData} header={{enableTableHead: false}} footer={{enablePagination: false}}/>);
};

`})})]})}function w(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{w as default};
