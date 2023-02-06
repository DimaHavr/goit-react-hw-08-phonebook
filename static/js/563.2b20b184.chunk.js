"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[563],{4563:function(n,e,t){t.r(e),t.d(e,{default:function(){return gn}});var r,a,i,o,s,l,c,d,p,f,x,u,m,b,h,g,Z,y,v,w,j,k,z,C=t(2791),P=t(168),Y=t(8789),L=t(5880),I=(0,Y.ZP)(L.KIW)(r||(r=(0,P.Z)(["\n  width: 35px;\n  height: 35px;\n  color: #fff;\n  margin-right: 5px;\n  animation: rotate-scale-up-ver 2s ease-in-out infinite;\n\n  @keyframes rotate-scale-up-ver {\n    0% {\n      -webkit-transform: scale(1) rotateY(0);\n      transform: scale(1) rotateY(0);\n    }\n    50% {\n      -webkit-transform: scale(1.2) rotateY(360deg);\n      transform: scale(1.2) rotateY(360deg);\n    }\n    100% {\n      -webkit-transform: scale(1) rotateY(360deg);\n      transform: scale(1) rotateY(360deg);\n    }\n  }\n"]))),X=Y.ZP.a(a||(a=(0,P.Z)(["\n  font-weight: bold;\n  font-size: 15px;\n  text-align: center;\n  color: #e0e0e0;\n  letter-spacing: 1px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n    color: orangered;\n  }\n"]))),_=Y.ZP.div(i||(i=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]))),D=(Y.ZP.h2(o||(o=(0,P.Z)(["\n  font-weight: bold;\n  font-size: 25px;\n  text-transform: uppercase;\n  text-align: left;\n  color: #fff;\n"]))),Y.ZP.div(s||(s=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: rgba(33, 33, 33, 0);\n"])))),A=Y.ZP.h1(l||(l=(0,P.Z)(["\n  position: relative;\n  font-size: 56px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: #fff;\n  letter-spacing: 5px;\n  text-transform: uppercase;\n  z-index: 1;\n\n  &:before,\n  &:after {\n    display: block;\n    content: attr(data-glitch);\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0.8;\n    animation: glitch-color 3s ease-in-out both infinite;\n  }\n\n  &:before {\n    color: #000000;\n    z-index: -1;\n  }\n\n  &:after {\n    color: darkslategrey;\n    z-index: -2;\n  }\n  @media screen and (max-width: 767px) {\n    font-size: 36px;\n  }\n"]))),N=Y.ZP.style(c||(c=(0,P.Z)(["\n  @keyframes glitch-color {\n    0% {\n      transform: translate(0);\n    }\n\n    20% {\n      transform: translate(-3px, 3px);\n    }\n\n    40% {\n      transform: translate(-3px, -3px);\n    }\n\n    60% {\n      transform: translate(3px, 3px);\n    }\n\n    80% {\n      transform: translate(3px, -3px);\n    }\n\n    to {\n      transform: translate(0);\n    }\n  }\n"]))),q=t(9434),K=function(n){return n.contacts.loading},S=function(n){return n.contacts.contacts},B=t(3634),F=t(9439),T=t(5264),V=t(7402),E=t(9126),G=t(6355),H=(0,V.Z)(E.lfG)(d||(d=(0,P.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  z-index: 100;\n  fill: darkslategrey;\n"]))),J=(0,V.Z)(G.q1E)(p||(p=(0,P.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  z-index: 100;\n  fill: darkslategrey;\n"]))),M=V.Z.form(f||(f=(0,P.Z)(["\n  display: flex;\n  align-items: stretch;\n  gap: 10px;\n  padding: 10px;\n\n  @media screen and (max-width: 767px) {\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n  }\n"]))),W=V.Z.div(x||(x=(0,P.Z)(["\n  position: relative;\n"]))),$=V.Z.input(u||(u=(0,P.Z)(["\n  text-indent: 30px;\n  width: 280px;\n  padding: 10px;\n  font-size: 16px;\n  border: none;\n  border: 2px solid #000;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    outline 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.01);\n    color: #000;\n    outline: 1px solid #000;\n    border-radius: 5px;\n  }\n"]))),O=V.Z.button(m||(m=(0,P.Z)(["\n  cursor: pointer;\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: white;\n  background: linear-gradient(#1b1b1b, #111);\n  font-weight: 500;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n    color: darkslategrey;\n  }\n  @keyframes btn-animation {\n    0% {\n      transform: scale(1.05);\n    }\n    20% {\n      transform: scale(1.1);\n    }\n    100% {\n      transform: scale(1.13);\n    }\n  }\n  :active {\n    animation: btn-animation 1s ease-out;\n  }\n"]))),Q=t(4476),R=t(3329),U=function(){var n=(0,q.I0)(),e=(0,q.v9)(S),t=(0,C.useState)(""),r=(0,F.Z)(t,2),a=r[0],i=r[1],o=(0,C.useState)(""),s=(0,F.Z)(o,2),l=s[0],c=s[1],d=function(n){var e=n.target,t=e.name,r=e.value;"name"===t?i(r):c(r)},p=function(n){i(""),c(""),n.target.reset()};return(0,R.jsx)(Q.Z,{display:"flex",justifyContent:"center",flexDirection:"column",gap:"20px",marginTop:"20px",children:(0,R.jsxs)(M,{onSubmit:function(t){t.preventDefault(),e.map((function(n){return n.name.toLocaleLowerCase()})).some((function(n){return n===a.toLocaleLowerCase()}))?(i(""),T.Notify.failure("".concat(a," is already in contacts!"))):(n((0,B.uK)({name:a,number:l})),p(t),T.Notify.success("".concat(a," is added in contacts!")))},children:[(0,R.jsxs)(W,{children:[(0,R.jsx)(J,{}),(0,R.jsx)($,{value:a,placeholder:"Name",type:"text",name:"name",maxLength:"20",required:!0,onChange:d})]}),(0,R.jsxs)(W,{children:[(0,R.jsx)(H,{}),(0,R.jsx)($,{value:l,placeholder:"Phone number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",maxLength:"15",required:!0,onChange:d})]}),(0,R.jsx)(O,{type:"submit",children:"Add Contact"})]})})},nn=function(n){return n.filter},en=V.Z.ul(b||(b=(0,P.Z)(["\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1 1 1;\n  justify-content: center;\n  gap: 25px;\n  list-style-type: none;\n  @media screen and (max-width: 767px) {\n    flex-direction: column;\n    align-items: center;\n  }\n  @media screen and (min-width: 768px) {\n    flex-wrap: wrap;\n    flex: 1 1 1;\n  }\n"]))),tn=t(8820),rn=(0,Y.ZP)(tn.YK6)(h||(h=(0,P.Z)(["\n  width: 25px;\n  height: 25px;\n  fill: #fff;\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n    fill: red;\n  }\n  @keyframes btn-animation {\n    0% {\n      transform: scale(1.05);\n    }\n    20% {\n      transform: scale(1.1);\n    }\n    100% {\n      transform: scale(1.13);\n    }\n  }\n  :active {\n    animation: btn-animation 1s ease-out;\n  }\n"]))),an=Y.ZP.li(g||(g=(0,P.Z)(["\n  width: 270px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 5px;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.075);\n  backdrop-filter: blur(20px);\n  animation: slide-in-fwd-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  ","\n\n  @keyframes slide-out-tr {\n    0% {\n      -webkit-transform: translateY(0) translateX(0);\n      transform: translateY(0) translateX(0);\n      opacity: 1;\n    }\n    100% {\n      -webkit-transform: translateY(-1000px) translateX(1000px);\n      transform: translateY(-1000px) translateX(1000px);\n      opacity: 0;\n    }\n  }\n\n  @keyframes slide-in-fwd-right {\n    0% {\n      -webkit-transform: translateZ(-1400px) translateX(1000px);\n      transform: translateZ(-1400px) translateX(1000px);\n      opacity: 0;\n    }\n    100% {\n      -webkit-transform: translateZ(0) translateX(0);\n      transform: translateZ(0) translateX(0);\n      opacity: 1;\n    }\n  }\n"])),(function(n){return!n.isVisible&&"animation: slide-out-tr 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;"})),on=Y.ZP.p(Z||(Z=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: flex-start;\n  font-weight: bold;\n  font-size: 15px;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 5px;\n"]))),sn=Y.ZP.span(y||(y=(0,P.Z)(["\n  color: #fff;\n"]))),ln=Y.ZP.button(v||(v=(0,P.Z)(["\n  background: none;\n  border: none;\n  cursor: pointer;\n"]))),cn=function(n){var e=n.id,t=n.name,r=n.number,a=(0,C.useState)(!0),i=(0,F.Z)(a,2),o=i[0],s=i[1],l=(0,q.I0)();return(0,R.jsxs)(an,{isVisible:o,children:[(0,R.jsxs)(on,{children:[t,": ",(0,R.jsx)(sn,{children:r})]}),(0,R.jsx)(ln,{onClick:function(){return T.Notify.info("\u0421ontact deleted!"),s(!1),l((0,B.GK)(e))},type:"button",children:(0,R.jsx)(rn,{})})]})},dn=function(){var n=(0,q.v9)(nn),e=(0,q.v9)(S);return(0,R.jsx)(en,{children:function(){var t=n.toLocaleLowerCase();return e.filter((function(n){return n.name.toLocaleLowerCase().includes(t)}))}().map((function(n){var e=n.name,t=n.number,r=n.id;return(0,R.jsx)(cn,{name:e,number:t,id:r},r)}))})},pn=(0,V.Z)(E.vVD)(w||(w=(0,P.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  left: 10px;\n  fill: #00000042;\n  top: 33%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  z-index: 100;\n  fill: darkslategrey;\n"]))),fn=V.Z.div(j||(j=(0,P.Z)(["\n  display: flex;\n  gap: 10px;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: bold;\n  font-size: 15px;\n  color: #000;\n  padding-top: 20px;\n"]))),xn=V.Z.div(k||(k=(0,P.Z)(["\n  position: relative;\n"]))),un=V.Z.input(z||(z=(0,P.Z)(["\n  text-indent: 30px;\n  width: 280px;\n  padding: 10px;\n  margin-bottom: 20px;\n  font-size: 16px;\n  border: none;\n  border: 2px solid #000;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    outline 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.01);\n    color: #000;\n    outline: 1px solid #000;\n    border-radius: 5px;\n  }\n"]))),mn=t(1634),bn=function(){var n=(0,q.I0)(),e=(0,q.v9)(nn);return(0,R.jsx)(Q.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:(0,R.jsx)(fn,{children:(0,R.jsxs)(xn,{children:[(0,R.jsx)(pn,{}),(0,R.jsx)(un,{placeholder:"Find contacts by name:",value:e,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(e){return n((0,mn.T)(e.target.value))}})]})})})},hn=t(3342),gn=function(){var n=(0,q.v9)(S),e=(0,q.v9)(K),t=(0,q.I0)();return(0,C.useEffect)((function(){t((0,B.yF)())}),[t]),(0,R.jsxs)(Q.Z,{as:"section",display:"flex",flexDirection:"column",alignItems:"center",height:"100vh",children:[(0,R.jsxs)(_,{children:[(0,R.jsx)(U,{}),(0,R.jsxs)(D,{children:[(0,R.jsx)(A,{"data-glitch":"Contacts:",children:"Contacts:"}),(0,R.jsx)(N,{})]}),(0,R.jsx)(bn,{}),e&&(0,R.jsx)(hn.Z,{}),Boolean(n.length)&&(0,R.jsx)(dn,{})]}),(0,R.jsxs)(Q.Z,{as:"div",display:"flex",alignItems:"center",marginTop:"auto",paddingBottom:"10px",children:[(0,R.jsx)(I,{}),(0,R.jsx)(X,{href:"https://github.com/DimaHavr",children:"DimaHavr"})]})]})}}}]);
//# sourceMappingURL=563.2b20b184.chunk.js.map