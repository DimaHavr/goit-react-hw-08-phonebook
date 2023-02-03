"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[368],{4368:function(n,e,t){t.r(e),t.d(e,{default:function(){return rn}});var r,o,a,i,s,c,d,l,p,x,u,f,m,b,g,h,Z,j,y,v,w=t(2791),z=t(9434),k=t(6383),C=t(3064),K=t(9439),_=t(5264),A=t(168),L=t(7402),N=t(9126),q=t(6355),F=(0,L.Z)(N.lfG)(r||(r=(0,A.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  z-index: 100;\n"]))),I=(0,L.Z)(q.q1E)(o||(o=(0,A.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  z-index: 100;\n"]))),P=L.Z.form(a||(a=(0,A.Z)(["\n  display: flex;\n  align-items: stretch;\n  gap: 10px;\n  padding: 10px;\n\n  @media screen and (max-width: 767px) {\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n  }\n"]))),S=L.Z.div(i||(i=(0,A.Z)(["\n  position: relative;\n"]))),Y=L.Z.input(s||(s=(0,A.Z)(["\n  text-indent: 30px;\n  width: 280px;\n  padding: 10px;\n  font-size: 16px;\n  border: none;\n  border: 2px solid lightgray;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.01);\n    color: orangered;\n    border-color: orangered;\n  }\n"]))),B=L.Z.button(c||(c=(0,A.Z)(["\n  cursor: pointer;\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: white;\n  background: linear-gradient(#1b1b1b, #111);\n  font-weight: 500;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n    color: orangered;\n  }\n\n  @media screen and (max-width: 767px) {\n    width: 100%;\n  }\n"]))),D=t(4476),E=t(184),G=function(){var n=(0,z.I0)(),e=(0,z.v9)(k.K).contacts,t=(0,w.useState)(""),r=(0,K.Z)(t,2),o=r[0],a=r[1],i=(0,w.useState)(""),s=(0,K.Z)(i,2),c=s[0],d=s[1],l=function(n){var e=n.target,t=e.name,r=e.value;"name"===t?a(r):d(r)},p=function(n){a(""),d(""),n.target.reset()};return(0,E.jsx)(D.Z,{display:"flex",justifyContent:"center",flexDirection:"column",gap:"20px",marginBottom:"10px",children:(0,E.jsxs)(P,{onSubmit:function(t){t.preventDefault(),e.find((function(n){return n.name===o}))?(a(""),_.Notify.failure("".concat(o," is already in contacts!"))):(n((0,C.uK)({name:o,number:c})),p(t),_.Notify.success("".concat(o," is added in contacts!")))},children:[(0,E.jsxs)(S,{children:[(0,E.jsx)(I,{}),(0,E.jsx)(Y,{value:o,placeholder:"Name",type:"text",name:"name",maxLength:"20",required:!0,onChange:l})]}),(0,E.jsxs)(S,{children:[(0,E.jsx)(F,{}),(0,E.jsx)(Y,{value:c,placeholder:"Phone number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",maxLength:"15",required:!0,onChange:l})]}),(0,E.jsx)(B,{type:"submit",children:"Add Contact"})]})})},J=t(1634),M=L.Z.ul(d||(d=(0,A.Z)(["\n  list-style-type: none;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  gap: 20px;\n  margin-top: 20px;\n"]))),T=(L.Z.li(l||(l=(0,A.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  border: 1px solid #000;\n  padding: 10px;\n  background-color: #4c779c4c;\n"]))),L.Z.p(p||(p=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: flex-start;\n  font-weight: bold;\n  font-size: 15px;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 10px;\n"]))),L.Z.span(x||(x=(0,A.Z)([""]))),L.Z.button(u||(u=(0,A.Z)(["\n  width: 80px;\n  height: 35px;\n  font-weight: bold;\n  font-size: 15px;\n  color: #000;\n  background-color: #fff;\n  border: none;\n  border-radius: 5px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  :active {\n    transform: scale(1.1);\n  }\n"]))),t(8820)),$=(0,L.Z)(T.YK6)(f||(f=(0,A.Z)(["\n  width: 35px;\n  height: 35px;\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n    color: orangered;\n  }\n"]))),H=L.Z.li(m||(m=(0,A.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  border: 1px solid #000;\n  padding: 10px;\n  background-color: #4c779c4c;\n"]))),O=L.Z.p(b||(b=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: flex-start;\n  font-weight: bold;\n  font-size: 15px;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 10px;\n"]))),Q=L.Z.span(g||(g=(0,A.Z)([""]))),R=L.Z.button(h||(h=(0,A.Z)(["\n  background: none;\n  border: none;\n  cursor: pointer;\n"]))),U=function(n){var e=n.id,t=n.name,r=n.number,o=(0,z.I0)();return(0,E.jsxs)(H,{children:[(0,E.jsxs)(O,{children:[t,": ",(0,E.jsx)(Q,{children:r})]}),(0,E.jsx)(R,{onClick:function(){return _.Notify.info("\u0421ontact deleted!"),o((0,C.GK)(e))},type:"button",children:(0,E.jsx)($,{})})]})},V=function(){var n=(0,z.v9)(J.zK),e=(0,z.v9)(k.K).contacts;return(0,E.jsx)(M,{children:function(){var t=n.toLocaleLowerCase();return e.filter((function(n){return n.name.toLocaleLowerCase().includes(t)}))}().map((function(n){var e=n.name,t=n.number,r=n.id;return(0,E.jsx)(U,{name:e,number:t,id:r},r)}))})},W=L.Z.div(Z||(Z=(0,A.Z)(["\n  display: flex;\n  gap: 10px;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: bold;\n  font-size: 15px;\n  color: #000;\n  padding-top: 20px;\n"]))),X=L.Z.h2(j||(j=(0,A.Z)(["\n  font-weight: bold;\n  font-size: 25px;\n  text-transform: uppercase;\n  text-align: left;\n"]))),nn=L.Z.input(y||(y=(0,A.Z)(["\n  width: 300px;\n  padding: 10px;\n  margin-bottom: 20px;\n  font-size: 16px;\n  border: none;\n  border: 2px solid lightgray;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.01);\n    color: orangered;\n    border-color: orangered;\n  }\n"]))),en=function(){var n=(0,z.I0)(),e=(0,z.v9)(J.zK);return(0,E.jsxs)(D.Z,{children:[(0,E.jsx)(X,{children:"Contacts:"}),(0,E.jsx)(W,{children:(0,E.jsx)(nn,{placeholder:"Find contacts by name:",value:e,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(e){return n((0,J.Tv)(e.target.value))}})})]})},tn=t(8789).ZP.div(v||(v=(0,A.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),rn=function(){var n=(0,z.I0)(),e=(0,z.v9)(k.K).contacts;return(0,w.useEffect)((function(){n((0,C.yF)())}),[n]),(0,E.jsx)(D.Z,{as:"section",children:(0,E.jsxs)(tn,{children:[(0,E.jsx)(G,{}),e.length>0&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(en,{}),(0,E.jsx)(V,{})]})]})})}}}]);
//# sourceMappingURL=368.5c043791.chunk.js.map