import{S as n,j as s}from"./common.testdata-DhpCxAve.js";import{R as i}from"./table.components-DpgCJLwO.js";import{P as o}from"./person-DeWvC7_k.js";const d={title:"react-bootstrap-table/Table",component:i,tags:["autodocs"]},m=[{Cell:e=>f(e),header:"Name"},{Cell:e=>c(e),header:"Age"}],c=({originalRow:e})=>s.jsx("h1",{children:e.age}),f=({originalRow:e})=>s.jsxs("p",{children:[s.jsx(o,{}),e.firstName," ",e.surname,s.jsx(o,{})]}),a={args:{columns:m,data:n,header:{enableTableHead:!1},footer:{enablePagination:!1}}};var t,r,l;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    columns: SimpleColumnDefs,
    data: SimpleDataset,
    header: {
      enableTableHead: false
    },
    footer: {
      enablePagination: false
    }
  }
}`,...(l=(r=a.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const p=["ModifiedCellFn"],C=Object.freeze(Object.defineProperty({__proto__:null,ModifiedCellFn:a,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{a as M,C as T};
