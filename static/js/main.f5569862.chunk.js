(this.webpackJsonpvinculobjetivo=this.webpackJsonpvinculobjetivo||[]).push([[0],{113:function(e,t,n){"use strict";n.r(t);var a,r,i,c=n(40),s=n(11),l=n.n(s),o=n(24),d=n(17),u=n(18),b=n(20),h=n(19),j=n(7),p=n(0),m=n(36),f=n.n(m),x=n(4),v=n(25),g=n.n(v),O=n(14),y=n(26),C=n(1),k=x.c.h4(a||(a=Object(j.a)(["\n  color: ",";\n"])),(function(e){return e.theme.primaryText})),w=x.c.button(r||(r=Object(j.a)(["\n  background-color: ",";\n  color: ",";\n\n  &.active {\n    background-color: ",";\n    color: ",";\n    border-color: ",";\n  }\n\n  & span {\n    background-color: ",";\n    color: ",";\n    margin-left: 10px;\n  }\n"])),(function(e){return e.theme.buttonBgColor}),(function(e){return e.theme.buttonFgColor}),(function(e){return e.theme.activeBgColor}),(function(e){return e.theme.activeFgColor}),(function(e){return e.theme.activeBgColor}),(function(e){return e.theme.badgeBgColor}),(function(e){return e.theme.badgeFgColor})),N=x.c.span(i||(i=Object(j.a)(["\n  cursor: pointer;\n  margin: 0 10px;\n\n  & .tooltiptext {\n    visibility: hidden;\n    opacity: 0;\n    transition: 0.5s ease-in;\n    background-color: black;\n    color: #fff;\n    text-align: center;\n    border-radius: 6px;\n    padding: 5px;\n    font-size: 0.9em;\n\n    position: absolute;\n    margin-left: 10px;\n    z-index: 999;\n  }\n\n  &:hover .tooltiptext {\n    visibility: visible;\n    opacity: 1;\n    transition: 0.5s ease-in;\n  }\n\n  & .word {\n    color: ",";\n  }\n"])),(function(e){return e.theme.badgeBgColor})),F=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat(y.a,"/cars"));case 2:t=e.sent,n=t.data,a=[],n.forEach((function(e){var t=e.attributes.brand.value;a.includes(t)||a.push(t)})),a=f.a.sortBy(a),this.setState({allBrands:a,cars:n});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUniqueBrands",value:function(){var e,t=this.state.cars,n=[],a=Object(c.a)(t);try{for(a.s();!(e=a.n()).done;){var r=e.value.attributes.brand.value;n.includes(r)||n.push(r)}}catch(i){a.e(i)}finally{a.f()}return n=f.a.sortBy(n)}},{key:"countBrand",value:function(e){return this.state.cars.filter((function(t){return t.attributes.brand.value===e})).length}},{key:"countSold",value:function(){return this.state.cars.filter((function(e){return e.sold})).length}},{key:"render",value:function(){var e=this,t=this.props,n=t.showSold,a=t.selectedBrands,r=this.state,i=r.allBrands,c=r.cars;return i&&c?Object(C.jsxs)(x.a,{theme:this.props.theme,children:[Object(C.jsxs)(k,{className:"title1",children:["Filtros"," ",Object(C.jsxs)(N,{onClick:this.props.toggleVisibility,children:[Object(C.jsx)("i",{className:"fas ".concat(this.props.expanded?"fa-chevron-up":"fa-chevron-down")}),Object(C.jsxs)("span",{className:"tooltiptext",children:["Clique para",Object(C.jsx)("span",{className:"word",children:this.props.expanded?" esconder ":" mostrar "})," ","os filtros"]})]})]})," ",this.props.expanded?Object(C.jsxs)(C.Fragment,{children:[" ",Object(C.jsxs)("div",{className:"list-group filter1",style:{margin:"15px 0"},children:[Object(C.jsxs)(w,{className:"list-group-item d-flex justify-content-between align-items-center ".concat(n?"active":""),onClick:function(){return e.props.onDisableAvailableFilter()},children:["Todos",Object(C.jsx)("span",{className:"badge badge-primary badge-pill",children:c.length})]}),Object(C.jsxs)(w,{className:"list-group-item d-flex justify-content-between align-items-center ".concat(n?"":"active"),onClick:function(){return e.props.onClickAvailable()},children:["Dispon\xedveis",Object(C.jsx)("span",{className:"badge badge-primary badge-pill",children:c.length-this.countSold()})]})]}),Object(C.jsx)(k,{className:"title2",children:"Marcas"}),Object(C.jsxs)("div",{className:"list-group filter2",style:{margin:"15px 0"},children:[Object(C.jsxs)(w,{className:"list-group-item d-flex justify-content-between align-items-center ".concat(0===a.length?"active":""),onClick:function(){return e.props.onClickBrand("all")},children:["Todas",Object(C.jsx)("span",{className:"badge badge-primary badge-pill",children:c.length})]}),i.map((function(t){return Object(C.jsxs)(w,{className:"list-group-item d-flex justify-content-between align-items-center ".concat(a.includes(t)?"active":""),onClick:function(){return e.props.onClickBrand(t)},children:[t,Object(C.jsx)("span",{className:"badge badge-primary badge-pill",children:e.countBrand(t)})]},t)}))]})," "]}):""]}):Object(C.jsx)(O.a,{children:Object(C.jsx)(O.b,{})})}}]),n}(p.Component);t.default=F},14:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a,r,i,c,s,l=n(7),o=(n(0),n(4)),d=n(1),u=Object(o.d)(a||(a=Object(l.a)(["\n  0% { top: 36px; height: 128px }\n  50% { top: 60px; height: 80px }\n  100% { top: 60px; height: 80px }\n"]))),b=Object(o.d)(r||(r=Object(l.a)(["\n  0% { top: 41.99999999999999px; height: 116.00000000000001px }\n  50% { top: 60px; height: 80px }\n  100% { top: 60px; height: 80px }\n"]))),h=Object(o.d)(i||(i=Object(l.a)(["\n  0% { top: 48px; height: 104px }\n  50% { top: 60px; height: 80px }\n  100% { top: 60px; height: 80px }\n"]))),j=o.c.div(c||(c=Object(l.a)(["\n  width: 200px;\n  height: 200px;\n  display: inline-block;\n  overflow: hidden;\n  background: none;\n\n  & .ldio-f7qycwv0brs div {\n    position: absolute;\n    width: 30px;\n  }\n  .ldio-f7qycwv0brs div:nth-child(1) {\n    left: 35px;\n    background: #5c1510;\n    animation: "," 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n    animation-delay: -0.2s;\n  }\n  & .ldio-f7qycwv0brs div:nth-child(2) {\n    left: 85px;\n    background: #bf4d28;\n    animation: "," 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n    animation-delay: -0.1s;\n  }\n  & .ldio-f7qycwv0brs div:nth-child(3) {\n    left: 135px;\n    background: #ffb142;\n    animation: "," 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n    animation-delay: undefineds;\n  }\n\n  & .ldio-f7qycwv0brs {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transform: translateZ(0) scale(1);\n    backface-visibility: hidden;\n    transform-origin: 0 0; /* see note above */\n  }\n  & .ldio-f7qycwv0brs div {\n    box-sizing: content-box;\n  }\n"])),u,b,h),p=o.c.div(s||(s=Object(l.a)(["\n  text-align: center;\n"])));t.b=function(e){return Object(d.jsx)(j,{className:"loadingio-spinner-pulse-twcphaqlcxo",children:Object(d.jsxs)("div",{className:"ldio-f7qycwv0brs",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})})}},154:function(e,t,n){"use strict";n.r(t);var a,r,i,c,s,l,o,d,u,b,h,j=n(0),p=n.n(j),m=n(27),f=n.n(m),x=(n(90),n(8)),v=n(17),g=n(18),O=n(20),y=n(19),C=n(7),k=(n(91),n(9)),w=n(85),N=n(11),F=n.n(N),S=n(24),B=n(31),T=n(36),A=n.n(T),M=n(4),P=n(25),q=n.n(P),z=n(14),D=n(26),E=n(23),I=M.c.div(a||(a=Object(C.a)(['\n  display: grid;\n  grid-template-areas:\n    "filters cars"\n    "nothing pagination";\n  grid-template-columns: 1fr 7fr;\n  grid-column-gap: 25px;\n  grid-row-gap: 25px;\n  align-items: start;\n\n  margin: 25px 25px;\n\n  @media ',' {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      "filters"\n      "cars"\n      "pagination";\n  }\n'])),E.a.laptop),V=M.c.div(r||(r=Object(C.a)(["\n  grid-area: pagination;\n"]))),L=M.c.div(i||(i=Object(C.a)(['\n  grid-area: filters;\n  width: 100%;\n\n  display: grid;\n  grid-template-areas:\n    "title1"\n    "filter1"\n    "title2"\n    "filter2";\n\n  @media ',' {\n    justify-self: start;\n    max-width: 400px;\n\n    grid-template-areas:\n      "title1 title2"\n      "filter1 filter2";\n\n    grid-column-gap: 15px;\n  }\n\n  @media ',' {\n    justify-self: start;\n    max-width: 400px;\n\n    grid-template-areas:\n      "title1"\n      "filter1"\n      "title2"\n      "filter2";\n\n    grid-column-gap: 15px;\n  }\n\n  .title1 {\n    grid-area: title1;\n  }\n  .title2 {\n    grid-area: title2;\n  }\n  .filter1 {\n    grid-area: filter1;\n  }\n  .filter2 {\n    grid-area: filter2;\n  }\n'])),E.a.laptop,E.a.mobileM),G=M.c.div(c||(c=Object(C.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 25px;\n  grid-area: cars;\n\n  @media "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  @media "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media "," {\n    grid-template-columns: 1fr;\n  }\n"])),E.a.laptopL,E.a.laptop,E.a.mobileL),H=(n(113),n(1)),J=p.a.lazy((function(){return n.e(5).then(n.bind(null,239))})),R=p.a.lazy((function(){return n.e(9).then(n.bind(null,240))})),U=p.a.lazy((function(){return Promise.resolve().then(n.bind(null,113))})),W=function(e){Object(O.a)(n,e);var t=Object(y.a)(n);function n(){var e;return Object(v.a)(this,n),(e=t.call(this)).state={},e.handleSelectPage=function(t){e.setState({selectedPage:t})},e.state.carsPerPage=12,e.state.selectedPage=1,e.state.visibleCars=[],e.state.selectedBrands=[],e.state.showSold=!0,e.state.expanded=window.innerWidth>1024,e.handleClickBrand=e.handleClickBrand.bind(Object(B.a)(e)),e.handleClickAvailable=e.handleClickAvailable.bind(Object(B.a)(e)),e.handleDisableAvailableFilter=e.handleDisableAvailableFilter.bind(Object(B.a)(e)),e.handleToggleVisibility=e.handleToggleVisibility.bind(Object(B.a)(e)),e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=Object(S.a)(F.a.mark((function e(){var t,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("".concat(D.a,"/cars"));case 2:t=e.sent,n=t.data,n=A.a.sortBy(n,["sold","attributes.brand.value"]),this.setState({cars:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"ApplyFilters",value:function(){var e=this.state,t=e.selectedBrands,n=e.showSold,a=e.cars,r=a;return r=0===t.length?a:r.filter((function(e){return t.includes(e.attributes.brand.value)})),r=n?r:r.filter((function(e){return!e.sold}))}},{key:"GetVisibleCars",value:function(e){var t=this.state.carsPerPage,n=(e-1)*t,a=n+t;return this.ApplyFilters().slice(n,a)}},{key:"handleClickBrand",value:function(e){if("all"!==e){var t=this.state.selectedBrands,n=Object(w.a)(t);t.includes(e)?n=n.filter((function(t){return t!==e})):n.push(e),this.setState({selectedBrands:n,selectedPage:1})}else this.setState({selectedBrands:[]})}},{key:"handleDisableAvailableFilter",value:function(){this.setState({showSold:!0,selectedPage:1})}},{key:"handleClickAvailable",value:function(){this.setState({showSold:!1,selectedPage:1})}},{key:"handleToggleVisibility",value:function(){var e=!this.state.expanded;this.setState({expanded:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.carsPerPage,a=t.selectedPage,r=t.selectedBrands,i=t.showSold,c=t.cars,s=t.expanded;if(void 0===c)return Object(H.jsx)(z.a,{children:Object(H.jsx)(z.b,{})});var l=this.ApplyFilters(),o=Math.ceil(l.length/n),d=a>o?o:a;return Object(H.jsx)(j.Suspense,{fallback:Object(H.jsx)(z.a,{children:Object(H.jsx)(z.b,{})}),children:Object(H.jsx)(M.a,{theme:this.props.theme,children:Object(H.jsxs)(I,{children:[Object(H.jsx)(L,{children:Object(H.jsx)(U,{theme:this.props.theme.filters,onDisableAvailableFilter:this.handleDisableAvailableFilter,onClickAvailable:this.handleClickAvailable,onClickBrand:this.handleClickBrand,selectedBrands:r,showSold:i,toggleVisibility:this.handleToggleVisibility,expanded:s})}),Object(H.jsx)(G,{children:this.GetVisibleCars(d).map((function(t){return Object(H.jsx)(J,{theme:e.props.theme,car:t},t.id)}))}),Object(H.jsx)(V,{children:Object(H.jsx)(R,{theme:this.props.theme.pagination,numberOfPages:o,selectedPage:d,onSelectPage:this.handleSelectPage})})]})})})}}]),n}(j.Component),K=n(38),Q=n(43),X=n(78),Z=n(51),Y=n(21),$={textDecoration:"none",color:"inherit"},_=M.c.span(s||(s=Object(C.a)(["\n  position: fixed;\n  z-index: 999999999999;\n  right: 20px;\n  bottom: 20px;\n  cursor: pointer;\n  font-size: 30px;\n  color: white;\n  padding: 5px 13px;\n  border-radius: 50%;\n  text-align: center;\n  background-color: ",";\n  border: 4px solid transparent;\n\n  &:hover {\n    background-color: orange;\n  }\n"])),(function(e){return e.theme.badge.bg})),ee=M.c.div(l||(l=Object(C.a)(['\n  & img {\n    width: inherit;\n    background-image: url("/img/pulse.gif");\n    background-repeat: no-repeat;\n    background-position: center;\n  }\n']))),te=M.c.ul(o||(o=Object(C.a)(["\n  list-style-type: none;\n  padding-left: 0px;\n  color: ",";\n"])),(function(e){return e.theme.primaryText})),ne=M.c.span(d||(d=Object(C.a)(["\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.theme.badge.bg}),(function(e){return e.theme.badge.fg})),ae=M.c.h1(u||(u=Object(C.a)(["\n  color: ",";\n"])),(function(e){return e.theme.primaryText})),re=M.c.div(b||(b=Object(C.a)(["\n  margin: 50px auto;\n  color: ",";\n  -webkit-filter: invert(100%);\n  filter: invert(100%);\n  font-size: 40px;\n  text-align: center;\n\n  & span {\n    font-size: 1.4em;\n    border-bottom: 3px solid red;\n  }\n"])),(function(e){return e.theme.bgColor})),ie=M.c.h5(h||(h=Object(C.a)(["\n  margin: 20px 0px 20px 20px;\n  display: inline-block;\n  padding-bottom: 5px;\n  &:hover {\n    color: orange;\n  }\n"])));var ce,se,le,oe=function(e){var t=Object(j.useState)(!1),a=Object(K.a)(t,2),r=a[0],i=a[1],c=Object(j.useState)(void 0),s=Object(K.a)(c,2),l=s[0],o=s[1],d=Object(j.useState)((function(){return function(e,t){var n={type:"loop",perMove:1,gap:"1rem",pagination:!0,lazyLoad:"nearby"};return e&&t?Object(x.a)(Object(x.a)({},n),{},{fixedWidth:e,fixedHeight:t}):n}()})),u=Object(K.a)(d,1)[0],b=Object(j.useState)((function(){return{type:"slide",rewind:!0,gap:"1rem",pagination:!1,fixedWidth:110,fixedHeight:70,cover:!0,focus:"center",isNavigation:!0,updateOnMove:!0}})),h=Object(K.a)(b,1)[0],m=p.a.createRef(),f=p.a.createRef();Object(j.useEffect)((function(){m.current&&f.current&&m.current.sync(f.current.splide)}),[m,f]),Object(j.useEffect)((function(){function t(){return(t=Object(S.a)(F.a.mark((function t(){var n,a;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q.a.get("".concat(D.a,"/cars/").concat(e.match.params.id));case 3:n=t.sent,(a=n.data)||(a=-1),o(a),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),o(-1);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.match.params.id]);var v=p.a.lazy((function(){return n.e(8).then(n.bind(null,241))})),g=e.match.params.id,O=function(){return Object(H.jsxs)(ee,{children:[Object(H.jsx)(Q.Splide,{options:u,ref:m,children:y()}),Object(H.jsx)(Q.Splide,{options:h,ref:f,className:"mt-3",children:y()})]})},y=function(){for(var e=[],t=1;t<=l.photos;t++)e.push(Object(H.jsx)(Q.SplideSlide,{children:Object(H.jsx)("img",{src:""+"/img/".concat(l.id,"/").concat(t,".webp"),alt:"Fotos da viatura"})},"".concat(l.id,"/").concat(t)));return e};if(!l)return Object(H.jsx)(z.a,{children:Object(H.jsx)(z.b,{})});if(-1===l)return Object(H.jsx)(M.a,{theme:e.theme,children:Object(H.jsxs)(re,{children:[Object(H.jsx)("span",{children:"Erro:"})," Viatura n\xe3o existe: id ",g]})});if(l&&l.sold){var C={position:"top-right",autoClose:!1,hideProgressBar:!0,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0};Z.b.error("\u26a0\ufe0f Esta viatura j\xe1 foi vendida \ud83d\ude22",C)}return Object(H.jsxs)(j.Suspense,{fallback:Object(H.jsx)(z.a,{children:Object(H.jsx)(z.b,{})}),children:[Object(H.jsx)(Z.a,{limit:1}),Object(H.jsxs)(M.a,{theme:e.theme,children:[Object(H.jsxs)(X.a,{children:[Object(H.jsx)("script",{type:"application/ld+json",children:function(){var e={"@context":"http://schema.org/","@type":"Product",name:"".concat(l.title),image:["https://vinculobjetivo.pt/img/".concat(l.id,"/thumbnail.webp")],description:"".concat(l.title," | ").concat(l.attributes.kms.value," KMS | ").concat(l.attributes.year.value," | ").concat(l.attributes.fuelType.value),sku:"".concat(l.id),offers:{"@type":"Offer",priceCurrency:"\u20ac",price:"".concat(l.price),url:"https://vinculobjetivo.pt/carro/".concat(l.id),itemCondition:"https://schema.org/UsedCondition",availability:"".concat(l.sold?"https://schema.org/SoldOut":"https://schema.org/InStock"),seller:{"@type":"Organization",name:"Vinculobjetivo"}},brand:{"@type":"Brand",name:"".concat(l.attributes.brand.value)}};return console.log(JSON.stringify(e)),JSON.stringify(e)}()}),Object(H.jsx)("meta",{charSet:"utf-8"}),Object(H.jsx)("title",{children:l.title}),Object(H.jsx)("link",{rel:"canonical",href:"https://vinculobjetivo.pt/carros"})]}),Object(H.jsx)(_,{onClick:function(){i((function(e){return!e}))},children:Object(H.jsx)("i",{className:r?"fas fa-compress":"fas fa-expand"})}),r?O():Object(H.jsxs)("div",{children:[Object(H.jsx)(Y.b,{to:"/carros",style:Object(x.a)({},$),children:Object(H.jsxs)(ie,{className:"underline",children:[Object(H.jsx)("i",{className:"fas fa-arrow-left"})," Cat\xe1logo"]})}),Object(H.jsxs)("div",{className:"row ml-lg-5 mr-lg-5 ml-sm-2 mr-sm-2 ml-1 mr-1",children:[Object(H.jsx)("div",{className:"col-12 col-lg-9 ",children:O()}),Object(H.jsxs)("div",{className:"col-12 col-lg-3 ",children:[Object(H.jsx)(ae,{children:l.title}),l.sold?Object(H.jsx)("h1",{children:Object(H.jsx)("span",{className:"badge badge-warning",children:"Vendido"})}):Object(H.jsx)("h1",{children:Object(H.jsxs)(ne,{className:"badge badge-primary",children:[l.price,"\u20ac"]})}),Object(H.jsx)(te,{children:Object(H.jsx)("table",{className:"table table-hover",children:Object(H.jsx)("tbody",{children:Object.keys(l.attributes).map((function(e){return Object(H.jsxs)("tr",{children:[Object(H.jsx)("th",{scope:"row",children:l.attributes[e].description}),Object(H.jsx)("td",{children:"kms"===e?(t=l.attributes[e].value,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")):l.attributes[e].value})]},e);var t}))})})})]})]}),Object(H.jsx)(v,{theme:e.theme,subject:l.title})]})]})]})},de=function(e){return Object(H.jsx)("h1",{children:"404 P\xe1gina N\xe3o encontrada"})},ue=n(81),be=n(39),he=n(84),je=function(e){Object(O.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(g.a)(n,[{key:"render",value:function(){return Object(H.jsxs)(be.a,{expand:"lg",variant:"light",style:{backgroundColor:"#EAE7DC"},children:[Object(H.jsx)(be.a.Brand,{id:"brand",href:"/",children:"\\\\ VINCULOBJETIVO"}),Object(H.jsx)(be.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(H.jsx)(be.a.Collapse,{id:"basic-navbar-nav",children:Object(H.jsxs)(he.a,{className:"mr-auto",children:[Object(H.jsx)(Y.b,{to:"/",style:Object(x.a)(Object(x.a)({},$),{},{color:"black"}),className:"mr-2 underline",children:Object(H.jsx)("strong",{children:"In\xedcio"})}),Object(H.jsx)(Y.b,{to:"/carros",style:Object(x.a)(Object(x.a)({},$),{},{color:"black"}),className:"mr-2 underline",children:Object(H.jsx)("strong",{children:"Carros"})}),Object(H.jsx)(ue.a,{to:"/#contacts",style:Object(x.a)(Object(x.a)({},$),{},{color:"black"}),className:"mr-2 underline",children:Object(H.jsx)("strong",{children:"Contactos"})})]})})]})}}]),n}(j.Component),pe=n(82),me=n.n(pe),fe=n(74),xe=p.a.lazy((function(){return n.e(6).then(n.bind(null,242))})),ve=p.a.lazy((function(){return Promise.all([n.e(3),n.e(7)]).then(n.bind(null,243))})),ge=p.a.lazy((function(){return n.e(4).then(n.bind(null,244))})),Oe={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",transform:"translate(-50%, -50%)",backgroundColor:"#614051",border:"5px solid #614051",borderRadius:"10px",maxWidth:"80%",color:"white"}},ye=M.c.span(ce||(ce=Object(C.a)(["\n  position: absolute;\n  right: 17px;\n  top: 5px;\n  cursor: pointer;\n  font-size: 30px;\n  color: white;\n  text-align: center;\n"]))),Ce=function(e){Object(O.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={modalIsOpen:!1,subtitle:""},e.openModal=function(){e.setState({modalIsOpen:!0})},e.closeModal=function(){e.setState({modalIsOpen:!1})},e}return Object(g.a)(n,[{key:"render",value:function(){var e=this.state.modalIsOpen;return Object(H.jsxs)(j.Suspense,{fallback:Object(H.jsx)(z.a,{children:Object(H.jsx)(z.b,{})}),children:[Object(H.jsx)(ve,{theme:this.props.theme.services,handleOpenModal:this.openModal}),Object(H.jsxs)(me.a,{isOpen:e,onRequestClose:this.closeModal,style:Oe,contentLabel:"Modal",children:[Object(H.jsx)(ye,{onClick:this.closeModal,children:Object(H.jsx)("i",{className:"fas fa-times"})}),Object(H.jsx)("h2",{style:{textAlign:"center",marginBottom:"40px",marginRight:"25px"},children:"Contacte-nos para pre\xe7os, or\xe7amentos ou outras informa\xe7\xf5es!"}),Object(fe.a)()]}),Object(H.jsx)(ge,{theme:this.props.theme.showroom,history:this.props.history}),Object(H.jsx)(xe,{theme:this.props.theme.contactUs})]})}}]),n}(j.Component),ke={bgColor:"#EAE7DC",badge:{bg:"#BF4D28",fg:"#ffffff"},primaryText:"black",secundaryText:"#ffffff"},we={bgColor:"#54130F",bgHover:"#BF4D28",borderColor:"#FFFFFF",borderHover:"#F5A876",primaryText:"white",secundaryText:"#FF90DD",primaryTextHover:"white",secundaryTextHover:"white",soldBadgeBg:"#614051",soldBadgeFg:"#FFFFFF"},Ne={buttonBgColor:"#54130F",buttonFgColor:"white",badgeBgColor:"#F5A876",badgeFgColor:"white",activeBgColor:"#BF4D28",activeFgColor:"white"},Fe=Object(x.a)(Object(x.a)({},ke),{},{card:Object(x.a)({},we),services:{bg:"#F9CBB1",bgHover:"#F5883E",cardBg:"white",cardFg:"black",fgHover:"white",primary:"#54130F",secundary:"black"},contactUs:{bg:"#ffffff",primary:"#000000",secundary:"#000000"},showroom:Object(x.a)({bg:"#F5883E",primary:"#ffffff",secundary:"#ffffff",card:Object(x.a)(Object(x.a)({},we),{},{borderHover:"#FFFFFF"})},ke),filters:Object(x.a)({},Ne),pagination:Object(x.a)({},Ne)}),Se=n(40),Be=n(83),Te=n.n(Be),Ae=n(3),Me=n.n(Ae),Pe=M.c.div(se||(se=Object(C.a)(["\n  width: 80%;\n  margin: 20px auto;\n\n  & form {\n    margin-bottom: 15px;\n  }\n\n  & pre {\n    color: ",";\n  }\n\n  & small {\n    color: ",";\n  }\n"])),(function(e){return Fe.primaryText}),(function(e){return Fe.badge.bg})),qe=function(e){Object(O.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={car:{title:"",price:0,showroom:!1,sold:!1,photos:"",attributes:{kms:{value:""},year:{value:""},month:{value:""},brand:{value:""},model:{value:""},fuelType:{value:""},motorCapacity:{value:""},gearType:{value:""},numberOfGears:{value:""},hp:{value:""},doors:{value:""}}},result:"",errors:{}},e.schema=Me.a.object({id:Me.a.number().required(),title:Me.a.string().required(),price:Me.a.number().greater(0),showroom:Me.a.boolean(),sold:Me.a.boolean(),photos:Me.a.number().greater(0),attributes:Me.a.object({kms:Me.a.object({value:Me.a.number().required(),description:Me.a.string()}),year:Me.a.object({value:Me.a.number().required().greater(0),description:Me.a.string()}),month:Me.a.object({value:Me.a.string().required(),description:Me.a.string()}),brand:Me.a.object({value:Me.a.string().required(),description:Me.a.string()}),model:Me.a.object({value:Me.a.string().required(),description:Me.a.string()}),fuelType:Me.a.object({value:Me.a.string().required(),description:Me.a.string()}),motorCapacity:Me.a.object({value:Me.a.number().required().greater(0),description:Me.a.string()}),gearType:Me.a.object({value:Me.a.string().required(),description:Me.a.string()}),numberOfGears:Me.a.object({value:Me.a.number().required(),description:Me.a.string()}),hp:Me.a.object({value:Me.a.number().required().greater(0),description:Me.a.string()}),doors:Me.a.object({value:Me.a.number().required().greater(0),description:Me.a.string()})})}),e.handleChange=function(t){var n=t.currentTarget,a=Object(x.a)({},e.state.car);a[n.name]=n.value,e.setState({car:a})},e.handleChangeAttributes=function(t,n){var a=n.currentTarget,r=Object(x.a)({},e.state.car);r.attributes[a.name]={value:a.value,description:t},e.setState({car:r})},e.validate=function(){var t=e.schema.validate(e.state.car,{abortEarly:!1}).error;if(!t)return null;var n,a={},r=Object(Se.a)(t.details);try{for(r.s();!(n=r.n()).done;){var i,c,s=n.value;if("attributes"!==s.path[0])a[s.path[0]]=s.message;else a[s.path[0]]=null!==(i=a[s.path[0]])&&void 0!==i?i:{},a[s.path[0]][s.path[1]]=null!==(c=a[s.path[0]][s.path[1]])&&void 0!==c?c:{},a[s.path[0]][s.path[1]][s.path[2]]="Inv\xe1lido"}}catch(l){r.e(l)}finally{r.f()}return a},e.handleSubmit=function(){var t=Object(S.a)(F.a.mark((function t(n){var a,r,i,c;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!(r=e.validate(e.state.car))){t.next=6;break}a={erro:"preencha o formul\xe1rio corretamente"},t.next=11;break;case 6:return t.next=8,q.a.post("".concat(D.a,"/cars"),e.state.car);case 8:i=t.sent,c=i.data,a=c;case 11:e.setState({result:a,errors:r||{}});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleShowCars=function(){var t=Object(S.a)(F.a.mark((function t(n){var a,r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,q.a.get("".concat(D.a,"/cars"));case 3:a=t.sent,r=a.data,e.setState({result:r});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=Object(S.a)(F.a.mark((function e(){var t,n,a,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("".concat(D.a,"/cars"));case 2:t=e.sent,n=t.data,a=n.length+1,(r=Object(x.a)({},this.state.car)).id=a,this.setState({car:r});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,n,a,r,i,c,s,l,o,d,u,b,h,j,p,m,f,x,v,g,O,y=this,C=this.state,k=C.car,w=C.result,N=C.errors;return Object(H.jsx)(M.a,{theme:this.props.theme,children:Object(H.jsxs)(Pe,{children:[Object(H.jsxs)("form",{children:[Object(H.jsxs)("div",{className:"form-group",children:[Object(H.jsx)("label",{htmlFor:"title",children:"T\xedtulo"}),Object(H.jsx)("input",{value:k.title,onChange:this.handleChange,type:"text",name:"title",id:"title",className:"form-control"}),N.title&&Object(H.jsx)("small",{children:N.title})]}),Object(H.jsx)("div",{className:"form-group",children:Object(H.jsxs)("div",{className:"form-row",children:[Object(H.jsxs)("div",{className:"col",children:[Object(H.jsx)("label",{htmlFor:"price",children:"Pre\xe7o"}),Object(H.jsx)("input",{type:"number",value:k.price,onChange:this.handleChange,name:"price",id:"price",className:"form-control"}),N.price&&Object(H.jsx)("small",{children:N.price})]}),Object(H.jsxs)("div",{className:"col",children:[Object(H.jsx)("label",{htmlFor:"kms",children:"Quil\xf3metros"}),Object(H.jsx)("input",{type:"number",value:k.attributes.kms.value,onChange:function(e){return y.handleChangeAttributes("KMs",e)},name:"kms",id:"kms",className:"form-control"}),(null===(e=N.attributes)||void 0===e||null===(t=e.kms)||void 0===t?void 0:t.value)&&Object(H.jsx)("small",{children:N.attributes.kms.value})]})]})}),Object(H.jsx)("div",{className:"form-group",children:Object(H.jsxs)("div",{className:"form-row",children:[Object(H.jsxs)("div",{className:"col",children:[Object(H.jsx)("label",{htmlFor:"year",children:"Ano"}),Object(H.jsx)("input",{type:"number",value:k.attributes.year.value,onChange:function(e){return y.handleChangeAttributes("Ano",e)},name:"year",id:"year",className:"form-control"}),(null===(n=N.attributes)||void 0===n||null===(a=n.year)||void 0===a?void 0:a.value)&&Object(H.jsx)("small",{children:N.attributes.year.value})]}),Object(H.jsxs)("div",{className:"col",children:[Object(H.jsx)("label",{htmlFor:"month",children:"M\xeas"}),Object(H.jsx)("input",{type:"text",value:k.attributes.month.value,onChange:function(e){return y.handleChangeAttributes("M\xeas",e)},name:"month",id:"month",className:"form-control"}),(null===(r=N.attributes)||void 0===r||null===(i=r.month)||void 0===i?void 0:i.value)&&Object(H.jsx)("small",{children:N.attributes.month.value})]})]})}),Object(H.jsx)("div",{className:"form-group",children:Object(H.jsxs)("div",{className:"form-row",children:[Object(H.jsxs)("div",{className:"col",children:[Object(H.jsx)("label",{htmlFor:"brand",children:"Marca"}),Object(H.jsx)("input",{type:"text",value:k.attributes.brand.value,onChange:function(e){return y.handleChangeAttributes("Marca",e)},name:"brand",id:"brand",className:"form-control"}),(null===(c=N.attributes)||void 0===c||null===(s=c.brand)||void 0===s?void 0:s.value)&&Object(H.jsx)("small",{children:N.attributes.brand.value})]}),Object(H.jsxs)("div",{className:"col",children:[Object(H.jsx)("label",{htmlFor:"model",children:"Modelo"}),Object(H.jsx)("input",{type:"text",value:k.attributes.model.value,onChange:function(e){return y.handleChangeAttributes("Modelo",e)},name:"model",test:"hhhh",id:"model",className:"form-control"}),(null===(l=N.attributes)||void 0===l||null===(o=l.model)||void 0===o?void 0:o.value)&&Object(H.jsx)("small",{children:N.attributes.model.value})]})]})}),Object(H.jsx)("div",{className:"form-group",children:Object(H.jsxs)("div",{className:"form-row",children:[Object(H.jsxs)("div",{className:"col",children:[Object(H.jsx)("label",{htmlFor:"fuelType",children:"Combust\xedvel"}),Object(H.jsx)("input",{type:"text",value:k.attributes.fuelType.value,onChange:function(e){return y.handleChangeAttributes("Combust\xedvel",e)},name:"fuelType",id:"fuelType",className:"form-control"}),(null===(d=N.attributes)||void 0===d||null===(u=d.fuelType)||void 0===u?void 0:u.value)&&Object(H.jsx)("small",{children:N.attributes.fuelType.value})]}),Object(H.jsxs)("div",{className:"col",children:[Object(H.jsx)("label",{htmlFor:"motorCapacity",children:"Cilindrada"}),Object(H.jsx)("input",{type:"number",value:k.attributes.motorCapacity.value,onChange:function(e){return y.handleChangeAttributes("Cilindrada",e)},name:"motorCapacity",id:"motorCapacity",className:"form-control"}),(null===(b=N.attributes)||void 0===b||null===(h=b.motorCapacity)||void 0===h?void 0:h.value)&&Object(H.jsx)("small",{children:N.attributes.motorCapacity.value})]}),Object(H.jsxs)("div",{className:"col",children:[Object(H.jsx)("label",{htmlFor:"hp",children:"Cavalos"}),Object(H.jsx)("input",{type:"number",value:k.attributes.hp.value,onChange:function(e){return y.handleChangeAttributes("Cavalos",e)},name:"hp",id:"hp",className:"form-control"}),(null===(j=N.attributes)||void 0===j||null===(p=j.hp)||void 0===p?void 0:p.value)&&Object(H.jsx)("small",{children:N.attributes.hp.value})]})]})}),Object(H.jsxs)("div",{className:"form-group",children:[Object(H.jsx)("label",{htmlFor:"doors",children:"Portas"}),Object(H.jsx)("input",{type:"number",value:k.attributes.doors.value,onChange:function(e){return y.handleChangeAttributes("Portas",e)},name:"doors",id:"doors",className:"form-control"}),(null===(m=N.attributes)||void 0===m||null===(f=m.doors)||void 0===f?void 0:f.value)&&Object(H.jsx)("small",{children:N.attributes.doors.value})]}),Object(H.jsx)("div",{className:"form-group",children:Object(H.jsxs)("div",{className:"form-row",children:[Object(H.jsxs)("div",{className:"col",children:[Object(H.jsx)("label",{htmlFor:"gearType",children:"Tipo de Mudan\xe7as"}),Object(H.jsxs)("select",{value:k.attributes.gearType.value,onChange:function(e){return y.handleChangeAttributes("Mudan\xe7as",e)},name:"gearType",className:"form-control",id:"gearType",children:[Object(H.jsx)("option",{value:""}),Object(H.jsx)("option",{value:"autom\xe1tico",children:"Autom\xe1tico"}),Object(H.jsx)("option",{value:"manual",children:"Manual"})]}),(null===(x=N.attributes)||void 0===x||null===(v=x.gearType)||void 0===v?void 0:v.value)&&Object(H.jsx)("small",{children:N.attributes.gearType.value})]}),Object(H.jsxs)("div",{className:"col",children:[Object(H.jsx)("label",{htmlFor:"numberOfGears",children:"N\xfamero de Mudan\xe7as"}),Object(H.jsx)("input",{type:"number",value:k.attributes.numberOfGears.value,onChange:function(e){return y.handleChangeAttributes("# Mudan\xe7as",e)},name:"numberOfGears",id:"numberOfGears",className:"form-control"}),(null===(g=N.attributes)||void 0===g||null===(O=g.numberOfGears)||void 0===O?void 0:O.value)&&Object(H.jsx)("small",{children:N.attributes.numberOfGears.value})]})]})}),Object(H.jsx)("div",{className:"form-group",children:Object(H.jsxs)("div",{className:"form-row",children:[Object(H.jsxs)("div",{className:"col",children:[Object(H.jsx)("label",{htmlFor:"photos",children:"N\xfamero de Fotos"}),Object(H.jsx)("input",{type:"number",value:k.photos,onChange:this.handleChange,name:"photos",id:"photos",className:"form-control"}),N.photos&&Object(H.jsx)("small",{children:N.photos})]}),Object(H.jsxs)("div",{className:"col",children:[Object(H.jsx)("label",{htmlFor:"sold",children:"Vendido"}),Object(H.jsxs)("select",{value:k.sold,onChange:this.handleChange,name:"sold",className:"form-control",id:"sold",children:[Object(H.jsx)("option",{value:"false",children:"N\xe3o"}),Object(H.jsx)("option",{value:"true",children:"Sim"})]})]})]})}),Object(H.jsx)("div",{className:"form-group"}),Object(H.jsx)("button",{className:"btn btn-primary",onClick:this.handleSubmit,children:"Gerar C\xf3digo"}),Object(H.jsx)("button",{className:"btn btn-primary ml-2",onClick:this.handleShowCars,children:"Mostrar Existentes"})]}),Object(H.jsx)(Te.a,{id:"json-pretty",data:w})]})})}}]),n}(j.Component),ze=(n(149),Object(M.b)(le||(le=Object(C.a)(["\n  body {\n    background-color: ",";\n  }\n  "])),(function(e){return e.theme.bgColor}))),De=function(e){Object(O.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(g.a)(n,[{key:"render",value:function(){return Object(H.jsxs)(M.a,{theme:Fe,children:[Object(H.jsx)(ze,{}),Object(H.jsx)(je,{onClickThemeToggle:this.toggleTheme}),Object(H.jsx)("div",{className:"content",children:Object(H.jsxs)(k.d,{children:[Object(H.jsx)(k.b,{path:"/admin",render:function(e){return Object(H.jsx)(qe,Object(x.a)({theme:Fe},e))}}),Object(H.jsx)(k.b,{path:"/carro/:id",render:function(e){return Object(H.jsx)(oe,Object(x.a)({theme:Fe},e))}}),Object(H.jsx)(k.a,{from:"/cars",to:"/carros"}),Object(H.jsx)(k.a,{from:"/car/:id",to:"/carro/:id"}),Object(H.jsx)(k.a,{from:"/carros/:id",to:"/carro/:id"}),Object(H.jsx)(k.b,{path:"/carros",render:function(e){return Object(H.jsx)(W,Object(x.a)({theme:Fe},e))}}),Object(H.jsx)(k.b,{path:"/not-found",render:function(e){return Object(H.jsx)(de,Object(x.a)({theme:Fe},e))}}),Object(H.jsx)(k.b,{exact:!0,path:"/",render:function(e){return Object(H.jsx)(Ce,Object(x.a)({theme:Fe},e))}}),Object(H.jsx)(k.a,{to:"/not-found"})]})})]})}}]),n}(j.Component),Ee=function(e){e&&e instanceof Function&&n.e(10).then(n.bind(null,245)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};n(150),n(151),n(152),n(153);f.a.render(Object(H.jsx)(p.a.StrictMode,{children:Object(H.jsxs)(Y.a,{children:[" ",Object(H.jsx)(De,{})," "]})}),document.getElementById("root")),Ee()},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a="375px",r="425px",i="768px",c="1024px",s="1440px",l="2560px",o={mobileS:"(max-width: ".concat("320px",")"),mobileM:"(max-width: ".concat(a,")"),mobileL:"(max-width: ".concat(r,")"),tablet:"(max-width: ".concat(i,")"),laptop:"(max-width: ".concat(c,")"),laptopL:"(max-width: ".concat(s,")"),desktop:"(max-width: ".concat(l,")"),desktopL:"(max-width: ".concat(l,")")}},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="https://vinculobjetivobe.vercel.app"},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a,r,i=n(7),c=n(4),s=(n(0),n(23)),l=n(1),o=c.c.div(a||(a=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #bf4d28;\n  border: 1px solid black;\n  border-radius: 15px;\n  text-align: center;\n  padding: 10px;\n  margin: 5px;\n  display: inline-block;\n\n  & a,\n  i {\n    color: white;\n\n    &:hover {\n      text-decoration: none;\n    }\n  }\n\n  @media "," {\n    font-size: 25px;\n  }\n\n  @media "," {\n    font-size: 20px;\n  }\n\n  @media "," {\n    font-size: 15px;\n  }\n"])),s.a.desktopL,s.a.tablet,s.a.mobileS),d=function(e){return Object(l.jsxs)(o,{className:e.classes,children:[Object(l.jsx)("i",{className:"mr-2 ".concat(e.faIcon)}),Object(l.jsx)("a",{href:e.link,className:"underline",children:e.label})]})},u=c.c.div(r||(r=Object(i.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr auto;\n\n  & .address {\n    grid-row: 1 / 3;\n    align-self: center;\n  }\n\n  & .email {\n    grid-column: 1 / 3;\n  }\n\n  @media (min-width: 2443px) {\n    grid-template-rows: 1fr 1fr;\n\n    & .address {\n      grid-row: 1 / 2;\n      align-self: center;\n    }\n\n    & .email {\n      grid-column: 2 / 3;\n      align-self: center;\n    }\n  }\n"]))),b=function(){return Object(l.jsx)(u,{children:h()})},h=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{classes:"address",link:"https://goo.gl/maps/9HX84yQE545n2Mkq8",label:"Avenida Barbosa Du Bocage n\xba 98 4\xba Esq, Lisboa",faIcon:"fas fa-map-marker-alt"}),Object(l.jsx)(d,{link:"tel:21 796 0163",label:"+351 21 796 0163",faIcon:"fas fa-phone"}),Object(l.jsx)(d,{link:"tel:+351961589685",label:"+351 961 589 685",faIcon:"fas fa-phone"}),Object(l.jsx)(d,{classes:"email",link:"mailto:geral@vinculobjetivo.pt",label:"geral@vinculobjetivo.pt",faIcon:"fas fa-envelope"})]})}},90:function(e,t,n){},91:function(e,t,n){}},[[154,1,2]]]);
//# sourceMappingURL=main.f5569862.chunk.js.map