"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[559],{2559:function(t,e,n){n.r(e),n.d(e,{default:function(){return L}});var a=n(4420),c="ContactListItem_contact-list-item__xfxDY",s="ContactListItem_contact-del-btn__ayQlY",o=n(184),r=function(t){var e=t.contact,n=t.handleDeleteContact,a=e.id,r=e.name,l=e.number;return(0,o.jsxs)("li",{className:c,children:[(0,o.jsxs)("p",{children:[r,": ",l]}),(0,o.jsx)("button",{type:"button",onClick:function(){return n(a)},className:s,children:"Delete"})]})},l=n(3634),i=n(3553),u=function(t){return t.contactsGroup},d=(0,i.P1)(u,(function(t){return t.items})),m=(0,i.P1)(u,(function(t){return t.filter})),f=(0,i.P1)([d,m],(function(t,e){return null===t||void 0===t?void 0:t.filter((function(t){return t.name.toLowerCase().includes(e.trim().toLowerCase())}))})),_=n(2791),h="ContactList_contact-list__GnW-D",x=function(){var t=(0,a.I0)(),e=(0,a.v9)(f);(0,_.useEffect)((function(){t((0,l.yF)())}),[t]);var n=function(e){var n=(0,l.GK)(e);t(n)};return(0,o.jsx)("ul",{className:h,children:null===e||void 0===e?void 0:e.map((function(t){return(0,o.jsx)(r,{contact:t,handleDeleteContact:n},t.id)}))})},p="Filter_filter-label__memAx",j="Filter_filter-label-text__+jugc",v="Filter_filter-input__dFgnI",b=n(1538),C=function(){var t=(0,a.I0)(),e=(0,a.v9)(m);return(0,o.jsx)("div",{children:(0,o.jsxs)("label",{className:p,children:[(0,o.jsx)("span",{className:j,children:"Find contacts by name"}),(0,o.jsx)("input",{className:v,type:"text",name:"keywords",onChange:function(e){var n=e.target.value,a=(0,b.T)(n);t(a)},value:e,placeholder:"Search..."})]})})},N=n(9439),F="FormAddContacts_contact-form__FtNV5",g="FormAddContacts_contact-form-label__kamQo",k="FormAddContacts_label-text__qkSDO",w="FormAddContacts_contact-form-input__HoNYX",y="FormAddContacts_contact-form-btn__WF9aE",A=n(2564),D=function(){var t=(0,_.useState)(""),e=(0,N.Z)(t,2),n=e[0],c=e[1],s=(0,_.useState)(""),r=(0,N.Z)(s,2),i=r[0],u=r[1],m=(0,a.I0)(),f=(0,a.v9)(d),h=function(){c(""),u("")};return(0,o.jsxs)("form",{className:F,onSubmit:function(t){if(t.preventDefault(),f.some((function(t){return t.name.toLowerCase()===n.toLowerCase()})))A.Am.warning("A contact with this name already exists!");else{var e={name:n,number:i},a=(0,l.uK)(e);m(a),A.Am.success("Contact ".concat(n," successfully added")),h()}},children:[(0,o.jsxs)("label",{className:g,children:[(0,o.jsx)("span",{className:k,children:"Name"}),(0,o.jsx)("input",{className:w,type:"text",name:"name",value:n,onChange:function(t){c(t.target.value)},placeholder:"Enter name",required:!0})]}),(0,o.jsxs)("label",{className:g,children:[(0,o.jsx)("span",{className:k,children:"Phone number"}),(0,o.jsx)("input",{className:w,type:"tel",name:"phone",value:i,onChange:function(t){u(t.target.value)},placeholder:"123456",required:!0})]}),(0,o.jsx)("button",{className:y,type:"submit",children:"Add contact"})]})},L=function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)("title",{children:"Contacts"}),(0,o.jsx)("h1",{className:"page-title",children:"Phonebook"}),(0,o.jsx)(D,{}),(0,o.jsx)("h2",{className:"contact-title",children:"Contacts"}),(0,o.jsx)(C,{}),(0,o.jsx)(x,{})]})}}}]);
//# sourceMappingURL=559.1e47fa5f.chunk.js.map