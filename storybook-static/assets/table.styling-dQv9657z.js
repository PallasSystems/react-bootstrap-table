import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as i}from"./index-BrnU7xv7.js";import{ae as r,af as n}from"./index-CY0N-XWD.js";import{T as o,P as h,S as l,a as d,W as c,D as m,I as p,L as x,b as j,c as u}from"./table.styling.stories-VIB7BjLW.js";import"./index-DJO9vBfz.js";import"./iframe-CgnhCx6-.js";import"../sb-preview/runtime.js";import"./index-DJdX7xnk.js";import"./index-D-8MO0q_.js";import"./index-j_8AUxV0.js";import"./index-DrFu-skq.js";import"./table.components-BfWgpmDr.js";import"./menubar.components-BfK3u4TM.js";import"./search.components-BEIjgZAB.js";import"./common.testdata-CRS5kK67.js";import"./Row-BmL_LdaQ.js";import"./rowcontrols.components-BFJDomI2.js";function a(s){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{name:"Table Varients",of:o}),`
`,e.jsx(t.h1,{id:"making-use-of-varients",children:"Making use of Varients"}),`
`,e.jsx(t.p,{children:"The Bootstrap library supports theming of various elements, the table element provides 'varient' atyles. The React Bootstrap Table allows you to select the variant to use with the table."}),`
`,e.jsx(t.p,{children:"While there are default designs for all variants, most bootstrap themes will modify the variant styles."}),`
`,e.jsx(t.h1,{id:"demonstration",children:"Demonstration"}),`
`,e.jsx(t.p,{children:"The following subsections show the same tables with different variants selected."}),`
`,e.jsx(t.h2,{id:"primary",children:"Primary"}),`
`,e.jsxs(t.p,{children:["This table has set the variant attribute to ",e.jsx(t.code,{children:"primary"}),"."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(t.h2,{id:"secondary",children:"Secondary"}),`
`,e.jsxs(t.p,{children:["This table has set the variant attribute to ",e.jsx(t.code,{children:"secondary"}),"."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(t.h2,{id:"success",children:"Success"}),`
`,e.jsxs(t.p,{children:["This table has set the variant attribute to ",e.jsx(t.code,{children:"success"}),"."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(t.h2,{id:"warning",children:"Warning"}),`
`,e.jsxs(t.p,{children:["This table has set the variant attribute to ",e.jsx(t.code,{children:"warning"}),"."]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(t.h2,{id:"danger",children:"Danger"}),`
`,e.jsxs(t.p,{children:["This table has set the variant attribute to ",e.jsx(t.code,{children:"danger"}),"."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(t.h2,{id:"info",children:"Info"}),`
`,e.jsxs(t.p,{children:["This table has set the variant attribute to ",e.jsx(t.code,{children:"info"}),"."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(t.h2,{id:"light",children:"Light"}),`
`,e.jsxs(t.p,{children:["This table has set the variant attribute to ",e.jsx(t.code,{children:"light"}),"."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(t.h2,{id:"dark",children:"Dark"}),`
`,e.jsxs(t.p,{children:["This table has set the variant attribute to ",e.jsx(t.code,{children:"dark"}),"."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(t.h2,{id:"link",children:"Link"}),`
`,e.jsxs(t.p,{children:["This table has set the variant attribute to ",e.jsx(t.code,{children:"link"}),"."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(t.h1,{id:"source-code",children:"Source code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`/**
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
      id: 'firstName',
      header: 'Full Name',
    },
    {
      id: 'age',
      header: 'Age',
    },
  ];

  // Generates an instance of the table supplies our column definitions and the test data
  return (<RBTable  columns={ SimpleColumnDefs }, data={tableData} variant={primary} />);
};

`})})]})}function F(s={}){const{wrapper:t}={...i(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(a,{...s})}):a(s)}export{F as default};
