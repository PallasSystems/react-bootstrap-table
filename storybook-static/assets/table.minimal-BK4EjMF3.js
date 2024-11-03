import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as i}from"./index-BrnU7xv7.js";import{ae as o,af as r}from"./index-CY0N-XWD.js";import{T as s,M as m}from"./table.minimal.stories-BLkvuaRp.js";import"./index-DJO9vBfz.js";import"./iframe-CgnhCx6-.js";import"../sb-preview/runtime.js";import"./index-DJdX7xnk.js";import"./index-D-8MO0q_.js";import"./index-j_8AUxV0.js";import"./index-DrFu-skq.js";import"./table.components-BfWgpmDr.js";import"./menubar.components-BfK3u4TM.js";import"./search.components-BEIjgZAB.js";import"./common.testdata-CRS5kK67.js";import"./Row-BmL_LdaQ.js";import"./rowcontrols.components-BFJDomI2.js";function t(a){const n={code:"code",h1:"h1",p:"p",pre:"pre",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{name:"Minimal Example",of:s}),`
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

`})})]})}function v(a={}){const{wrapper:n}={...i(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(t,{...a})}):t(a)}export{v as default};
