import{j as e}from"./common.testdata-DhpCxAve.js";import{useMDXComponents as o}from"./index-BrnU7xv7.js";import{ae as i,af as r}from"./index-C-8J6DOf.js";import{T as s,B as m}from"./table.basic.stories-BeY6Js-1.js";import"./index-DJO9vBfz.js";import"./iframe-BZKDQIGY.js";import"../sb-preview/runtime.js";import"./index-DLC2J04D.js";import"./index-D-8MO0q_.js";import"./index-0wbOH00J.js";import"./index-DrFu-skq.js";import"./table.components-DpgCJLwO.js";import"./menubar.components-Ca9Ezc2T.js";import"./search.components-CThtBX7H.js";import"./Row-GLtmuyK2.js";import"./rowcontrols.components-CqX9WPec.js";function a(n){const t={code:"code",h1:"h1",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{name:"Basic Example",of:s}),`
`,e.jsx(t.h1,{id:"create-a-basic-table",children:"Create a Basic table"}),`
`,e.jsx(t.p,{children:"The React Bootstrap Table library aims to provide extensive configurability which can be disabled or customised to meet you needs. In this example we have disabled all optional parameters."}),`
`,e.jsx(t.h1,{id:"demonstration",children:"Demonstration"}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(t.h1,{id:"source-code",children:"Source code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`/**
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
  return (<RBTable  columns={ SimpleColumnDefs }, data={tableData} />);
};

`})})]})}function S(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{S as default};
