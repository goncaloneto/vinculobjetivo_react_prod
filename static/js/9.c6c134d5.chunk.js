(this.webpackJsonpvinculobjetivo=this.webpackJsonpvinculobjetivo||[]).push([[9],{224:function(e,t,n){"use strict";n.r(t);var r,a,c=n(62),s=n(13),i=n.n(s),o=n(23),l=n(17),u=n(18),d=n(20),b=n(19),h=n(8),p=n(0),f=n(51),g=n.n(f),j=n(6),m=n(24),v=n.n(m),x=n(15),O=n(25),y=n(1),k=j.c.h4(r||(r=Object(h.a)(["\n  margin: 15px 0px;\n  color: ",";\n"])),(function(e){return e.theme.primaryText})),C=j.c.button(a||(a=Object(h.a)(["\n  background-color: ",";\n  color: ",";\n\n  &.active {\n    background-color: ",";\n    color: ",";\n    border-color: ",";\n  }\n\n  & span {\n    background-color: ",";\n    color: ",";\n    margin-left: 10px;\n  }\n"])),(function(e){return e.theme.buttonBgColor}),(function(e){return e.theme.buttonFgColor}),(function(e){return e.theme.activeBgColor}),(function(e){return e.theme.activeFgColor}),(function(e){return e.theme.activeBgColor}),(function(e){return e.theme.badgeBgColor}),(function(e){return e.theme.badgeFgColor})),B=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(O.a,"/cars"));case 2:t=e.sent,n=t.data,r=[],n.forEach((function(e){var t=e.attributes.brand.value;r.includes(t)||r.push(t)})),r=g.a.sortBy(r),this.setState({allBrands:r,cars:n});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUniqueBrands",value:function(){var e,t=this.state.cars,n=[],r=Object(c.a)(t);try{for(r.s();!(e=r.n()).done;){var a=e.value.attributes.brand.value;n.includes(a)||n.push(a)}}catch(s){r.e(s)}finally{r.f()}return n=g.a.sortBy(n)}},{key:"countBrand",value:function(e){return this.state.cars.filter((function(t){return t.attributes.brand.value===e})).length}},{key:"countSold",value:function(){return this.state.cars.filter((function(e){return e.sold})).length}},{key:"render",value:function(){var e=this,t=this.props,n=t.showSold,r=t.selectedBrands,a=this.state,c=a.allBrands,s=a.cars;return c&&s?Object(y.jsxs)(j.a,{theme:this.props.theme,children:[Object(y.jsx)(k,{className:"title1",children:"Filtros"}),Object(y.jsxs)("div",{className:"list-group filter1",children:[Object(y.jsxs)(C,{className:"list-group-item d-flex justify-content-between align-items-center ".concat(n?"active":""),onClick:function(){return e.props.onDisableAvailableFilter()},children:["Todos",Object(y.jsx)("span",{className:"badge badge-primary badge-pill",children:s.length})]}),Object(y.jsxs)(C,{className:"list-group-item d-flex justify-content-between align-items-center ".concat(n?"":"active"),onClick:function(){return e.props.onClickAvailable()},children:["Dispon\xedveis",Object(y.jsx)("span",{className:"badge badge-primary badge-pill",children:s.length-this.countSold()})]})]}),Object(y.jsx)(k,{className:"title2",children:"Marcas"}),Object(y.jsxs)("div",{className:"list-group filter2",children:[Object(y.jsxs)(C,{className:"list-group-item d-flex justify-content-between align-items-center ".concat(0===r.length?"active":""),onClick:function(){return e.props.onClickBrand("all")},children:["Todas",Object(y.jsx)("span",{className:"badge badge-primary badge-pill",children:s.length})]}),c.map((function(t){return Object(y.jsxs)(C,{className:"list-group-item d-flex justify-content-between align-items-center ".concat(r.includes(t)?"active":""),onClick:function(){return e.props.onClickBrand(t)},children:[t,Object(y.jsx)("span",{className:"badge badge-primary badge-pill",children:e.countBrand(t)})]},t)}))]})]}):Object(y.jsx)(x.a,{children:Object(y.jsx)(x.b,{})})}}]),n}(p.Component);t.default=B}}]);
//# sourceMappingURL=9.c6c134d5.chunk.js.map