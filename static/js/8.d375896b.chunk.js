(this.webpackJsonpvinculobjetivo=this.webpackJsonpvinculobjetivo||[]).push([[8],{217:function(e,n,t){"use strict";t.r(n);var r=t(39);var a,i,o,c=t(8),s=t.n(c),l=t(14),u=t(26),d=t(27),b=t(29),p=t(28),f=t(7),h=t(0),m=t(52),g=t.n(m),j=t(3),v=t(15),x=t.n(v),y=t(20),O=t(16),k=t(1),C=j.c.h4(a||(a=Object(f.a)(["\n  color: ",";\n"])),(function(e){return e.theme.primaryText})),w=j.c.button(i||(i=Object(f.a)(["\n  background-color: ",";\n  color: ",";\n\n  &.active {\n    background-color: ",";\n    color: ",";\n    border-color: ",";\n  }\n\n  & span {\n    background-color: ",";\n    color: ",";\n    margin-left: 10px;\n  }\n"])),(function(e){return e.theme.buttonBgColor}),(function(e){return e.theme.buttonFgColor}),(function(e){return e.theme.activeBgColor}),(function(e){return e.theme.activeFgColor}),(function(e){return e.theme.activeBgColor}),(function(e){return e.theme.badgeBgColor}),(function(e){return e.theme.badgeFgColor})),B=j.c.span(o||(o=Object(f.a)(["\n  cursor: pointer;\n  margin: 0 10px;\n\n  & .tooltiptext {\n    visibility: hidden;\n    opacity: 0;\n    transition: 0.5s ease-in;\n    background-color: black;\n    color: #fff;\n    text-align: center;\n    border-radius: 6px;\n    padding: 5px;\n    font-size: 0.9em;\n\n    position: absolute;\n    margin-left: 10px;\n    z-index: 999;\n  }\n\n  &:hover .tooltiptext {\n    visibility: visible;\n    opacity: 1;\n    transition: 0.5s ease-in;\n  }\n\n  & .word {\n    color: ",";\n  }\n"])),(function(e){return e.theme.badgeBgColor})),N=function(e){Object(b.a)(t,e);var n=Object(p.a)(t);function t(){var e;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).state={},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var n,t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(O.a,"/cars"));case 2:n=e.sent,t=n.data,r=[],t.forEach((function(e){var n=e.attributes.brand.value;r.includes(n)||r.push(n)})),r=g.a.sortBy(r),this.setState({allBrands:r,cars:t});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUniqueBrands",value:function(){var e,n=[],t=function(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=Object(r.a)(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==t.return||t.return()}finally{if(s)throw o}}}}(this.state.cars);try{for(t.s();!(e=t.n()).done;){var a=e.value.attributes.brand.value;n.includes(a)||n.push(a)}}catch(i){t.e(i)}finally{t.f()}return n=g.a.sortBy(n)}},{key:"countBrand",value:function(e){return this.state.cars.filter((function(n){return n.attributes.brand.value===e})).length}},{key:"countSold",value:function(){return this.state.cars.filter((function(e){return e.sold})).length}},{key:"render",value:function(){var e=this,n=this.props,t=n.showSold,r=n.selectedBrands,a=this.state,i=a.allBrands,o=a.cars;return i&&o?Object(k.jsxs)(j.a,{theme:this.props.theme,children:[Object(k.jsxs)(C,{className:"title1",children:["Filtros"," ",Object(k.jsxs)(B,{onClick:this.props.toggleVisibility,children:[Object(k.jsx)("i",{className:"fas ".concat(this.props.expanded?"fa-chevron-up":"fa-chevron-down")}),Object(k.jsxs)("span",{className:"tooltiptext",children:["Clique para",Object(k.jsx)("span",{className:"word",children:this.props.expanded?" esconder ":" mostrar "})," ","os filtros"]})]})]})," ",this.props.expanded?Object(k.jsxs)(k.Fragment,{children:[" ",Object(k.jsxs)("div",{className:"list-group filter1",style:{margin:"15px 0"},children:[Object(k.jsxs)(w,{className:"list-group-item d-flex justify-content-between align-items-center ".concat(t?"active":""),onClick:function(){return e.props.onDisableAvailableFilter()},children:["Todos",Object(k.jsx)("span",{className:"badge badge-primary badge-pill",children:o.length})]}),Object(k.jsxs)(w,{className:"list-group-item d-flex justify-content-between align-items-center ".concat(t?"":"active"),onClick:function(){return e.props.onClickAvailable()},children:["Dispon\xedveis",Object(k.jsx)("span",{className:"badge badge-primary badge-pill",children:o.length-this.countSold()})]})]}),Object(k.jsx)(C,{className:"title2",children:"Marcas"}),Object(k.jsxs)("div",{className:"list-group filter2",style:{margin:"15px 0"},children:[Object(k.jsxs)(w,{className:"list-group-item d-flex justify-content-between align-items-center ".concat(0===r.length?"active":""),onClick:function(){return e.props.onClickBrand("all")},children:["Todas",Object(k.jsx)("span",{className:"badge badge-primary badge-pill",children:o.length})]}),i.map((function(n){return Object(k.jsxs)(w,{className:"list-group-item d-flex justify-content-between align-items-center ".concat(r.includes(n)?"active":""),onClick:function(){return e.props.onClickBrand(n)},children:[n,Object(k.jsx)("span",{className:"badge badge-primary badge-pill",children:e.countBrand(n)})]},n)}))]})," "]}):""]}):Object(k.jsx)(y.a,{children:Object(k.jsx)(y.b,{})})}}]),t}(h.Component);n.default=N}}]);
//# sourceMappingURL=8.d375896b.chunk.js.map