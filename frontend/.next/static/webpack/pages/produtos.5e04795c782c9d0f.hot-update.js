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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dialog */ \"./components/Dialog.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Card(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), listProducts = ref[0], setListProducts = ref[1];\n    console.log(listProducts);\n    console.log(setListProducts);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"http://localhost:3002/getProdutos\").then(function(response) {\n            setListProducts(response.data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_s(Card, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhYmxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUN6QjtBQUNvQjs7QUFHOUIsUUFBUSxDQUFDSyxJQUFJLENBQUNDLEtBQUssRUFBRSxDQUFDOztJQUVuQyxHQUFLLENBQW1DTCxHQUFVLEdBQVZBLCtDQUFRLElBQXpDTSxZQUFZLEdBQXFCTixHQUFVLEtBQTdCTyxlQUFlLEdBQUlQLEdBQVU7SUFFbERRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxZQUFZLENBQUMsQ0FBQztJQUMxQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLGVBQWUsQ0FBQyxDQUFDO0lBRTdCTixnREFBUyxDQUFDLFFBQ1gsR0FEZSxDQUFDO1FBRWJDLGdEQUFTLENBQUMsQ0FBbUMsb0NBQUVTLElBQUksQ0FBQyxRQUFRLENBQVBDLFFBQVEsRUFBRyxDQUFDO1lBQy9ETCxlQUFlLENBQUNLLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQztJQUVILENBQUMsRUFBQyxDQUFDLENBQUM7SUFFSixNQUFNO0FBTVIsQ0FBQztHQXJCdUJULElBQUk7S0FBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RhYmxlLmpzPzIwMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IEZvcm1EaWFsb2cgZnJvbSAnLi4vY29tcG9uZW50cy9EaWFsb2cnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQocHJvcHMpIHtcclxuXHJcbiAgY29uc3QgW2xpc3RQcm9kdWN0cywgc2V0TGlzdFByb2R1Y3RzXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGxpc3RQcm9kdWN0cyk7XHJcbiAgY29uc29sZS5sb2coc2V0TGlzdFByb2R1Y3RzKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgQXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAyL2dldFByb2R1dG9zXCIpLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICBzZXRMaXN0UHJvZHVjdHMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KVxyXG5cclxuICB9LFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIFxyXG4gICAgXHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBeGlvcyIsIkZvcm1EaWFsb2ciLCJDYXJkIiwicHJvcHMiLCJsaXN0UHJvZHVjdHMiLCJzZXRMaXN0UHJvZHVjdHMiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Table.js\n");

/***/ })

});