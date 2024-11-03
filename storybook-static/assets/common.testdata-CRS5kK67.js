import{g as b,r as l}from"./index-DJO9vBfz.js";import{j as c}from"./jsx-runtime-CkxqCPlQ.js";var A={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function a(){for(var s="",n=0;n<arguments.length;n++){var i=arguments[n];i&&(s=o(s,r(i)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return a.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var n="";for(var i in s)t.call(s,i)&&s[i]&&(n=o(n,i));return n}function o(s,n){return n?s?s+" "+n:s+n:s}e.exports?(a.default=a,e.exports=a):window.classNames=a})()})(A);var Z=A.exports;const u=b(Z),P=["xxl","xl","lg","md","sm","xs"],ee="xs",$=l.createContext({prefixes:{},breakpoints:P,minBreakpoint:ee});function d(e,t){const{prefixes:a}=l.useContext($);return e||a[t]||t}function te(){const{breakpoints:e}=l.useContext($);return e}function ae(){const{minBreakpoint:e}=l.useContext($);return e}var E={exports:{}},se="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",re=se,oe=re;function L(){}function B(){}B.resetWarningCache=L;var ne=function(){function e(r,o,s,n,i,m){if(m!==oe){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:B,resetWarningCache:L};return a.PropTypes=a,a};E.exports=ne();var le=E.exports;const F=b(le);function ce(e,t){return l.Children.toArray(e).some(a=>l.isValidElement(a)&&a.type===t)}function ie({as:e,bsPrefix:t,className:a,...r}){t=d(t,"col");const o=te(),s=ae(),n=[],i=[];return o.forEach(m=>{const p=r[m];delete r[m];let f,N,g;typeof p=="object"&&p!=null?{span:f,offset:N,order:g}=p:f=p;const h=m!==s?`-${m}`:"";f&&n.push(f===!0?`${t}${h}`:`${t}${h}-${f}`),g!=null&&i.push(`order${h}-${g}`),N!=null&&i.push(`offset${h}-${N}`)}),[{...r,className:u(a,...n,...i)},{as:e,bsPrefix:t,spans:n}]}const _=l.forwardRef((e,t)=>{const[{className:a,...r},{as:o="div",bsPrefix:s,spans:n}]=ie(e);return c.jsx(o,{...r,ref:t,className:u(a,!n.length&&s)})});_.displayName="Col";const pe={type:F.string,tooltip:F.bool,as:F.elementType},v=l.forwardRef(({as:e="div",className:t,type:a="valid",tooltip:r=!1,...o},s)=>c.jsx(e,{...o,ref:s,className:u(t,`${a}-${r?"tooltip":"feedback"}`)}));v.displayName="Feedback";v.propTypes=pe;const y=l.createContext({}),w=l.forwardRef(({id:e,bsPrefix:t,className:a,type:r="checkbox",isValid:o=!1,isInvalid:s=!1,as:n="input",...i},m)=>{const{controlId:p}=l.useContext(y);return t=d(t,"form-check-input"),c.jsx(n,{...i,ref:m,type:r,id:e||p,className:u(a,t,o&&"is-valid",s&&"is-invalid")})});w.displayName="FormCheckInput";const x=l.forwardRef(({bsPrefix:e,className:t,htmlFor:a,...r},o)=>{const{controlId:s}=l.useContext(y);return e=d(e,"form-check-label"),c.jsx("label",{...r,ref:o,htmlFor:a||s,className:u(t,e)})});x.displayName="FormCheckLabel";const D=l.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:a,inline:r=!1,reverse:o=!1,disabled:s=!1,isValid:n=!1,isInvalid:i=!1,feedbackTooltip:m=!1,feedback:p,feedbackType:f,className:N,style:g,title:h="",type:T="checkbox",label:R,children:j,as:H="input",...Y},z)=>{t=d(t,"form-check"),a=d(a,"form-switch");const{controlId:O}=l.useContext(y),Q=l.useMemo(()=>({controlId:e||O}),[O,e]),I=!j&&R!=null&&R!==!1||ce(j,x),X=c.jsx(w,{...Y,type:T==="switch"?"checkbox":T,ref:z,isValid:n,isInvalid:i,disabled:s,as:H});return c.jsx(y.Provider,{value:Q,children:c.jsx("div",{style:g,className:u(N,I&&t,r&&`${t}-inline`,o&&`${t}-reverse`,T==="switch"&&a),children:j||c.jsxs(c.Fragment,{children:[X,I&&c.jsx(x,{title:h,children:R}),p&&c.jsx(v,{type:f,tooltip:m,children:p})]})})})});D.displayName="FormCheck";const C=Object.assign(D,{Input:w,Label:x}),K=l.forwardRef(({bsPrefix:e,type:t,size:a,htmlSize:r,id:o,className:s,isValid:n=!1,isInvalid:i=!1,plaintext:m,readOnly:p,as:f="input",...N},g)=>{const{controlId:h}=l.useContext(y);return e=d(e,"form-control"),c.jsx(f,{...N,type:t,size:r,ref:g,readOnly:p,id:o||h,className:u(s,m?`${e}-plaintext`:e,a&&`${e}-${a}`,t==="color"&&`${e}-color`,n&&"is-valid",i&&"is-invalid")})});K.displayName="FormControl";const me=Object.assign(K,{Feedback:v}),J=l.forwardRef(({className:e,bsPrefix:t,as:a="div",...r},o)=>(t=d(t,"form-floating"),c.jsx(a,{ref:o,className:u(e,t),...r})));J.displayName="FormFloating";const S=l.forwardRef(({controlId:e,as:t="div",...a},r)=>{const o=l.useMemo(()=>({controlId:e}),[e]);return c.jsx(y.Provider,{value:o,children:c.jsx(t,{...a,ref:r})})});S.displayName="FormGroup";const G=l.forwardRef(({as:e="label",bsPrefix:t,column:a=!1,visuallyHidden:r=!1,className:o,htmlFor:s,...n},i)=>{const{controlId:m}=l.useContext(y);t=d(t,"form-label");let p="col-form-label";typeof a=="string"&&(p=`${p} ${p}-${a}`);const f=u(o,t,r&&"visually-hidden",a&&p);return s=s||m,a?c.jsx(_,{ref:i,as:"label",className:f,htmlFor:s,...n}):c.jsx(e,{ref:i,className:f,htmlFor:s,...n})});G.displayName="FormLabel";const V=l.forwardRef(({bsPrefix:e,className:t,id:a,...r},o)=>{const{controlId:s}=l.useContext(y);return e=d(e,"form-range"),c.jsx("input",{...r,type:"range",ref:o,className:u(t,e),id:a||s})});V.displayName="FormRange";const W=l.forwardRef(({bsPrefix:e,size:t,htmlSize:a,className:r,isValid:o=!1,isInvalid:s=!1,id:n,...i},m)=>{const{controlId:p}=l.useContext(y);return e=d(e,"form-select"),c.jsx("select",{...i,size:a,ref:m,className:u(r,e,t&&`${e}-${t}`,o&&"is-valid",s&&"is-invalid"),id:n||p})});W.displayName="FormSelect";const M=l.forwardRef(({bsPrefix:e,className:t,as:a="small",muted:r,...o},s)=>(e=d(e,"form-text"),c.jsx(a,{...o,ref:s,className:u(t,e,r&&"text-muted")})));M.displayName="FormText";const U=l.forwardRef((e,t)=>c.jsx(C,{...e,ref:t,type:"switch"}));U.displayName="Switch";const ue=Object.assign(U,{Input:C.Input,Label:C.Label}),q=l.forwardRef(({bsPrefix:e,className:t,children:a,controlId:r,label:o,...s},n)=>(e=d(e,"form-floating"),c.jsxs(S,{ref:n,className:u(t,e),controlId:r,...s,children:[a,c.jsx("label",{htmlFor:r,children:o})]})));q.displayName="FloatingLabel";const fe={_ref:F.any,validated:F.bool,as:F.elementType},k=l.forwardRef(({className:e,validated:t,as:a="form",...r},o)=>c.jsx(a,{...r,ref:o,className:u(e,t&&"was-validated")}));k.displayName="Form";k.propTypes=fe;const Ne=Object.assign(k,{Group:S,Control:me,Floating:J,Check:C,Switch:ue,Label:G,Text:M,Range:V,Select:W,FloatingLabel:q}),ge=(e,t)=>{let a=0;return e.position>t.position?a=1:e.position<t.position&&(a=-1),a},Fe=(e,t)=>{let a=[];return Array.isArray(t)&&(a=t.filter(r=>r!=null&&e!==r)),a},de=[{firstName:"Joe",surname:"Bloggs",age:24},{firstName:"Jane",surname:"Doe",age:36},{firstName:"John",surname:"Smith",age:48},{firstName:"Patty",surname:"O'Furniture",age:24},{firstName:"Teri",surname:"Dactyl",age:36},{firstName:"Allie",surname:"Grater",age:48}],xe={columns:[{accessorKey:"firstName",header:"First Name",searchable:!0},{accessorKey:"surname",header:"Surname",searchable:!0},{accessorKey:"age",header:"Age"}],data:de,name:"Simple Data",varient:"dark"},Ce={columns:[{accessorKey:"firstName",header:"First Name",searchable:!0},{accessorKey:"surname",header:"Surname",searchable:!0},{accessorKey:"age",header:"Age"}],data:[{position:0,filters:[],data:{firstName:"Joe",surname:"Bloggs",age:24}},{position:0,filters:[],data:{firstName:"Jane",surname:"Doe",age:36}},{position:0,filters:[],data:{firstName:"John",surname:"Smith",age:48}},{position:0,filters:[],data:{firstName:"Patty",surname:"O'Furniture",age:24}},{position:0,filters:[],data:{firstName:"Teri",surname:"Dactyl",age:36}},{position:0,filters:[],data:{firstName:"Allie",surname:"Grater",age:48}}],name:"Simple Data",varient:"dark"};export{ge as C,Ne as F,F as P,Fe as R,de as S,xe as a,te as b,u as c,ae as d,_ as e,w as f,ie as g,Ce as s,d as u};
