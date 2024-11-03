import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as a}from"./index-BrnU7xv7.js";import{ae as i,af as s}from"./index-CY0N-XWD.js";import{T as r,M as c}from"./table.modifiedAccessorFN.stories-fxAR3Hdf.js";import"./index-DJO9vBfz.js";import"./iframe-CgnhCx6-.js";import"../sb-preview/runtime.js";import"./index-DJdX7xnk.js";import"./index-D-8MO0q_.js";import"./index-j_8AUxV0.js";import"./index-DrFu-skq.js";import"./table.components-BfWgpmDr.js";import"./menubar.components-BfK3u4TM.js";import"./search.components-BEIjgZAB.js";import"./common.testdata-CRS5kK67.js";import"./Row-BmL_LdaQ.js";import"./rowcontrols.components-BFJDomI2.js";function o(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{name:"Accessor Functions",of:r}),`
`,e.jsx(n.h1,{id:"making-use-of-accessor-functions",children:"Making use of Accessor Functions"}),`
`,e.jsx(n.p,{children:"The React Bootstrap table allows us to supply a function to decide which field should be retrieved or perform a calculation and generate a result."}),`
`,e.jsx(n.p,{children:"The first column concatenates two fields from the data object to provide a combined name column. The Age column returns the field name 'age'. The system will identify this is a key in the data and return the value. The purpose of this action is to allow you to dynamically select the field displayed."}),`
`,e.jsx(n.h1,{id:"demonstration",children:"Demonstration"}),`
`,e.jsx(s,{of:c}),`
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

`})})]})}function M(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{M as default};
