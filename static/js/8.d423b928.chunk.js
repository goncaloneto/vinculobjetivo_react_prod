(this.webpackJsonpvinculobjetivo=this.webpackJsonpvinculobjetivo||[]).push([[8],{241:function(e,t,s){"use strict";s.r(t);var a,n=s(13),r=s.n(n),o=s(26),c=s(7),l=s(20),i=s(21),m=s(23),d=s(22),u=s(8),b=s(0),h=s(6),j=s(27),g=s.n(j),p=s(49),v=s(28),x=s(1),O=h.c.div(a||(a=Object(u.a)(["\n  background-color: ",";\n  border-color: ",";\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n  }\n\n  &.disabled {\n    background-color: gray;\n    border-color: gray;\n    cursor: not-allowed;\n  }\n"])),(function(e){return e.theme.filters.buttonBgColor}),(function(e){return e.theme.filters.buttonBgColor}),(function(e){return e.theme.filters.buttonFgColor}),(function(e){return e.theme.filters.activeBgColor}),(function(e){return e.theme.filters.activeBgColor}),(function(e){return e.theme.filters.activeFgColor})),f=function(e){Object(m.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={message:{subject:"",mobile:"",name:"",email:"",text:""},emptyContacts:!1,sendingMessage:!1},e.handleChange=function(t){var s=t.currentTarget,a=Object(c.a)({},e.state.message);a[s.name]=s.value,e.setState({message:a})},e.setSending=function(t){e.setState({sendingMessage:t})},e.sendMessage=Object(o.a)(r.a.mark((function t(){var s,a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.sendingMessage){t.next=2;break}return t.abrupt("return");case 2:if(""!==(s=e.state.message).mobile||""!==s.email){t.next=6;break}return e.setState({sendingMessage:!1,emptyContacts:!0}),t.abrupt("return");case 6:return a={position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0},t.prev=7,t.next=10,g.a.post("".concat(v.a,"/messages/send"),e.state.message);case 10:p.b.success("A sua mensagem foi enviada com sucesso!",a),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(7),p.b.error("Erro ao enviar mensagem. Por favor tente novamente mais tarde ou contacte-nos diretamente.",a);case 16:(n=Object(c.a)({},e.state.message)).name="",n.mobile="",n.email="",n.text="",e.setState({message:n,sendingMessage:!1,emptyContacts:!1});case 22:case"end":return t.stop()}}),t,null,[[7,13]])}))),e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var e=Object(c.a)({},this.state.message);e.subject=this.props.subject,this.setState({message:e})}},{key:"render",value:function(){var e=this,t=this.state,s=t.message,a=t.sendingMessage,n=t.emptyContacts;return Object(x.jsxs)(h.a,{theme:this.props.theme,children:[Object(x.jsx)(p.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(x.jsx)("div",{className:"row ml-lg-5 mr-lg-5 ml-sm-2 mr-sm-2 ml-1 mr-1",children:Object(x.jsxs)("div",{className:"col-12 col-lg-9 mt-5",children:[Object(x.jsx)("h4",{children:"Tem alguma d\xfavida?"}),Object(x.jsxs)("form",{children:[Object(x.jsx)("div",{className:"form-group",children:Object(x.jsxs)("div",{className:"form-row",children:[Object(x.jsxs)("div",{className:"col",children:[Object(x.jsx)("label",{htmlFor:"subject",children:"Assunto"}),Object(x.jsx)("input",{value:s.subject,onChange:this.handleChange,type:"text",name:"subject",id:"subject",className:"form-control"})]}),Object(x.jsxs)("div",{className:"col",children:[Object(x.jsx)("label",{htmlFor:"mobile",children:"Contacto"}),Object(x.jsx)("input",{value:s.mobile,onChange:this.handleChange,placeholder:"Contacto",type:"text",name:"mobile",id:"mobile",className:"form-control"})]})]})}),Object(x.jsxs)("div",{className:"form-row",children:[Object(x.jsxs)("div",{className:"form-group col-md-6",children:[Object(x.jsx)("label",{htmlFor:"name",children:"Nome"}),Object(x.jsx)("input",{value:s.name,onChange:this.handleChange,type:"text",className:"form-control",name:"name",placeholder:"Nome"})]}),Object(x.jsxs)("div",{className:"form-group col-md-6",children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email"}),Object(x.jsx)("input",{value:s.email,onChange:this.handleChange,type:"email",className:"form-control",name:"email",placeholder:"Email"})]})]}),Object(x.jsx)("div",{className:"form-row",children:Object(x.jsxs)("div",{className:"form-group col-12",children:[Object(x.jsx)("label",{htmlFor:"text",children:"Mensagem"}),Object(x.jsx)("textarea",{value:s.text,onChange:this.handleChange,type:"text",className:"form-control",name:"text",placeholder:"Pedido de informa\xe7\xf5es"}),Object(x.jsx)("div",{class:"alert alert-danger",role:"alert",hidden:!n,children:"Se n\xe3o preencher um contacto de e-mail ou m\xf3vel, n\xe3o ser\xe1 poss\xedvel contact\xe1-lo de volta."})]})}),Object(x.jsx)("div",{className:"form-group"}),Object(x.jsx)(O,{className:"btn btn-primary mb-5 ".concat(a?"disabled":""),onClick:function(){e.setSending(!0),e.sendMessage()},disabled:!0,children:a?Object(x.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):"Enviar"}),this.state.messageStatus&&Object(x.jsx)("small",{children:this.state.messageStatus})]})]})})]})}}]),s}(b.Component);t.default=f}}]);
//# sourceMappingURL=8.d423b928.chunk.js.map