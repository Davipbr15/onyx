"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/produtos",{

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dialog */ \"./components/Dialog.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Card(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), listProducts = ref[0], setListProducts = ref[1];\n    console.log(listProducts);\n    console.log(setListProducts);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"http://localhost:3002/getProdutos\").then(function(response) {\n            setListProducts(response.data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"flex mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-3 text-black bg-blue-500 w-64 mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"pt-3 items-center justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            class: \"\",\n                            children: props.produto\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\Onyx\\\\reactback\\\\frontend\\\\components\\\\Table.js\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\Onyx\\\\reactback\\\\frontend\\\\components\\\\Table.js\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: props.desc\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\Onyx\\\\reactback\\\\frontend\\\\components\\\\Table.js\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"R$\",\n                                props.preco\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\Onyx\\\\reactback\\\\frontend\\\\components\\\\Table.js\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"items-center mx-auto space-y-2 space-x-2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\Onyx\\\\reactback\\\\frontend\\\\components\\\\Table.js\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\Onyx\\\\reactback\\\\frontend\\\\components\\\\Table.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\Onyx\\\\reactback\\\\frontend\\\\components\\\\Table.js\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\wamp64\\\\www\\\\Onyx\\\\reactback\\\\frontend\\\\components\\\\Table.js\",\n            lineNumber: 23,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}; /*\r\n<div class=\"flex flex-row flex-wrap mx-auto w-64\">\r\n    <div className=\"m-3 text-black\">\r\n    <img class=\"hover:grow hover:shadow-lg\" src=\"https://www.ofertaviva.com.br/photo-2/lucky-mystery-box-100-surpresa-presente-mais-produtos-eletronicos-smartwatch-placa-de-video-computador-portatil-tablet-drone.jpg\"/>\r\n      <div class=\"pt-3 items-center justify-between\">\r\n        <p class=\"\">{props.produto}</p>\r\n        <br></br>\r\n            <svg class=\"h-6 w-6 fill-current text-gray-500 hover:text-black\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\r\n          <path d=\"M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z\" />\r\n            </svg>\r\n\r\n        <h2>{props.desc}</h2>\r\n        <h2>R${props.preco}</h2>\r\n        <div\r\n        className=\"items-center mx-auto space-y-2 space-x-2\"\r\n        >\r\n        <button\r\n        className=\"bg-blue-500 w-20\"\r\n        >Alterar</button>\r\n        <button\r\n        className=\"bg-red-500 w-20\"\r\n        >Deletar</button>\r\n    </div>\r\n    </div>\r\n    \r\n    </div>\r\n    </div> \r\n*/ \n_s(Card, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhYmxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUN6QjtBQUNvQjs7QUFHOUIsUUFBUSxDQUFDSyxJQUFJLENBQUNDLEtBQUssRUFBRSxDQUFDOztJQUVuQyxHQUFLLENBQW1DTCxHQUFVLEdBQVZBLCtDQUFRLElBQXpDTSxZQUFZLEdBQXFCTixHQUFVLEtBQTdCTyxlQUFlLEdBQUlQLEdBQVU7SUFFbERRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxZQUFZLENBQUMsQ0FBQztJQUMxQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLGVBQWUsQ0FBQyxDQUFDO0lBRTdCTixnREFBUyxDQUFDLFFBQ1gsR0FEZSxDQUFDO1FBRWJDLGdEQUFTLENBQUMsQ0FBbUMsb0NBQUVTLElBQUksQ0FBQyxRQUFRLENBQVBDLFFBQVEsRUFBRyxDQUFDO1lBQy9ETCxlQUFlLENBQUNLLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQztJQUVILENBQUMsRUFBQyxDQUFDLENBQUM7SUFFSixNQUFNOzhGQUVIQyxDQUFHO1lBQUNDLEtBQUssRUFBQyxDQUFjO2tHQUN4QkQsQ0FBRztnQkFBQ0UsU0FBUyxFQUFDLENBQXlDO3NHQUNyREYsQ0FBRztvQkFBQ0MsS0FBSyxFQUFDLENBQW1DOztvR0FDM0NFLENBQUM7NEJBQUNGLEtBQUssRUFBQyxDQUFFO3NDQUFFVixLQUFLLENBQUNhLE9BQU87Ozs7OztvR0FDekJDLENBQUU7Ozs7O29HQUNGQyxDQUFFO3NDQUFFZixLQUFLLENBQUNnQixJQUFJOzs7Ozs7b0dBQ2RELENBQUU7O2dDQUFDLENBQUU7Z0NBQUNmLEtBQUssQ0FBQ2lCLEtBQUs7Ozs7Ozs7b0dBQ2pCUixDQUFHOzRCQUNKRSxTQUFTLEVBQUMsQ0FBMEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTVELENBQUMsRUFDRCxFQTJCRTtHQTdEc0JaLElBQUk7S0FBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RhYmxlLmpzPzIwMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IEZvcm1EaWFsb2cgZnJvbSAnLi4vY29tcG9uZW50cy9EaWFsb2cnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQocHJvcHMpIHtcclxuXHJcbiAgY29uc3QgW2xpc3RQcm9kdWN0cywgc2V0TGlzdFByb2R1Y3RzXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGxpc3RQcm9kdWN0cyk7XHJcbiAgY29uc29sZS5sb2coc2V0TGlzdFByb2R1Y3RzKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgQXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAyL2dldFByb2R1dG9zXCIpLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICBzZXRMaXN0UHJvZHVjdHMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KVxyXG5cclxuICB9LFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IG14LWF1dG9cIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zIHRleHQtYmxhY2sgYmctYmx1ZS01MDAgdy02NCBteC1hdXRvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwdC0zIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICA8cCBjbGFzcz1cIlwiPntwcm9wcy5wcm9kdXRvfTwvcD5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8aDI+e3Byb3BzLmRlc2N9PC9oMj5cclxuICAgICAgICA8aDI+UiR7cHJvcHMucHJlY299PC9oMj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIG14LWF1dG8gc3BhY2UteS0yIHNwYWNlLXgtMlwiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4gXHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbi8qXHJcbjxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBteC1hdXRvIHctNjRcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zIHRleHQtYmxhY2tcIj5cclxuICAgIDxpbWcgY2xhc3M9XCJob3Zlcjpncm93IGhvdmVyOnNoYWRvdy1sZ1wiIHNyYz1cImh0dHBzOi8vd3d3Lm9mZXJ0YXZpdmEuY29tLmJyL3Bob3RvLTIvbHVja3ktbXlzdGVyeS1ib3gtMTAwLXN1cnByZXNhLXByZXNlbnRlLW1haXMtcHJvZHV0b3MtZWxldHJvbmljb3Mtc21hcnR3YXRjaC1wbGFjYS1kZS12aWRlby1jb21wdXRhZG9yLXBvcnRhdGlsLXRhYmxldC1kcm9uZS5qcGdcIi8+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwdC0zIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICA8cCBjbGFzcz1cIlwiPntwcm9wcy5wcm9kdXRvfTwvcD5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImgtNiB3LTYgZmlsbC1jdXJyZW50IHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ibGFja1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTEyLDQuNTk1Yy0xLjEwNC0xLjAwNi0yLjUxMi0xLjU1OC0zLjk5Ni0xLjU1OGMtMS41NzgsMC0zLjA3MiwwLjYyMy00LjIxMywxLjc1OGMtMi4zNTMsMi4zNjMtMi4zNTIsNi4wNTksMC4wMDIsOC40MTIgbDcuMzMyLDcuMzMyYzAuMTcsMC4yOTksMC40OTgsMC40OTIsMC44NzUsMC40OTJjMC4zMjIsMCwwLjYwOS0wLjE2MywwLjc5Mi0wLjQwOWw3LjQxNS03LjQxNSBjMi4zNTQtMi4zNTQsMi4zNTQtNi4wNDktMC4wMDItOC40MTZjLTEuMTM3LTEuMTMxLTIuNjMxLTEuNzU0LTQuMjA5LTEuNzU0QzE0LjUxMywzLjAzNywxMy4xMDQsMy41ODksMTIsNC41OTV6IE0xOC43OTEsNi4yMDUgYzEuNTYzLDEuNTcxLDEuNTY0LDQuMDI1LDAuMDAyLDUuNTg4TDEyLDE4LjU4NmwtNi43OTMtNi43OTNDMy42NDUsMTAuMjMsMy42NDYsNy43NzYsNS4yMDUsNi4yMDkgYzAuNzYtMC43NTYsMS43NTQtMS4xNzIsMi43OTktMS4xNzJzMi4wMzUsMC40MTYsMi43ODksMS4xN2wwLjUsMC41YzAuMzkxLDAuMzkxLDEuMDIzLDAuMzkxLDEuNDE0LDBsMC41LTAuNSBDMTQuNzE5LDQuNjk4LDE3LjI4MSw0LjcwMiwxOC43OTEsNi4yMDV6XCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgIDxoMj57cHJvcHMuZGVzY308L2gyPlxyXG4gICAgICAgIDxoMj5SJHtwcm9wcy5wcmVjb308L2gyPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIgbXgtYXV0byBzcGFjZS15LTIgc3BhY2UteC0yXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHctMjBcIlxyXG4gICAgICAgID5BbHRlcmFyPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgdy0yMFwiXHJcbiAgICAgICAgPkRlbGV0YXI8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+IFxyXG4qLyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXhpb3MiLCJGb3JtRGlhbG9nIiwiQ2FyZCIsInByb3BzIiwibGlzdFByb2R1Y3RzIiwic2V0TGlzdFByb2R1Y3RzIiwiY29uc29sZSIsImxvZyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJkaXYiLCJjbGFzcyIsImNsYXNzTmFtZSIsInAiLCJwcm9kdXRvIiwiYnIiLCJoMiIsImRlc2MiLCJwcmVjbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Table.js\n");

/***/ })

});