"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[120],{120:function(n,e,i){i.r(e);var t=i(433),r=i(439),o=i(791),l=i(515),c=i(631),s=i(827),d=i(184);e.default=function(){var n=(0,o.useState)(1),e=(0,r.Z)(n,2),i=e[0],a=e[1],x=(0,l.JB)({page:i,limit:8}).data,p=void 0===x?[]:x,h=(0,o.useState)([]),f=(0,r.Z)(h,2),u=f[0],g=f[1],m=(0,o.useState)(!0),j=(0,r.Z)(m,2),Z=j[0],b=j[1];(0,o.useEffect)((function(){if(Z)return b(!1);p&&p.length>0&&g((function(n){return[].concat((0,t.Z)(n),(0,t.Z)(p))}))}),[p,Z]);return(0,o.useEffect)((function(){var n=document.querySelector("ul").lastElementChild;if(u.length>8){var e=n.getBoundingClientRect().height;window.scrollBy({top:1*e,behavior:"smooth"})}}),[u]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h1",{children:"Catalog"}),(0,d.jsx)(c.Z,{data:u}),p.length>7&&(0,d.jsx)(s.Z,{onClick:function(){a((function(n){return n+1}))}})]})}},631:function(n,e,i){i.d(e,{Z:function(){return mn}});var t,r,o,l,c,s,d,a,x,p,h,f,u,g,m,j,Z,b,y,w,v,k,P,C,S,z,E,L=i(433),M=i(439),B=i(791),F=i(168),R=i(444),q=i(185),T=R.ZP.li(t||(t=(0,F.Z)(["\n  position: relative;\n  display: flex;\n  max-width: 268px;\n  height: 380px;\n  flex-direction: column;\n  justify-content: space-between;\n\n  padding: 0;\n"]))),_=R.ZP.button(r||(r=(0,F.Z)(["\n  display: inline-flex;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: 10px;\n  right: 10px;\n  justify-content: center;\n  align-items: center;\n\n  border: none;\n  background-color: transparent;\n\n  transition: fill 250ms linear;\n\n  cursor: pointer;\n\n  fill: #ffffff;\n\n  &:hover,\n  &:focus {\n    fill: #3470ff;\n  }\n"]))),A=(0,R.ZP)(q.ytW)(o||(o=(0,F.Z)(["\n  width: 20px;\n  height: 20px;\n  /* fill: inherit; */\n"]))),J=R.ZP.div(l||(l=(0,F.Z)(["\n  height: 100%;\n  max-height: 200px;\n  border-radius: 15px;\n\n  margin-bottom: 14px;\n\n  overflow: hidden;\n"]))),N=R.ZP.div(c||(c=(0,F.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  margin-bottom: 8px;\n  font-size: 14px;\n"]))),Q=R.ZP.h2(s||(s=(0,F.Z)(["\n  font-size: 14px;\n  line-height: 1.5;\n  font-weight: 500;\n"]))),U=R.ZP.span(d||(d=(0,F.Z)(["\n  color: #3470ff;\n"]))),W=R.ZP.ul(a||(a=(0,F.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  display: flex;\n  flex-wrap: wrap;\n"]))),Y=R.ZP.li(x||(x=(0,F.Z)(["\n  position: relative;\n\n  color: rgba(18, 20, 23, 0.5);\n\n  font-size: 12px;\n\n  &:not(:last-child) {\n    margin-right: 12px;\n  }\n\n  &:not(:last-child)::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: -6px;\n    height: 14px;\n    border: 1px solid rgba(18, 20, 23, 0.1);\n  }\n"]))),D=R.ZP.button(p||(p=(0,F.Z)(["\n  display: block;\n  border: none;\n  border-radius: 12px;\n  padding: 12px;\n\n  color: #ffffff;\n  background-color: #3470ff;\n\n  transition: background-color 250ms linear;\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),G=i(164),H=R.ZP.div(h||(h=(0,F.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),I=R.ZP.div(f||(f=(0,F.Z)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),K=i(184),O=document.querySelector("#modal-root"),V=function(n){var e=n.closeModal,i=n.children;(0,B.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,G.createPortal)((0,K.jsx)(H,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,K.jsx)(I,{children:i})}),O)},X=R.ZP.div(u||(u=(0,F.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  max-width: 540px;\n  height: 100vh;\n  max-height: 700px;\n  gap: 10px;\n  padding: 20px;\n  border-radius: 15px;\n  background-color: #ffffff;\n"]))),$=R.ZP.button(g||(g=(0,F.Z)(["\n  width: 15px;\n  height: 15px;\n  border: none;\n  background-color: transparent;\n\n  cursor: pointer;\n"]))),nn=(0,R.ZP)(q.C7Q)(m||(m=(0,F.Z)(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 15px;\n  height: 15px;\n"]))),en=R.ZP.div(j||(j=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  /* overflow-y: scroll;\n\n  ::-webkit-scrollbar {\n    background-color: #d8d8d8;\n    width: 4px;\n    border-radius: 12px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #3470ff;\n    border-radius: 12px;\n  } */\n"]))),tn=R.ZP.img(Z||(Z=(0,F.Z)(["\n  display: block;\n  max-width: 320px;\n  max-height: 220px;\n\n  border-radius: 15px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),rn=R.ZP.h3(b||(b=(0,F.Z)(["\n  font-size: 14px;\n  line-height: 1.5;\n  font-weight: 500;\n"]))),on=R.ZP.span(y||(y=(0,F.Z)(["\n  color: #3470ff;\n"]))),ln=R.ZP.ul(w||(w=(0,F.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 340px;\n"]))),cn=R.ZP.li(v||(v=(0,F.Z)(["\n  position: relative;\n\n  color: rgba(18, 20, 23, 0.5);\n\n  font-size: 12px;\n\n  &:not(:last-child) {\n    margin-right: 12px;\n  }\n\n  &:not(:last-child)::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: -6px;\n    height: 14px;\n    border: 1px solid rgba(18, 20, 23, 0.1);\n  }\n"]))),sn=R.ZP.p(k||(k=(0,F.Z)(["\n  max-width: 440px;\n\n  font-size: 14px;\n  line-height: 1.42;\n"]))),dn=R.ZP.p(P||(P=(0,F.Z)(["\n  margin-bottom: 8px;\n\n  font-size: 14px;\n  line-height: 1.42;\n"]))),an=R.ZP.ul(C||(C=(0,F.Z)(["\n  list-style: none;\n  margin: 0;\n  margin-bottom: 24px;\n  padding: 0;\n  gap: 8px;\n\n  display: flex;\n  flex-wrap: wrap;\n"]))),xn=R.ZP.li(S||(S=(0,F.Z)(["\n  padding: 7px 14px;\n  border-radius: 35px;\n\n  font-size: 12px;\n  line-height: 1.5;\n\n  background-color: #f9f9f9;\n"]))),pn=R.ZP.a(z||(z=(0,F.Z)(["\n  display: inline-flex;\n  width: 168px;\n  justify-content: center;\n  border: none;\n  border-radius: 12px;\n  padding: 12px;\n\n  color: #ffffff;\n  background-color: #3470ff;\n  text-decoration: none;\n\n  transition: background-color 250ms linear;\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),hn=function(n){var e=n.el,i=n.city,t=n.country,r=n.addComma,o=n.closeModal,l=e.rentalConditions.split("\n");return(0,K.jsxs)(X,{children:[(0,K.jsx)($,{type:"button",onClick:o,"aria-label":"Close modal window",children:(0,K.jsx)(nn,{})}),(0,K.jsx)(tn,{src:e.img}),(0,K.jsxs)(rn,{children:[e.make," ",(0,K.jsx)(on,{children:e.model}),", ",e.year]}),(0,K.jsxs)(en,{children:[(0,K.jsxs)(ln,{children:[(0,K.jsx)(cn,{children:(0,K.jsx)("p",{children:i})}),(0,K.jsx)(cn,{children:(0,K.jsx)("p",{children:t})}),(0,K.jsx)(cn,{children:(0,K.jsxs)("p",{children:["id: ",e.id]})}),(0,K.jsx)(cn,{children:(0,K.jsxs)("p",{children:["Year: ",e.year]})}),(0,K.jsx)(cn,{children:(0,K.jsxs)("p",{children:["Type: ",e.type]})}),(0,K.jsx)(cn,{children:(0,K.jsxs)("p",{children:["Fuel Consumption: ",e.fuelConsumption]})}),(0,K.jsx)(cn,{children:(0,K.jsxs)("p",{children:["Engine Size: ",e.engineSize]})})]}),(0,K.jsx)(sn,{children:e.description}),(0,K.jsxs)("div",{children:[(0,K.jsx)(dn,{children:"Accessories and functionalities:"}),(0,K.jsxs)(ln,{children:[e.functionalities.map((function(n,e){return(0,K.jsx)(cn,{children:n},e)})),e.accessories.map((function(n,e){return(0,K.jsx)(cn,{children:n},e)}))]})]}),(0,K.jsxs)("div",{children:[(0,K.jsx)(dn,{children:"Rental Conditions: "}),(0,K.jsxs)(an,{children:[l.map((function(n,e){return(0,K.jsx)(xn,{children:(0,K.jsx)("p",{children:n})},e)})),(0,K.jsx)(xn,{children:(0,K.jsxs)("p",{children:["Milage: ",r(e.mileage)]})}),(0,K.jsx)(xn,{children:(0,K.jsxs)("p",{children:["Price: ",e.rentalPrice]})})]})]})]}),(0,K.jsx)(pn,{href:"tel:+380730000000",children:"Rental car"})]})},fn=i(515),un=function(n){var e=n.el,i=(0,B.useState)(!1),t=(0,M.Z)(i,2),r=t[0],o=t[1],l=(0,B.useState)([]),c=(0,M.Z)(l,2),s=c[0],d=c[1],a=(0,B.useState)(!0),x=(0,M.Z)(a,2),p=x[0],h=x[1],f=(0,fn.sd)().data,u=void 0===f?[]:f,g=(0,fn.x4)(),m=(0,M.Z)(g,1)[0],j=(0,fn.bu)(),Z=(0,M.Z)(j,1)[0],b=u.some((function(n){return n.img===e.img}));console.log(s),(0,B.useEffect)((function(){if(p)return h(!1);u&&u.length>0&&d((function(n){return[].concat((0,L.Z)(n),(0,L.Z)(u))}))}),[u,p]),(0,B.useEffect)((function(){return document.body.style.overflow=r?"hidden":"auto",function(){document.body.style.overflow="auto"}}),[r]);var y=function(){o(!1)},w=function(n){return n.toLocaleString("en-US")},v=e.address.split(","),k=v[1],P=v[2];return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(T,{children:[(0,K.jsxs)("div",{children:[(0,K.jsx)(J,{children:(0,K.jsx)("img",{src:e.img,alt:"".concat(e.make," ").concat(e.model)})}),(0,K.jsx)(_,{type:"button",onClick:function(){return function(n){b?Z(n.id):b||m(n)}(e)},children:(0,K.jsx)(A,{fill:b?"#3470ff":"#ffffff"})}),(0,K.jsxs)(N,{children:[(0,K.jsxs)(Q,{children:[e.make," ",(0,K.jsx)(U,{children:e.model}),", ",e.year]}),(0,K.jsx)("p",{children:e.rentalPrice})]}),(0,K.jsxs)(W,{children:[(0,K.jsx)(Y,{children:(0,K.jsx)("p",{children:k})}),(0,K.jsx)(Y,{children:(0,K.jsx)("p",{children:P})}),(0,K.jsx)(Y,{children:(0,K.jsxs)("p",{children:[" ",e.rentalCompany]})}),(0,K.jsx)(Y,{children:(0,K.jsx)("p",{children:e.type})}),(0,K.jsx)(Y,{children:(0,K.jsx)("p",{children:e.make})}),(0,K.jsx)(Y,{children:(0,K.jsx)("p",{children:w(e.mileage)})}),(0,K.jsx)(Y,{children:(0,K.jsx)("p",{children:e.accessories[2]})})]})]}),(0,K.jsx)(D,{type:"button",onClick:function(){o(!0)},children:"Learn more"})]}),r&&(0,K.jsx)(V,{closeModal:y,children:(0,K.jsx)(hn,{el:e,city:k,country:P,closeModal:y,addComma:w})})]})},gn=R.ZP.ul(E||(E=(0,F.Z)(["\n  list-style: none;\n  margin: 0;\n  margin-bottom: 40px;\n  padding: 20px 128px 0 128px;\n\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n"]))),mn=function(n){var e=n.data;return(0,K.jsx)(gn,{className:"CarsList",children:e&&e.map((function(n){return(0,K.jsx)(un,{el:n},n.id)}))})}},827:function(n,e,i){i.d(e,{Z:function(){return c}});var t,r=i(168),o=i(444).ZP.button(t||(t=(0,r.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n\n  border: none;\n  background-color: transparent;\n\n  color: #3470ff;\n  text-decoration: underline;\n\n  transition: color 250ms linear;\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    color: #0b44cd;\n  }\n"]))),l=i(184),c=function(n){var e=n.onClick;return(0,l.jsx)(o,{type:"button",onClick:e,children:"Load more"})}}}]);
//# sourceMappingURL=120.907d1d67.chunk.js.map