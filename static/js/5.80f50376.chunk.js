(this.webpackJsonpvinculobjetivo=this.webpackJsonpvinculobjetivo||[]).push([[5],{141:function(n,e,t){"use strict";var r,o,a=t(8),c=(t(0),t(6)),i=t(1),u=c.c.div(r||(r=Object(a.a)(["\n  margin: 15px auto 0px auto;\n  text-align: center;\n  width: 100%;\n  position: absolute;\n  bottom: 15px;\n"]))),d=c.c.span(o||(o=Object(a.a)(["\n  text-align: center;\n  color: ",";\n  font-size: 2em;\n  font-weight: 600;\n  background-color: ",";\n  border-radius: 3px;\n  padding: 5px;\n"])),(function(n){return n.badge.fg}),(function(n){return n.badge.bg}));e.a=function(n){return Object(i.jsx)(u,{children:Object(i.jsxs)(d,{badge:n.badge,children:[n.price,"\u20ac"]})})}},142:function(n,e,t){"use strict";var r,o=t(8),a=(t(0),t(6)),c=t(1),i=a.c.div(r||(r=Object(o.a)(["\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n  margin-bottom: 70px;\n"])));e.a=function(n){return Object(c.jsxs)(i,{children:[Object(c.jsx)("i",{className:"fas fa-calendar-alt mr-2 ml-2"}),n.year,Object(c.jsx)("i",{className:"fas fa-road mr-2 ml-2"}),n.mileage.value," ",n.mileage.description,Object(c.jsx)("i",{className:"fas fa-gas-pump mr-2 ml-2"}),n.fuelType]})}},143:function(n,e,t){"use strict";t.d(e,"c",(function(){return s})),t.d(e,"b",(function(){return l})),t.d(e,"a",(function(){return m})),t.d(e,"d",(function(){return f}));var r,o,a,c,i,u=t(8),d=t(6),b=Object(d.d)(r||(r=Object(u.a)(["\n  0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]))),s=d.c.div(o||(o=Object(u.a)(["\n  background: linear-gradient(\n    -45deg,\n    ",",\n    ",",\n    ",",\n    ","\n  );\n  background-size: 400% 400%;\n  animation: "," 15s ease infinite;\n  width: 100%;\n  height: 100%;\n"])),(function(n){return n.theme.card.bgColor}),(function(n){return n.theme.card.bgHover}),(function(n){return n.theme.card.borderColor}),(function(n){return n.theme.card.borderHover}),b),l=d.c.h4(a||(a=Object(u.a)(["\n  text-align: center;\n  margin-top: 10px;\n  color: ",";\n"])),(function(n){return n.theme.primaryText})),m=d.c.div(c||(c=Object(u.a)(["\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  transition: 0.3s;\n\n  border: 3px solid ",";\n  border-radius: 10px;\n\n  background-color: ",";\n  color: ",";\n\n  & img {\n    background: linear-gradient(\n      -45deg,\n      ",",\n      ",",\n      ",",\n      ","\n    );\n    background-size: 400% 400%;\n    animation: "," 15s ease infinite;\n    display: block;\n    margin: 0 auto;\n    width: 100%;\n  }\n\n  & .bw {\n    filter: grayscale(100%);\n  }\n\n  &:hover {\n    background-color: ",";\n    border: 3px solid ",";\n    color: ",";\n\n    "," {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.card.borderColor}),(function(n){return n.theme.card.bgColor}),(function(n){return n.theme.primaryText}),(function(n){return n.theme.card.bgColor}),(function(n){return n.theme.card.bgHover}),(function(n){return n.theme.card.borderColor}),(function(n){return n.theme.card.borderHover}),b,(function(n){return n.theme.card.bgHover}),(function(n){return n.theme.card.borderHover}),(function(n){return n.theme.card.secundaryTextHover}),l,(function(n){return n.theme.card.primaryTextHover})),f=d.c.div(i||(i=Object(u.a)(["\n  margin: 0 auto;\n  background-color: ",";\n  border-bottom: 1px solid white;\n  color: ",";\n  text-align: center;\n"])),(function(n){return n.theme.card.soldBadgeBg}),(function(n){return n.theme.card.soldBadgeFg}))},229:function(n,e,t){"use strict";t.r(e);var r=t(36);function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],r=!0,o=!1,a=void 0;try{for(var c,i=n[Symbol.iterator]();!(r=(c=i.next()).done)&&(t.push(c.value),!e||t.length!==e);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return t}}(n,e)||Object(r.a)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=t(0),c=t(9),i=t(6),u=t(141),d=t(142),b=t(143),s=t(1);e.default=function(n){var e=o(Object(a.useState)(!0),2),t=e[0],r=e[1],l=n.car,m=l.title,f=l.price,g=l.id,h=l.sold,j=l.attributes.kms,p=l.attributes.year.value,x=l.attributes.fuelType.value,v="/img/".concat(g,"/thumbnail.webp"),O=Object(c.g)();return Object(s.jsx)(i.a,{theme:n.theme.card,children:Object(s.jsxs)(b.a,{onClick:function(){return O.push("/carro/".concat(g))},children:[t&&Object(s.jsx)(b.c,{}),Object(s.jsx)("img",{src:v,alt:"car",className:"".concat(h?"bw":""),onLoad:function(){r(!1)}}),Object(s.jsx)(b.d,{hidden:!h,children:Object(s.jsx)("strong",{children:"Vendido"})}),Object(s.jsx)(b.b,{className:"ml-1 mr-1",children:m}),Object(s.jsx)(d.a,{year:p,mileage:j,fuelType:x}),Object(s.jsx)(u.a,{badge:n.theme.badge,price:f})]})})}}}]);
//# sourceMappingURL=5.80f50376.chunk.js.map