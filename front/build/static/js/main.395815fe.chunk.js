(this.webpackJsonpcountryapp=this.webpackJsonpcountryapp||[]).push([[0],{49:function(e,t,a){e.exports=a(99)},57:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(8),l=a.n(r),o=(a(54),a(55),a(56),a(57),a(48)),m=a(11),s=a(7);var i=function(){return c.a.createElement(s.h,{color:"indigo",dark:!0,expand:"md"},c.a.createElement(s.i,null,c.a.createElement("strong",{className:"white-text"},"Country Search & List")),c.a.createElement(s.k,null),c.a.createElement(s.d,{id:"navbarCollapse3",navbar:!0},c.a.createElement(s.j,{left:!0},c.a.createElement(s.g,null))))},u=a(46),d=a.n(u),E=a(47),g=a.n(E);var h=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(10),u=Object(m.a)(l,2),E=u[0],h=u[1],p=Object(n.useState)(1),f=Object(m.a)(p,2),v=f[0],b=f[1],j=Object(n.useState)(0),O=Object(m.a)(j,2),w=O[0],N=O[1],k=Object(n.useState)(""),y=Object(m.a)(k,2),C=y[0],S=y[1];Object(n.useEffect)((function(){d.a.get("http://3.87.165.124:88/rest-countries-v1/?page=".concat(v,"&limit=").concat(E,"&country=").concat(C),{headers:{Authorization:"dsds93432$#%^#$#Dfdfd$%@#@"}}).then((function(e){r([]);for(var t=function(t){r((function(a){return[].concat(Object(o.a)(a),[e.data.data.data[t].name])}))},a=0;a<e.data.data.data.length;a++)t(a);N(e.data.total)})).catch((function(e){console.log(e)}))}),[E,v,C]);var x=a.map((function(e,t){return c.a.createElement("ul",{key:t},c.a.createElement("li",null," ",e))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(i,null),c.a.createElement(s.n,{className:"ml-0 mr-0"},c.a.createElement(s.c,{md:"6",lg:"6",sm:"12"},c.a.createElement("div",{className:"md-form mt-0"},c.a.createElement("input",{className:"form-control",type:"text",value:C,onChange:function(e){S(e.target.value),""===e.target.value&&S(""),b(1)},placeholder:"Search","aria-label":"Search",name:"search",id:"search"})),c.a.createElement("h5",{className:"mt-5"},x)),c.a.createElement(s.c,{md:"6",lg:"6",sm:"12",className:"word-wrap"},c.a.createElement("div",{className:"form-group mt-2"},c.a.createElement("select",{className:"form-control",value:E,onChange:function(e){h(parseInt(e.target.value))},name:"limit",id:"limit"},c.a.createElement("option",{value:"5"},"5"),c.a.createElement("option",{value:"10"},"10"),c.a.createElement("option",{value:"20"},"20"))))),c.a.createElement(s.n,{className:"mr-0 mt-5"},c.a.createElement("div",{className:"ml-5"},c.a.createElement(g.a,{activePage:v,itemsCountPerPage:E,totalItemsCount:w,pageRangeDisplayed:5,itemClass:"page-item",linkClass:"page-link",onChange:function(e){b(e)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.395815fe.chunk.js.map