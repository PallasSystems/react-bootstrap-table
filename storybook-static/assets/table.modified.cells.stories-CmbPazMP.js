import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{R as n}from"./table.components-EyjfkwRm.js";import{S as i}from"./common.testdata-CGJEWT8M.js";import{P as s}from"./person-BHF5urKv.js";const d={title:"react-bootstrap-table/Table",component:n,tags:["autodocs"]},m=[{Cell:e=>f(e),header:"Name"},{Cell:e=>c(e),header:"Age"}],c=({originalRow:e})=>o.jsx("h1",{children:e.age}),f=({originalRow:e})=>o.jsxs("p",{children:[o.jsx(s,{}),e.firstName," ",e.surname,o.jsx(s,{})]}),a={args:{columns:m,data:i,header:{enableTableHead:!1},footer:{enablePagination:!1}}};var t,r,l;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(l=(r=a.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const p=["ModifiedCellFn"],S=Object.freeze(Object.defineProperty({__proto__:null,ModifiedCellFn:a,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{a as M,S as T};
