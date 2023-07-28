webpackHotUpdate_N_E("pages/hashiras",{

/***/ "./pages/hashiras/index.js":
/*!*********************************!*\
  !*** ./pages/hashiras/index.js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
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
      lineNumber: 22,
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
            lineNumber: 27,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, _this)
      }, Hashiras.id, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_s(Hashiras, "Mo2RFjxy46ORAHBMffvjTbSdt8w=", false, function () {
  return [react_query__WEBPACK_IMPORTED_MODULE_6__["useQuery"]];
});

_c = Hashiras;
var __N_SSG = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGFzaGlyYXMvaW5kZXguanMiXSwibmFtZXMiOlsiZmV0Y2hQb3N0cyIsImF4aW9zIiwicmVzIiwiZGF0YSIsIkhhc2hpcmFzIiwidXNlUXVlcnkiLCJpc0Vycm9yIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJtYXAiLCJpZCIsInN0YXlsZXMiLCJzaW5nbGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVTtBQUFBLGtWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0NDLHFEQUFLLENBQ3JCLHNEQURxQixDQUROOztBQUFBO0FBQ1hDLGVBRFc7QUFBQSw2Q0FJVkEsR0FBRyxDQUFDQyxJQUpNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVZILFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEI7O0FBV0EsSUFBTUksUUFBUSxHQUFHLHlCQUFrQjtBQUFBOztBQUFBLE1BQWZBLFFBQWUsU0FBZkEsUUFBZTs7QUFBQSxrQkFDV0MsNERBQVEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxFQUFjTCxVQUFkLENBRG5CO0FBQUEsTUFDekJHLElBRHlCLGFBQ3pCQSxJQUR5QjtBQUFBLE1BQ25CRyxPQURtQixhQUNuQkEsT0FEbUI7QUFBQSxNQUNWQyxLQURVLGFBQ1ZBLEtBRFU7QUFBQSxNQUNIQyxTQURHLGFBQ0hBLFNBREc7O0FBR2pDLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHTCxJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFDTCxRQUFELEVBQWM7QUFDdEIsMEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLHNCQUFlQSxRQUFRLENBQUNNLEVBQXhCLENBQVY7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUVDLGlFQUFPLENBQUNDLE1BQXRCO0FBQUEsaUNBQ0U7QUFBQSxzQkFBS1IsUUFBUSxDQUFDUztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBNkNULFFBQVEsQ0FBQ00sRUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0QsS0FSQSxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0FqQkQ7O0dBQU1OLFE7VUFDd0NDLG9EOzs7S0FEeENELFE7O0FBbUJTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9oYXNoaXJhcy42NTNlYTMxYjIzZWU4M2UyMjU0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xyXG5pbXBvcnQgc3RheWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2hhc2hpcmEubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5LCBkZWh5ZHJhdGUsIFF1ZXJ5Q2xpZW50IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XHJcblxyXG5jb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKFxyXG4gICAgXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnM/X2xpbWl0PTEwXCJcclxuICApO1xyXG4gIHJldHVybiByZXMuZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xyXG4gIGF3YWl0IHF1ZXJ5Q2xpZW50LnByZWZldGNoUXVlcnkoW1wicG9zdHNcIl0sIGdldFBvc3RzKTtcclxufVxyXG5jb25zdCBIYXNoaXJhcyA9ICh7IEhhc2hpcmFzIH0pID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGlzRXJyb3IsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5KFtcImhhc2hpcmFcIl0sIGZldGNoUG9zdHMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkhhc2hpcmFzPC9oMT5cclxuICAgICAge2RhdGEubWFwKChIYXNoaXJhcykgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL2hhc2hpcmFzLyR7SGFzaGlyYXMuaWR9YH0ga2V5PXtIYXNoaXJhcy5pZH0+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3RheWxlcy5zaW5nbGV9PlxyXG4gICAgICAgICAgICAgIDxoMz57SGFzaGlyYXMubmFtZX08L2gzPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGFzaGlyYXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=