(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"9fva":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/listagem",function(){return n("9yy3")}])},"9yy3":function(e,t,n){"use strict";n.r(t);var o=n("8Kt/"),a=n.n(o),r=n("q1tI"),c=n.n(r),i=n("vDqi"),l=n.n(i),u=n("gzFH"),s=c.a.createElement;t.default=function(){var e=Object(r.useState)(!0),t=e[0],n=e[1],o=Object(r.useState)(),i=o[0],m=o[1],g=Object(r.useState)(),f=g[0],d=g[1],v=Object(r.useState)("todos"),b=v[0],p=v[1];function h(e,t){return e[1].nome<t[1].nome?-1:e[1].nome>t[1].nome?1:0}return Object(r.useEffect)((function(){if(i){var e=Object.entries(i);e.sort(h),d(e)}}),[i]),Object(r.useEffect)((function(){n(!0),l.a.get("https://aguaviva-rp.firebaseio.com/teste.json").then((function(e){m(e.data),n(!1)}))}),[]),s(c.a.Fragment,null,s(a.a,null,s("title",null,"Igreja Batista \xc1gua Viva - Ribeir\xe3o Pires")),s("div",{className:"container"},s("div",{className:"header"},s("img",{src:"/images/logo.jpg"}),s("h1",null,"Listagem de controle de presen\xe7a no culto")),i&&s(c.a.Fragment,null,s("div",{className:"select"},s("label",null,"Selecione a listagem do culto que deseja ver"),s("select",{onChange:function(e){p(e.target.value)}},s("option",{value:"todos"},"Todos"),s("option",{value:"manha"},"Domingo - 9hs"),s("option",{value:"noite"},"Domingo - 18hs"))),"manha"==b&&s(u.a,{titulo:"Domingo - 9hs",culto:"manha",orderListagem:f}),"noite"==b&&s(u.a,{titulo:"Domingo - 18hs",culto:"noite",orderListagem:f}),"todos"==b&&s(c.a.Fragment,null,s(u.a,{titulo:"Domingo - 9hs",culto:"manha",orderListagem:f}),s(u.a,{titulo:"Domingo - 18hs",culto:"noite",orderListagem:f})),s("div",{className:"box-voltar"},s("a",{href:"/",className:"button"},"Voltar"))),t&&s("p",{className:"carregando"},s("img",{src:"/images/loading.gif"}),s("span",null,"Carregando..."))))}},gzFH:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var o=n("rePB"),a=n("q1tI"),r=n.n(a),c=n("vDqi"),i=n.n(c),l=r.a.createElement;function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){var t=e.titulo,n=e.culto,o=e.orderListagem,a=e.remocao,c=e.chegada,u=e.setControle,m=e.controle,g=function(e,t){i.a.delete(e).then((function(){alert("voc\xea removeu ".concat(t.nome," da listagem")),window.location="/remocao.html"}))},f=function(e,t){i.a.put(e,t).then((function(){}))};return l(r.a.Fragment,null,l("h1",null,t),l("table",null,l("thead",null,l("tr",null,l("th",null,"Nome"),l("th",null,"Rede"),c&&l("th",null,"Controle Servos"),a&&l("th",null,"Status"))),l("tbody",null,o&&l(r.a.Fragment,null,o.map((function(e){return l(r.a.Fragment,null,e.map((function(t){if(t.culto==n)return l("tr",{key:t},l("td",null,t.nome," ",t.sobrenome),l("td",null,"Pr ",t.rede),c&&l("td",{onClick:function(n){return o=e[0],a=t,u(!m),void(a.chegada?f("https://aguaviva-rp.firebaseio.com/teste/".concat(o,".json"),s({},a,{chegada:!1})):f("https://aguaviva-rp.firebaseio.com/teste/".concat(o,".json"),s({},a,{chegada:!0})));var o,a}},t.chegada?l("img",{src:"images/carraca.svg",className:"certo"}):l("img",{src:"images/carraca.svg",className:"nao_certo"})),a&&l("td",null,l("button",{className:"remove",onClick:function(n){return o=e[0],a=t,void g("https://aguaviva-rp.firebaseio.com/teste/".concat(o,".json"),a);var o,a}},"Remover")))})))}))))))}},rePB:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}))}},[["9fva",0,1,2]]]);