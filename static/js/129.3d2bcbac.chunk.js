"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[129],{7129:function(n,e,i){i.r(e),i.d(e,{default:function(){return H}});var t,r,o,l,a,s,c,d,p,x,h,u,f=i(3433),g=i(9439),m=i(2791),b=i(6561),j=i(168),Z=i(6444),v=i(8185),y=Z.ZP.form(t||(t=(0,j.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 18px;\n  margin-left: auto;\n  margin-right: auto;\n  align-items: flex-end;\n  justify-content: center;\n"]))),w=Z.ZP.label(r||(r=(0,j.Z)(["\n  margin-bottom: 8px;\n\n  color: #8a8a89;\n\n  font-size: 14px;\n  line-height: 1.28;\n"]))),P=Z.ZP.div(o||(o=(0,j.Z)(["\n  position: relative;\n  display: inline-flex;\n  flex-direction: column;\n"]))),k=Z.ZP.div(l||(l=(0,j.Z)(["\n  display: flex;\n"]))),C=Z.ZP.select(a||(a=(0,j.Z)(["\n  appearance: none;\n  width: 224px;\n  height: 48px;\n  padding: 0 36px 0 18px;\n\n  border-radius: 14px;\n\n  border: none;\n  outline: none;\n\n  background-color: #f7f7fb;\n\n  font-family: 'Manrope';\n  font-weight: 600;\n\n  cursor: pointer;\n"]))),M=Z.ZP.select(s||(s=(0,j.Z)(["\n  appearance: none;\n  width: 125px;\n  height: 48px;\n  padding: 0 36px 0 18px;\n\n  border-radius: 14px;\n\n  border: none;\n  outline: none;\n\n  background-color: #f7f7fb;\n\n  font-family: 'Manrope';\n  font-weight: 600;\n  font-size: 14px;\n\n  cursor: pointer;\n"]))),z=Z.ZP.div(c||(c=(0,j.Z)(["\n  position: relative;\n"]))),F=Z.ZP.label(d||(d=(0,j.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 24px;\n\n  transform: translateY(-50%);\n\n  font-family: 'Manrope';\n  font-weight: 600;\n  font-size: 14px;\n"]))),S=Z.ZP.input(p||(p=(0,j.Z)(["\n  width: 160px;\n  height: 48px;\n  padding: 14px 24px 14px 0;\n\n  border: none;\n  outline: none;\n  background-color: #f7f7fb;\n  border-right: 1px solid rgba(138, 138, 137, 0.2);\n\n  font-family: 'Manrope';\n  font-weight: 600;\n"]))),E=(0,Z.ZP)(v.IAR)(x||(x=(0,j.Z)(["\n  position: absolute;\n  right: 12px;\n  bottom: 14px;\n\n  width: 16px;\n  height: 16px;\n\n  pointer-events: none;\n"]))),L=Z.ZP.button(h||(h=(0,j.Z)(["\n  display: inline-block;\n  border: none;\n  width: 136px;\n  height: 48px;\n  border-radius: 12px;\n  padding: 0 12px;\n\n  color: #ffffff;\n  background-color: #3470ff;\n\n  transition: background-color 250ms linear;\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),N=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],B=i(184),T=[10,20,30,40,50,60,70,80,90,100,200,300,400,500,600],R=function(n){var e=n.onSubmit,i=(0,m.useState)("without"),t=(0,g.Z)(i,2),r=t[0],o=t[1];return(0,B.jsxs)(y,{children:[(0,B.jsxs)(P,{children:[(0,B.jsx)(w,{htmlFor:"car-select",children:"Car brand"}),(0,B.jsxs)(C,{name:"cars",id:"car-select",onChange:function(n){return o(n.target.value)},children:[(0,B.jsx)("option",{value:"without",children:"All cars"}),N.map((function(n,e){return(0,B.jsx)("option",{value:n,children:n},e)}))]}),(0,B.jsx)(E,{})]}),(0,B.jsxs)(P,{children:[(0,B.jsx)(w,{htmlFor:"price-select",children:"Price/ 1 hour"}),(0,B.jsxs)(M,{name:"price",id:"price-select",children:[(0,B.jsx)("option",{value:"without",children:"To $"}),T.map((function(n,e){return(0,B.jsx)("option",{value:n,children:n},e)}))]}),(0,B.jsx)(E,{})]}),(0,B.jsxs)(P,{children:[(0,B.jsx)(w,{children:"Car mileage / km"}),(0,B.jsxs)(k,{children:[(0,B.jsxs)(z,{children:[(0,B.jsx)(S,{type:"text",name:"mileageFrom",id:"mileageFrom",style:{paddingLeft:"60px",borderRadius:"14px 0 0 14px"}}),(0,B.jsx)(F,{htmlFor:"mileageFrom",children:"From"})]}),(0,B.jsxs)(z,{children:[(0,B.jsx)(S,{type:"text",name:"mileageTo",id:"mileageTo",style:{paddingLeft:"44px",borderRadius:"0 14px 14px 0"}}),(0,B.jsx)(F,{htmlFor:"mileageTo",children:"To"})]})]})]}),(0,B.jsx)(L,{type:"submit",onClick:function(n){return function(n){n.preventDefault(),e(r)}(n)},children:"Search"})]})},A=i(5633),_=Z.ZP.button(u||(u=(0,j.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n\n  border: none;\n  background-color: transparent;\n\n  color: #3470ff;\n  text-decoration: underline;\n\n  transition: color 250ms linear;\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    color: #0b44cd;\n  }\n"]))),I=function(n){var e=n.onClick;return(0,B.jsx)(_,{type:"button",onClick:e,children:"Load more"})},H=function(){var n=(0,m.useState)(1),e=(0,g.Z)(n,2),i=e[0],t=e[1],r=(0,m.useState)([]),o=(0,g.Z)(r,2),l=o[0],a=o[1],s=(0,m.useState)([]),c=(0,g.Z)(s,2),d=c[0],p=c[1],x=(0,m.useState)(!0),h=(0,g.Z)(x,2),u=h[0],j=h[1],Z=(0,m.useState)("without"),v=(0,g.Z)(Z,2),y=v[0],w=v[1],P=(0,b.JB)({page:i,limit:8}).data,k=void 0===P?[]:P,C=(0,b.NJ)({page:i,limit:8,brand:y}).data,M=void 0===C?[]:C;(0,m.useEffect)((function(){if(M&&M.length>0)return p((0,f.Z)(M)),void a([])}),[M,u]),(0,m.useEffect)((function(){if(u)return j(!1);k&&k.length>0&&a((function(n){return[].concat((0,f.Z)(n),(0,f.Z)(k))}))}),[k,u]),(0,m.useEffect)((function(){var n=document.querySelector("ul").lastElementChild;if(l.length>8){var e=n.getBoundingClientRect().height;window.scrollBy({top:1*e,behavior:"smooth"})}}),[l]);var z=0===d.length?l:d,F=k.length>7&&l.length>7;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("h1",{className:"visually-hidden",children:"Catalog"}),(0,B.jsx)(R,{onSubmit:function(n){if("without"===n)return p([]),void a((0,f.Z)(k));t(1),a([]),w(n)}}),(0,B.jsx)(A.Z,{data:z}),F&&(0,B.jsx)(I,{onClick:function(){t((function(n){return n+1}))}})]})}},5633:function(n,e,i){i.d(e,{Z:function(){return yn}});var t,r,o,l,a,s,c,d,p,x,h,u,f,g,m,b,j,Z,v,y,w,P,k,C,M,z,F,S,E,L=i(1413),N=i(9439),B=i(2791),T=i(168),R=i(6444),A=i(8185),_=R.ZP.li(t||(t=(0,T.Z)(["\n  position: relative;\n  display: flex;\n  width: 268px;\n  height: 426px;\n  flex-direction: column;\n  justify-content: space-between;\n\n  padding: 0;\n"]))),I=R.ZP.button(r||(r=(0,T.Z)(["\n  display: inline-flex;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: 10px;\n  right: 10px;\n  justify-content: center;\n  align-items: center;\n\n  border: none;\n  background-color: transparent;\n\n  transition: fill 250ms linear;\n\n  fill: #ffffff;\n\n  cursor: pointer;\n\n  &:hover {\n    fill: #3470ff;\n  }\n"]))),H=(0,R.ZP)(A.ytW)(o||(o=(0,T.Z)(["\n  width: 20px;\n  height: 20px;\n\n  fill: inherit;\n"]))),q=R.ZP.div(l||(l=(0,T.Z)(["\n  position: relative;\n  height: 268px;\n  border-radius: 15px;\n\n  margin-bottom: 14px;\n\n  overflow: hidden;\n"]))),J=R.ZP.img(a||(a=(0,T.Z)(["\n  position: absolute;\n  top: 0;\n  left: -50px;\n  width: 400px;\n  height: auto;\n"]))),U=R.ZP.div(s||(s=(0,T.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  margin-bottom: 8px;\n  font-size: 14px;\n"]))),W=R.ZP.h2(c||(c=(0,T.Z)(["\n  font-size: 14px;\n  line-height: 1.5;\n"]))),Y=R.ZP.span(d||(d=(0,T.Z)(["\n  color: #3470ff;\n"]))),D=R.ZP.p(p||(p=(0,T.Z)(["\n  font-family: 'Manrope';\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.5;\n"]))),G=R.ZP.ul(x||(x=(0,T.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  display: flex;\n  flex-wrap: wrap;\n"]))),K=R.ZP.li(h||(h=(0,T.Z)(["\n  position: relative;\n\n  color: rgba(18, 20, 23, 0.7);\n\n  font-size: 12px;\n\n  &:not(:last-child) {\n    margin-right: 12px;\n  }\n\n  &:not(:last-child)::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: -6px;\n    height: 12px;\n    border: 1px solid rgba(18, 20, 23, 0.2);\n  }\n"]))),Q=R.ZP.button(u||(u=(0,T.Z)(["\n  display: block;\n  border: none;\n  border-radius: 12px;\n  padding: 12px;\n\n  color: #ffffff;\n  background-color: #3470ff;\n\n  transition: background-color 250ms linear;\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),V=i(6561),X=i(7689),$=i(4164),O=R.ZP.div(f||(f=(0,T.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),nn=R.ZP.div(g||(g=(0,T.Z)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),en=i(184),tn=document.querySelector("#modal-root"),rn=function(n){var e=n.closeModal,i=n.children;(0,B.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,$.createPortal)((0,en.jsx)(O,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,en.jsx)(nn,{children:i})}),tn)},on=R.ZP.div(m||(m=(0,T.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  max-width: 540px;\n  height: 100vh;\n  max-height: 700px;\n  gap: 10px;\n  padding: 20px;\n  border-radius: 15px;\n  background-color: #ffffff;\n"]))),ln=R.ZP.button(b||(b=(0,T.Z)(["\n  width: 15px;\n  height: 15px;\n  border: none;\n  background-color: transparent;\n\n  cursor: pointer;\n"]))),an=(0,R.ZP)(A.C7Q)(j||(j=(0,T.Z)(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 15px;\n  height: 15px;\n"]))),sn=R.ZP.div(Z||(Z=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  overflow-y: scroll;\n\n  ::-webkit-scrollbar {\n    background-color: #d8d8d8;\n    width: 4px;\n    border-radius: 12px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #3470ff;\n    border-radius: 12px;\n  }\n"]))),cn=R.ZP.img(v||(v=(0,T.Z)(["\n  display: block;\n  width: 470px;\n  height: auto;\n\n  border-radius: 15px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),dn=R.ZP.h3(y||(y=(0,T.Z)(["\n  font-size: 14px;\n  line-height: 1.5;\n"]))),pn=R.ZP.span(w||(w=(0,T.Z)(["\n  color: #3470ff;\n\n  font-weight: 600;\n"]))),xn=R.ZP.ul(P||(P=(0,T.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 340px;\n"]))),hn=R.ZP.li(k||(k=(0,T.Z)(["\n  position: relative;\n\n  color: rgba(18, 20, 23, 0.5);\n\n  font-size: 12px;\n\n  &:not(:last-child) {\n    margin-right: 12px;\n  }\n\n  &:not(:last-child)::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: -6px;\n    height: 14px;\n    border: 1px solid rgba(18, 20, 23, 0.1);\n  }\n"]))),un=R.ZP.p(C||(C=(0,T.Z)(["\n  max-width: 440px;\n\n  font-family: 'Manrope';\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.42;\n"]))),fn=R.ZP.p(M||(M=(0,T.Z)(["\n  margin-bottom: 8px;\n\n  font-size: 14px;\n  line-height: 1.42;\n"]))),gn=R.ZP.ul(z||(z=(0,T.Z)(["\n  list-style: none;\n  margin: 0;\n  margin-bottom: 24px;\n  padding: 0;\n  gap: 8px;\n\n  display: flex;\n  flex-wrap: wrap;\n"]))),mn=R.ZP.li(F||(F=(0,T.Z)(["\n  padding: 7px 14px;\n  border-radius: 35px;\n\n  font-family: 'Manrope';\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.5;\n\n  background-color: #f9f9f9;\n"]))),bn=R.ZP.a(S||(S=(0,T.Z)(["\n  display: inline-flex;\n  width: 168px;\n  justify-content: center;\n  border: none;\n  border-radius: 12px;\n  padding: 12px;\n\n  color: #ffffff;\n  background-color: #3470ff;\n  text-decoration: none;\n\n  transition: background-color 250ms linear;\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),jn=function(n){var e=n.el,i=n.city,t=n.country,r=n.addComma,o=n.closeModal,l=e.rentalConditions.split("\n");return(0,en.jsxs)(on,{children:[(0,en.jsx)(ln,{type:"button",onClick:o,"aria-label":"Close modal window",children:(0,en.jsx)(an,{})}),(0,en.jsx)(cn,{src:e.img}),(0,en.jsxs)(dn,{children:[e.make," ",(0,en.jsx)(pn,{children:e.model}),", ",e.year]}),(0,en.jsxs)(sn,{children:[(0,en.jsxs)(xn,{children:[(0,en.jsx)(hn,{children:(0,en.jsx)("p",{children:i})}),(0,en.jsx)(hn,{children:(0,en.jsx)("p",{children:t})}),(0,en.jsx)(hn,{children:(0,en.jsxs)("p",{children:["id: ",e.id]})}),(0,en.jsx)(hn,{children:(0,en.jsxs)("p",{children:["Year: ",e.year]})}),(0,en.jsx)(hn,{children:(0,en.jsxs)("p",{children:["Type: ",e.type]})}),(0,en.jsx)(hn,{children:(0,en.jsxs)("p",{children:["Fuel Consumption: ",e.fuelConsumption]})}),(0,en.jsx)(hn,{children:(0,en.jsxs)("p",{children:["Engine Size: ",e.engineSize]})})]}),(0,en.jsx)(un,{children:e.description}),(0,en.jsxs)("div",{children:[(0,en.jsx)(fn,{children:"Accessories and functionalities:"}),(0,en.jsxs)(xn,{children:[e.functionalities.map((function(n,e){return(0,en.jsx)(hn,{children:n},e)})),e.accessories.map((function(n,e){return(0,en.jsx)(hn,{children:n},e)}))]})]}),(0,en.jsxs)("div",{children:[(0,en.jsx)(fn,{children:"Rental Conditions: "}),(0,en.jsxs)(gn,{children:[l.map((function(n,e){var i=function(n){var e=n.split("\n")[0].slice(-2),i=parseInt(e);return Number.isNaN(i)?NaN:i}(n);return(0,en.jsx)(mn,{children:(0,en.jsxs)("p",{children:[n.replace("".concat(i),""),i&&(0,en.jsx)(pn,{children:i})]})},e)})),(0,en.jsx)(mn,{children:(0,en.jsxs)("p",{children:["Milage: ",(0,en.jsx)(pn,{children:r(e.mileage)})]})}),(0,en.jsx)(mn,{children:(0,en.jsxs)("p",{children:["Price: ",(0,en.jsx)(pn,{children:e.rentalPrice})]})})]})]})]}),(0,en.jsx)(bn,{href:"tel:+380730000000",rel:"noopener",children:"Rental car"})]})},Zn=function(n){var e=n.car,i=(0,B.useState)(!1),t=(0,N.Z)(i,2),r=t[0],o=t[1],l=(0,V.X_)().data,a=void 0===l?[]:l,s=(0,V.x4)(),c=(0,N.Z)(s,1)[0],d=(0,V.bu)(),p=(0,N.Z)(d,1)[0],x=(0,X.TH)(),h=a.find((function(n){return n._id===e.id})),u="/favorites"===x.pathname;(0,B.useEffect)((function(){return document.body.style.overflow=r?"hidden":"auto",function(){document.body.style.overflow="auto"}}),[r]);var f=function(){o(!1)},g=function(n){return n.toLocaleString("en-US")},m=e.address.split(","),b=m[1],j=m[2],Z=h||u;return(0,en.jsxs)(en.Fragment,{children:[(0,en.jsxs)(_,{children:[(0,en.jsxs)("div",{children:[(0,en.jsx)(q,{children:(0,en.jsx)(J,{src:e.img,alt:"".concat(e.make," ").concat(e.model)})}),(0,en.jsx)(I,{type:"button",onClick:function(){return n=e,void(u?p(n.id):h?p(h.id):h||c((0,L.Z)((0,L.Z)({},n),{},{_id:n.id})));var n},style:{fill:Z?"#3470ff":"#FFFFFF"},children:(0,en.jsx)(H,{})}),(0,en.jsxs)(U,{children:[(0,en.jsxs)(W,{children:[e.make," ",(0,en.jsx)(Y,{children:e.model}),", ",e.year]}),(0,en.jsx)(D,{children:e.rentalPrice})]}),(0,en.jsxs)(G,{children:[(0,en.jsx)(K,{children:(0,en.jsx)("p",{children:b})}),(0,en.jsx)(K,{children:(0,en.jsx)("p",{children:j})}),(0,en.jsx)(K,{children:(0,en.jsxs)("p",{children:[" ",e.rentalCompany]})}),(0,en.jsx)(K,{children:(0,en.jsx)("p",{children:e.type})}),(0,en.jsx)(K,{children:(0,en.jsx)("p",{children:e.make})}),(0,en.jsx)(K,{children:(0,en.jsx)("p",{children:g(e.mileage)})}),(0,en.jsx)(K,{children:(0,en.jsx)("p",{children:e.accessories[2]})})]})]}),(0,en.jsx)(Q,{type:"button",onClick:function(){o(!0)},children:"Learn more"})]}),r&&(0,en.jsx)(rn,{closeModal:f,children:(0,en.jsx)(jn,{el:e,city:b,country:j,closeModal:f,addComma:g})})]})},vn=R.ZP.ul(E||(E=(0,T.Z)(["\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n  justify-content: center;\n  row-gap: 50px;\n  column-gap: 29px;\n  margin: 0;\n  margin-bottom: 40px;\n  padding: 20px 0 0 0;\n\n  list-style: none;\n"]))),yn=function(n){var e=n.data;return(0,en.jsx)(vn,{className:"CarsList",children:e&&e.map((function(n){return(0,en.jsx)(Zn,{car:n},n.id)}))})}}}]);
//# sourceMappingURL=129.3d2bcbac.chunk.js.map