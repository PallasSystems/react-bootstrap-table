import{j as e}from"./common.testdata-DhpCxAve.js";import{useMDXComponents as a}from"./index-BrnU7xv7.js";import{ae as s,af as i}from"./index-C-8J6DOf.js";import{T as r,M as c}from"./table.modifiedAccessorFN.stories-CfNUOES6.js";import"./index-DJO9vBfz.js";import"./iframe-BZKDQIGY.js";import"../sb-preview/runtime.js";import"./index-DLC2J04D.js";import"./index-D-8MO0q_.js";import"./index-0wbOH00J.js";import"./index-DrFu-skq.js";import"./table.components-DpgCJLwO.js";import"./menubar.components-Ca9Ezc2T.js";import"./search.components-CThtBX7H.js";import"./Row-GLtmuyK2.js";import"./rowcontrols.components-CqX9WPec.js";function o(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{name:"Accessor Functions",of:r}),`
`,e.jsx(n.h1,{id:"making-use-of-accessor-functions",children:"Making use of Accessor Functions"}),`
`,e.jsx(n.p,{children:"The React Bootstrap table allows us to supply a function to decide which field should be retrieved or perform a calculation and generate a result."}),`
`,e.jsx(n.p,{children:"The first column concatenates two fields from the data object to provide a combined name column. The Age column returns the field name 'age'. The system will identify this is a key in the data and return the value. The purpose of this action is to allow you to dynamically select the field displayed."}),`
`,e.jsx(n.h1,{id:"demonstration",children:"Demonstration"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h1,{id:"source-code",children:"Source code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/**
 * Simple Data type used within the various storybook stories to test out the functionality embedded within the React Bootstrap Table.
 */
export type SimpleDataType = {
  firstName: string;
  surname: string;
  age: number;
};

const AccessorFNExamplesComponent: FC<SimpleDataType[]> = (tableData) => {

  /**
   * This provides a definition for the columns in the table, in this example we are concatinating two data fields
   * to provide a result for a single column.
   */
  const SimpleColumnDefs: RBTColumnDefs<SimpleDataType>[] = [
    {
      accessorFn: (row: SimpleDataType) => {
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

  // Generates an instance of the table supplies our column definitions and the test data
  return (<RBTable  columns={ SimpleColumnDefs }, data={tableData} />);
};

`})})]})}function C(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{C as default};
