(this.webpackJsonpvinculobjetivo=this.webpackJsonpvinculobjetivo||[]).push([[9],{214:function(e,t,n){"use strict";n.r(t);var r,a=n(5),o=n(4),c=n(8),s=n.n(c),l=n(16),i=n(50),m=n(3),u=n(11),b=n(1),d=n(18),j=n(17),h=n.n(j),v=function(e,t,n,r,a){var o=Object(b.useState)({subject:a,mobile:"",name:"",email:"",text:""}),c=Object(u.a)(o,2),j=c[0],v=c[1],f=Object(b.useState)({}),O=Object(u.a)(f,2),x=O[0],p=O[1],g=Object(b.useState)(!1),N=Object(u.a)(g,2),C=N[0],y=N[1],k=Object(b.useState)(!1),w=Object(u.a)(k,2),S=w[0],F=w[1],A=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("".concat(d.a,"/messages/send"),j);case 2:v((function(e){return{subject:a,mobile:"",name:"",email:"",text:""}}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{handleChange:function(e){var t=e.target,a=t.name,o=t.value;v((function(e){var t=Object(m.a)(Object(m.a)({},j),{},Object(i.a)({},a,o));return"email"!==a&&"mobile"!==a||y(!n(t.email)&&!r(t.mobile)),t}))},handleSubmit:function(n){n.preventDefault(),F(!0);var r=t(j);if(p(r),y(Object.keys(r).includes("no_contacts")),0===Object.keys(r).length)try{A(),F(!1),e.success("A sua mensagem foi enviada. Obrigado!")}catch(a){e.error("Ocorreu um erro ao enviar a sua mensagem. Por favor tente mais tarde."),F(!1)}else F(!1)},values:j,errors:x,isSubmitting:S,emptyContacts:C}},f=n(13),O=n(0),x=o.c.div(r||(r=Object(a.a)(["\n  background-color: ",";\n  border-color: ",";\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n  }\n\n  &.disabled {\n    background-color: gray;\n    border-color: gray;\n    cursor: not-allowed;\n  }\n"])),(function(e){return e.theme.filters.buttonBgColor}),(function(e){return e.theme.filters.buttonBgColor}),(function(e){return e.theme.filters.buttonFgColor}),(function(e){return e.theme.filters.activeBgColor}),(function(e){return e.theme.filters.activeBgColor}),(function(e){return e.theme.filters.activeFgColor})),p=function(e){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)},g=function(e){return/^\d{9}$/.test(e)||/^\+\d{12}$/.test(e)},N=function(e){var t={};return p(e.email)||""!==e.mobile||(t.no_contacts="Nenhum contacto foi preenchido."),""===e.name&&(t.name="Por favor, indique o seu nome"),""===e.text&&(t.text="Coloque aqui as suas d\xfavidas ou quest\xf5es"),t},C=function(e,t){if(Object.keys(e).includes(t))return Object(O.jsx)("small",{style:{color:"red"},children:e[t]})};t.default=function(e){var t=v(f.c,N,p,g,e.subject),n=t.handleChange,r=t.handleSubmit,a=t.values,c=t.errors,s=t.isSubmitting,l=t.emptyContacts;return Object(O.jsx)(o.a,{theme:e.theme,children:Object(O.jsx)("div",{className:"row ml-lg-5 mr-lg-5 ml-sm-2 mr-sm-2 ml-1 mr-1",children:Object(O.jsxs)("div",{className:"col-12 col-lg-9 mt-5",children:[Object(O.jsx)("h4",{children:"Tem alguma d\xfavida?"}),Object(O.jsxs)("form",{children:[Object(O.jsx)("div",{className:"form-group",children:Object(O.jsxs)("div",{className:"form-row",children:[Object(O.jsxs)("div",{className:"col",children:[Object(O.jsx)("label",{htmlFor:"subject",children:"Assunto"}),Object(O.jsx)("input",{value:a.subject,onChange:n,type:"text",name:"subject",id:"subject",className:"form-control"})]}),Object(O.jsxs)("div",{className:"col",children:[Object(O.jsx)("label",{htmlFor:"mobile",children:"Contacto"}),Object(O.jsx)("input",{value:a.mobile,onChange:n,placeholder:"Contacto",type:"text",name:"mobile",id:"mobile",className:"form-control"})]})]})}),Object(O.jsxs)("div",{className:"form-row",children:[Object(O.jsxs)("div",{className:"form-group col-md-6",children:[Object(O.jsx)("label",{htmlFor:"name",children:"Nome"}),Object(O.jsx)("input",{value:a.name,onChange:n,type:"text",className:"form-control",name:"name",placeholder:"Nome"}),C(c,"name")]}),Object(O.jsxs)("div",{className:"form-group col-md-6",children:[Object(O.jsx)("label",{htmlFor:"email",children:"Email"}),Object(O.jsx)("input",{value:a.email,onChange:n,type:"email",className:"form-control",name:"email",placeholder:"Email"})]})]}),Object(O.jsx)("div",{className:"form-row",children:Object(O.jsxs)("div",{className:"form-group col-12",children:[Object(O.jsx)("label",{htmlFor:"text",children:"Mensagem"}),Object(O.jsx)("textarea",{value:a.text,onChange:n,type:"text",className:"form-control",name:"text",placeholder:"Pedido de informa\xe7\xf5es"}),C(c,"text"),Object(O.jsx)("div",{className:"alert alert-danger",role:"alert",hidden:!l,children:"Se n\xe3o preencher um contacto de e-mail ou m\xf3vel v\xe1lido, n\xe3o ser\xe1 poss\xedvel contact\xe1-lo de volta."})]})}),Object(O.jsx)("div",{className:"form-group"}),Object(O.jsx)(x,{className:"btn btn-primary mb-5 ".concat(s?"disabled":""),onClick:r,disabled:!0,children:s?Object(O.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):"Enviar"}),C(c,"server")]})]})})})}}}]);
//# sourceMappingURL=9.e7d56c75.chunk.js.map