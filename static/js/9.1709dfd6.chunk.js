(this.webpackJsonpvinculobjetivo=this.webpackJsonpvinculobjetivo||[]).push([[9],{240:function(n,e,o){"use strict";o.r(e);var t,r,c=o(7),l=o(4),i=o(1),a=l.c.button(t||(t=Object(c.a)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 3px;\n  border: 1px solid ",";\n  padding: 5px 10px;\n  font-size: 1.2em;\n\n  &:hover {\n    background-color: #ffb142;\n    color: black;\n    border-color: ",";\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.buttonBgColor}),(function(n){return n.theme.buttonFgColor}),(function(n){return n.theme.buttonBgColor}),(function(n){return n.theme.activeBgColor})),u=l.c.ul(r||(r=Object(c.a)(["\n  list-style-type: none;\n  padding-left: 0px;\n\n  & li {\n    display: inline;\n  }\n\n  & li.disabled {\n    display: inline;\n    cursor: default;\n  }\n\n  & li.disabled button {\n    color: black;\n    background-color: lightgray;\n    border-color: lightgray;\n    cursor: default;\n  }\n\n  & li.active button {\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n    cursor: default;\n  }\n"])),(function(n){return n.theme.activeBgColor}),(function(n){return n.theme.activeBgColor}),(function(n){return n.theme.activeFgColor})),s=function(n){var e=n.selectedPage,o=n.numberOfPages,t=[],r=e===o,c=1===e,l=r?e:e+1,u=c?e:e-1;t.push(Object(i.jsx)("li",{className:"".concat(c?"disabled":""),children:Object(i.jsx)(a,{onClick:function(){return n.onSelectPage(u)},children:"Anterior"})},"prev-page"));for(var s=function(o){t.push(Object(i.jsx)("li",{className:"".concat(o===e?"active":""," ml-1"),children:Object(i.jsx)(a,{onClick:function(){return n.onSelectPage(o)},children:o})},"page".concat(o)))},b=1;b<=n.numberOfPages;b++)s(b);return t.push(Object(i.jsx)("li",{className:"".concat(r?"disabled":""," ml-1"),children:Object(i.jsx)(a,{onClick:function(){return n.onSelectPage(l)},children:"Pr\xf3xima"})},"next-page")),t};e.default=function(n){return Object(i.jsx)(l.a,{theme:n.theme,children:Object(i.jsx)(u,{children:s(n)})})}}}]);
//# sourceMappingURL=9.1709dfd6.chunk.js.map