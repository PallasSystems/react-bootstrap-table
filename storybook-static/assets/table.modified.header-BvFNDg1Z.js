import{j as e}from"./common.testdata-DhpCxAve.js";import{useMDXComponents as a}from"./index-BrnU7xv7.js";import{ae as i,af as l}from"./index-C-8J6DOf.js";import{T as s,M as r}from"./table.modified.header.stories-DK2lRAKD.js";import"./index-DJO9vBfz.js";import"./iframe-BZKDQIGY.js";import"../sb-preview/runtime.js";import"./index-DLC2J04D.js";import"./index-D-8MO0q_.js";import"./index-0wbOH00J.js";import"./index-DrFu-skq.js";import"./table.components-DpgCJLwO.js";import"./menubar.components-Ca9Ezc2T.js";import"./search.components-CThtBX7H.js";import"./Row-GLtmuyK2.js";import"./rowcontrols.components-CqX9WPec.js";import"./person-DeWvC7_k.js";function o(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{name:"Modified Header Functions",of:s}),`
`,e.jsx(n.h1,{id:"create-a-modified-cells-table",children:"Create a modified cells table"}),`
`,e.jsx(n.p,{children:"The React Bootstrap table allows us to supply a function which returns a ReactNode (e.g. jsx/tsx functional component) to define the contents of a cell. When the function is defined for a specific column and when called the function is supplied a copy of the data for the row. This should allow the function to make cell specific choices."}),`
`,e.jsx(n.p,{children:"In the example below we define a column to hold both parts of a name from the dataset and to modify the age cell so the text is displayed as a header text item."}),`
`,e.jsx(n.h1,{id:"demonstration",children:"Demonstration"}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(n.h1,{id:"source-code",children:"Source Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/**
 * Simple Data type used within the various storybook stories to test out the functionality embedded within the React Bootstrap Table.
 */
export type SimpleDataType = {
  firstName: string;
  surname: string;
  age: number;
};

const ModifiedCellExampleComponent: FC<SimpleDataType[]> = (tableData) => {

  /**
   * This provides a definition for the columns in the table, in this example we are providing
   * two modified cell functions.
   */
  const SimpleColumnDefs: RBTColumnDefs<SimpleDataType>[] = [
    {
      Cell: (props: RBTColumnCellDef<SimpleDataType>) => ModifiedNameCell(props),
      header: 'Name',
    },
    {
      Cell: (props: RBTColumnCellDef<SimpleDataType>) => ModifiedAgeCell(props),
      header: 'Age',
    },
  ];

  /**
   * This is a modified cell function called by the table, this is called for the 'Age'
   * column. It is supplied the row data and extracts the age field from the data and
   * wraps it within a H1 (Header Level 1) HTML element.
   */
  const ModifiedAgeCell: FC<RBTColumnCellDef<SimpleDataType>> = ({ originalRow }) => {
    return <h1>{originalRow.age}</h1>;
  };


  /**
   * This is a modified cell function called by the table, this is called for the 'Name'
   * column. It is supplied the row data and concatenates the first name and surname fields
   * it also embededs the 'Person' React Bootstrap Icon around the result to show other
   * JSX/TSX elements can be included.
   */
  const ModifiedNameCell: FC<RBTColumnCellDef<SimpleDataType>> = ({ originalRow }) => {
    return (
      <p>
        <Person></Person>
        {originalRow.firstName} {originalRow.surname}
        <Person></Person>
      </p>
    );
  };


  // Generates an instance of the table supplies our column definitions and the test data
  return (<RBTable  columns={SimpleColumnDefs} data={tableData} />);
};

`})})]})}function M(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{M as default};
