(this.webpackJsonpvinculobjetivo=this.webpackJsonpvinculobjetivo||[]).push([[5],{158:function(n,e,t){"use strict";var r,o,c=t(8),a=(t(0),t(5)),i=t(1),d=a.c.div(r||(r=Object(c.a)(["\n  margin: 15px auto 0px auto;\n  text-align: center;\n  width: 100%;\n  position: absolute;\n  bottom: 15px;\n"]))),u=a.c.span(o||(o=Object(c.a)(["\n  text-align: center;\n  color: ",";\n  font-size: 2em;\n  font-weight: 600;\n  background-color: ",";\n  border-radius: 3px;\n  padding: 5px;\n\n  &.disabled {\n    background-color: gray;\n  }\n"])),(function(n){return n.badge.fg}),(function(n){return n.badge.bg}));e.a=function(n){return Object(i.jsx)(d,{children:Object(i.jsxs)(u,{className:n.sold?"disabled":"",badge:n.badge,children:[n.price,"\u20ac"]})})}},159:function(n,e,t){"use strict";var r,o=t(8),c=(t(0),t(5)),a=t(1),i=c.c.div(r||(r=Object(o.a)(["\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n  margin-bottom: 70px;\n"])));e.a=function(n){return Object(a.jsxs)(i,{children:[Object(a.jsx)("i",{className:"fas fa-calendar-alt mr-2 ml-2"}),n.year,Object(a.jsx)("i",{className:"fas fa-road mr-2 ml-2"}),n.mileage.value," ",n.mileage.description,Object(a.jsx)("i",{className:"fas fa-gas-pump mr-2 ml-2"}),n.fuelType]})}},160:function(n,e,t){"use strict";t.d(e,"c",(function(){return b})),t.d(e,"b",(function(){return l})),t.d(e,"a",(function(){return g})),t.d(e,"d",(function(){return m}));var r,o,c,a,i,d=t(8),u=t(5),s=Object(u.d)(r||(r=Object(d.a)(["\n  0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]))),b=u.c.div(o||(o=Object(d.a)(["\n  background: linear-gradient(\n    -45deg,\n    ",",\n    ",",\n    ",",\n    ","\n  );\n  background-size: 400% 400%;\n  animation: "," 15s ease infinite;\n  width: 100%;\n  height: 100%;\n"])),(function(n){return n.theme.card.bgColor}),(function(n){return n.theme.card.bgHover}),(function(n){return n.theme.card.borderColor}),(function(n){return n.theme.card.borderHover}),s),l=u.c.h4(c||(c=Object(d.a)(["\n  text-align: center;\n  margin-top: 10px;\n  color: ",";\n"])),(function(n){return n.theme.primaryText})),g=u.c.div(a||(a=Object(d.a)(["\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  transition: 0.3s;\n\n  border: 3px solid ",";\n  border-radius: 10px;\n\n  background-color: ",";\n  color: ",";\n\n  & img {\n    background: linear-gradient(\n      -45deg,\n      ",",\n      ",",\n      ",",\n      ","\n    );\n    background-size: 400% 400%;\n    animation: "," 15s ease infinite;\n    display: block;\n    margin: 0 auto;\n    width: 100%;\n  }\n\n  & .bw {\n    filter: grayscale(100%);\n  }\n\n  &:hover {\n    background-color: ",";\n    border: 3px solid ",";\n    color: ",";\n\n    "," {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.card.borderColor}),(function(n){return n.theme.card.bgColor}),(function(n){return n.theme.primaryText}),(function(n){return n.theme.card.bgColor}),(function(n){return n.theme.card.bgHover}),(function(n){return n.theme.card.borderColor}),(function(n){return n.theme.card.borderHover}),s,(function(n){return n.theme.card.bgHover}),(function(n){return n.theme.card.borderHover}),(function(n){return n.theme.card.secundaryTextHover}),l,(function(n){return n.theme.card.primaryTextHover})),m=u.c.div(i||(i=Object(d.a)(["\n  margin: 0 auto;\n  background-color: ",";\n  border-bottom: 1px solid white;\n  color: ",";\n  text-align: center;\n"])),(function(n){return n.theme.card.soldBadgeBg}),(function(n){return n.theme.card.soldBadgeFg}))},239:function(n,e,t){"use strict";t.r(e);var r=t(35),o=t(0),c=t(9),a=t(5),i=t(158),d=t(159),u=t(160),s=t(1);e.default=function(n){var e=Object(o.useState)(!0),t=Object(r.a)(e,2),b=t[0],l=t[1],g=n.car,m=g.title,f=g.price,h=g.id,j=g.sold,p=g.attributes.kms,x=g.attributes.year.value,v=g.attributes.fuelType.value,O="/img/".concat(h,"/thumbnail.webp"),k=Object(c.g)();return Object(s.jsx)(a.a,{theme:n.theme.card,children:Object(s.jsxs)(u.a,{onClick:function(){return k.push("/carro/".concat(h))},children:[b&&Object(s.jsx)(u.c,{}),Object(s.jsx)("img",{src:O,alt:"car",className:"".concat(j?"bw":""),onLoad:function(){l(!1)}}),Object(s.jsx)(u.d,{hidden:!j,children:Object(s.jsx)("strong",{children:"Vendido"})}),Object(s.jsx)(u.b,{className:"ml-1 mr-1",children:m}),Object(s.jsx)(d.a,{year:x,mileage:p,fuelType:v}),Object(s.jsx)(i.a,{badge:n.theme.badge,price:f,sold:j})]})})}}}]);
//# sourceMappingURL=5.890205d7.chunk.js.map