(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{e7gu:function(e,t,n){"use strict";n.r(t);var o=n("8Kt/"),a=n.n(o),r=n("q1tI"),c=n.n(r),i=n("vDqi"),u=n.n(i),l=n("gzFH"),s=c.a.createElement;t.default=function(){var e=Object(r.useState)(!0),t=e[0],n=e[1],o=Object(r.useState)(),i=o[0],m=o[1],g=Object(r.useState)(),d=g[0],f=g[1],h=Object(r.useState)("todos"),v=h[0],b=h[1];function p(e,t){return e[1].nome<t[1].nome?-1:e[1].nome>t[1].nome?1:0}return Object(r.useEffect)((function(){if(i){var e=Object.entries(i);e.sort(p),f(e)}}),[i]),Object(r.useEffect)((function(){n(!0),u.a.get("https://aguaviva-rp.firebaseio.com/teste.json").then((function(e){m(e.data),n(!1)}))}),[]),s(c.a.Fragment,null,s(a.a,null,s("title",null,"Igreja Batista \xc1gua Viva - Ribeir\xe3o Pires")),s("div",{className:"container"},s("div",{className:"header"},s("img",{src:"/images/logo.jpg"}),s("h1",null,"Listagem de controle de presen\xe7a no culto")),i&&s(c.a.Fragment,null,s("div",{className:"select"},s("label",null,"Selecione a listagem do culto que deseja ver"),s("select",{onChange:function(e){b(e.target.value)}},s("option",{value:"todos"},"Todos"),s("option",{value:"manha"},"Domingo - 9hs"),s("option",{value:"noite"},"Domingo - 18hs"))),"manha"==v&&s(l.a,{titulo:"Domingo - 9hs",culto:"manha",orderListagem:d,remocao:!0,chegada:!1}),"noite"==v&&s(l.a,{titulo:"Domingo - 18hs",culto:"noite",orderListagem:d,remocao:!0,chegada:!1}),"todos"==v&&s(c.a.Fragment,null,s(l.a,{titulo:"Domingo - 9hs",culto:"manha",orderListagem:d,remocao:!0,chegada:!1}),s(l.a,{titulo:"Domingo - 18hs",culto:"noite",orderListagem:d,remocao:!0,chegada:!1}))),t&&s("p",null,"Carregando..."),s("div",{className:"box-voltar"},s("a",{href:"/",className:"button"},"Voltar"))))}},gzFH:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var o=n("rePB"),a=n("q1tI"),r=n.n(a),c=n("vDqi"),i=n.n(c),u=r.a.createElement;function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){var t=e.titulo,n=e.culto,o=e.orderListagem,a=e.remocao,c=e.chegada,l=e.setControle,m=e.controle,g=function(e,t){i.a.delete(e).then((function(){alert("voc\xea removeu ".concat(t.nome," da listagem")),window.location="/remocao.html"}))},d=function(e,t){i.a.put(e,t).then((function(){}))};return u(r.a.Fragment,null,u("h1",null,t),u("table",null,u("thead",null,u("tr",null,u("th",null,"Nome"),u("th",null,"Rede"),c&&u("th",null,"Controle Servos"),a&&u("th",null,"Status"))),u("tbody",null,o&&u(r.a.Fragment,null,o.map((function(e){return u(r.a.Fragment,null,e.map((function(t){if(t.culto==n)return u("tr",{key:t},u("td",null,t.nome," ",t.sobrenome),u("td",null,"Pr ",t.rede),c&&u("td",{onClick:function(n){return o=e[0],a=t,l(!m),void(a.chegada?d("https://aguaviva-rp.firebaseio.com/teste/".concat(o,".json"),s({},a,{chegada:!1})):d("https://aguaviva-rp.firebaseio.com/teste/".concat(o,".json"),s({},a,{chegada:!0})));var o,a}},t.chegada?u("img",{src:"images/carraca.svg",className:"certo"}):u("img",{src:"images/carraca.svg",className:"nao_certo"})),a&&u("td",null,u("button",{className:"remove",onClick:function(n){return o=e[0],a=t,void g("https://aguaviva-rp.firebaseio.com/teste/".concat(o,".json"),a);var o,a}},"Remover")))})))}))))))}},k0Z7:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/remocao",function(){return n("e7gu")}])},rePB:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}))}},[["k0Z7",0,1,2]]]);