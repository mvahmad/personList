webpackHotUpdate_N_E("pages/hashiras",{

/***/ "./pages/hashiras/index.js":
/*!*********************************!*\
  !*** ./pages/hashiras/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Cod_nevisie_next_project_demo_hashiralist_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Cod_nevisie_next_project_demo_hashiralist_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Cod_nevisie_next_project_demo_hashiralist_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Cod_nevisie_next_project_demo_hashiralist_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_hashira_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/hashira.module.css */ "./styles/hashira.module.css");
/* harmony import */ var _styles_hashira_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_hashira_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");




var _jsxFileName = "D:\\Cod nevisie\\next project\\demo\\hashiralist\\pages\\hashiras\\index.js",
    _this = undefined,
    _s = $RefreshSig$();






var fetchPosts = /*#__PURE__*/function () {
  var _ref = Object(D_Cod_nevisie_next_project_demo_hashiralist_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Cod_nevisie_next_project_demo_hashiralist_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var res;
    return D_Cod_nevisie_next_project_demo_hashiralist_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(axios__WEBPACK_IMPORTED_MODULE_5__["default"])("https://jsonplaceholder.typicode.com/users?_limit=10");

          case 2:
            res = _context.sent;
            return _context.abrupt("return", res.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchPosts() {
    return _ref.apply(this, arguments);
  };
}();

var Hashiras = function Hashiras(_ref2) {
  _s();

  var Hashiras = _ref2.Hashiras;

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(["hashira"], fetchPosts),
      data = _useQuery.data,
      isError = _useQuery.isError,
      error = _useQuery.error,
      isLoading = _useQuery.isLoading;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Hashiras"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), data.map(function (Hashiras) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/hashiras/".concat(Hashiras.id),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: _styles_hashira_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.single,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: Hashiras.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, _this)
      }, Hashiras.id, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(Hashiras, "Mo2RFjxy46ORAHBMffvjTbSdt8w=", false, function () {
  return [react_query__WEBPACK_IMPORTED_MODULE_6__["useQuery"]];
});

_c = Hashiras;
/* harmony default export */ __webpack_exports__["default"] = (Hashiras);

var _c;

$RefreshReg$(_c, "Hashiras");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGFzaGlyYXMvaW5kZXguanMiXSwibmFtZXMiOlsiZmV0Y2hQb3N0cyIsImF4aW9zIiwicmVzIiwiZGF0YSIsIkhhc2hpcmFzIiwidXNlUXVlcnkiLCJpc0Vycm9yIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJtYXAiLCJpZCIsInN0YXlsZXMiLCJzaW5nbGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVO0FBQUEsa1ZBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDQ0MscURBQUssQ0FDckIsc0RBRHFCLENBRE47O0FBQUE7QUFDWEMsZUFEVztBQUFBLDZDQUlWQSxHQUFHLENBQUNDLElBSk07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVkgsVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQjs7QUFNQSxJQUFNSSxRQUFRLEdBQUcseUJBQWtCO0FBQUE7O0FBQUEsTUFBZkEsUUFBZSxTQUFmQSxRQUFlOztBQUFBLGtCQUNXQyw0REFBUSxDQUFDLENBQUMsU0FBRCxDQUFELEVBQWNMLFVBQWQsQ0FEbkI7QUFBQSxNQUN6QkcsSUFEeUIsYUFDekJBLElBRHlCO0FBQUEsTUFDbkJHLE9BRG1CLGFBQ25CQSxPQURtQjtBQUFBLE1BQ1ZDLEtBRFUsYUFDVkEsS0FEVTtBQUFBLE1BQ0hDLFNBREcsYUFDSEEsU0FERzs7QUFHakMsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUdMLElBQUksQ0FBQ00sR0FBTCxDQUFTLFVBQUNMLFFBQUQsRUFBYztBQUN0QiwwQkFDRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksc0JBQWVBLFFBQVEsQ0FBQ00sRUFBeEIsQ0FBVjtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBRUMsaUVBQU8sQ0FBQ0MsTUFBdEI7QUFBQSxpQ0FDRTtBQUFBLHNCQUFLUixRQUFRLENBQUNTO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUE2Q1QsUUFBUSxDQUFDTSxFQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFPRCxLQVJBLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQWpCRDs7R0FBTU4sUTtVQUN3Q0Msb0Q7OztLQUR4Q0QsUTtBQW1CU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaGFzaGlyYXMuZmU1NDZmNTllNTBlMTdjNDNjNjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcclxuaW1wb3J0IHN0YXlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9oYXNoaXJhLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgZGVoeWRyYXRlLCBRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xyXG5cclxuY29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyhcclxuICAgIFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzP19saW1pdD0xMFwiXHJcbiAgKTtcclxuICByZXR1cm4gcmVzLmRhdGE7XHJcbn07XHJcbmNvbnN0IEhhc2hpcmFzID0gKHsgSGFzaGlyYXMgfSkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgaXNFcnJvciwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoW1wiaGFzaGlyYVwiXSwgZmV0Y2hQb3N0cyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+SGFzaGlyYXM8L2gxPlxyXG4gICAgICB7ZGF0YS5tYXAoKEhhc2hpcmFzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaGFzaGlyYXMvJHtIYXNoaXJhcy5pZH1gfSBrZXk9e0hhc2hpcmFzLmlkfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdGF5bGVzLnNpbmdsZX0+XHJcbiAgICAgICAgICAgICAgPGgzPntIYXNoaXJhcy5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIYXNoaXJhcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==