webpackHotUpdate("static\\development\\pages\\controle.js",{

/***/ "./pages/controle.jsx":
/*!****************************!*\
  !*** ./pages/controle.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/List */ "./src/components/List.jsx");
/* harmony import */ var _src_helpers_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/helpers/url */ "./src/helpers/url.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Page() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      orderListagem = _useState3[0],
      setOrderListagem = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("todos"),
      listagem = _useState4[0],
      setListagem = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      controle = _useState5[0],
      setControle = _useState5[1];

  var url = "https://aguaviva-rp.firebaseio.com/teste.json";

  function compared(a, b) {
    if (a[1].nome < b[1].nome) return -1;
    if (a[1].nome > b[1].nome) return 1;
    return 0;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (data) {
      var array = Object.entries(data);
      array.sort(compared);
      setOrderListagem(array);
    }
  }, [data]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setTimeout(function () {
      setLoading(true);
      setOrderListagem;
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(function (res) {
        setData(res.data);
        setLoading(false);
      });
    }, 500);
  }, [controle]);
  console.log(orderListagem, "order");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, __jsx("title", null, "Igreja Batista \xC1gua Viva - Ribeir\xE3o Pires")), __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "header"
  }, __jsx("img", {
    src: "/images/logo.jpg"
  }), __jsx("h1", null, "Listagem de controle de presen\xE7a no culto")), data && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "select"
  }, __jsx("label", null, "Selecione a listagem do culto que deseja ver"), __jsx("select", {
    onChange: function onChange(e) {
      setListagem(e.target.value);
    }
  }, __jsx("option", {
    value: "todos"
  }, "Todos"), __jsx("option", {
    value: "manha"
  }, "Domingo - 9hs"), __jsx("option", {
    value: "noite"
  }, "Domingo - 18hs"))), listagem == "manha" && __jsx(_src_components_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    titulo: "Domingo - 9hs",
    culto: "manha",
    orderListagem: orderListagem,
    chegada: true,
    setControle: setControle,
    controle: controle
  }), listagem == "noite" && __jsx(_src_components_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    titulo: "Domingo - 18hs",
    culto: "noite",
    orderListagem: orderListagem,
    chegada: true,
    setControle: setControle,
    controle: controle
  }), listagem == "todos" && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_src_components_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    titulo: "Domingo - 9hs",
    culto: "manha",
    orderListagem: orderListagem,
    chegada: true,
    setControle: setControle,
    controle: controle
  }), __jsx(_src_components_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    titulo: "Domingo - 18hs",
    culto: "noite",
    orderListagem: orderListagem,
    chegada: true,
    setControle: setControle,
    controle: controle
  })), __jsx("div", {
    className: "box-voltar"
  }, __jsx("a", {
    href: "/",
    className: "button"
  }, "Voltar"))), loading && __jsx("p", {
    className: "carregando"
  }, __jsx("img", {
    src: "/images/loading.gif"
  }), __jsx("span", null, "Carregando..."))));
}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=controle.js.64b83a1446bc24dd622b.hot-update.js.map