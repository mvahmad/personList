webpackHotUpdate_N_E("pages/hashiras",{

/***/ "./pages/hashiras/index.js":
/*!*********************************!*\
  !*** ./pages/hashiras/index.js ***!
  \*********************************/
/*! exports provided: fetchPosts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPosts", function() { return fetchPosts; });
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
      data = _useQuery.data;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Hashiras"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
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
            lineNumber: 21,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, _this)
      }, Hashiras.id, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_s(Hashiras, "JtionF1PqWN50DPWu724eJIU2SM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGFzaGlyYXMvaW5kZXguanMiXSwibmFtZXMiOlsiZmV0Y2hQb3N0cyIsImF4aW9zIiwicmVzIiwiZGF0YSIsIkhhc2hpcmFzIiwidXNlUXVlcnkiLCJtYXAiLCJpZCIsInN0YXlsZXMiLCJzaW5nbGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxVQUFVO0FBQUEsa1ZBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDTkMscURBQUssQ0FDckIsc0RBRHFCLENBREM7O0FBQUE7QUFDbEJDLGVBRGtCO0FBQUEsNkNBSWpCQSxHQUFHLENBQUNDLElBSmE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVkgsVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQjs7QUFNUCxJQUFNSSxRQUFRLEdBQUcseUJBQWtCO0FBQUE7O0FBQUEsTUFBZkEsUUFBZSxTQUFmQSxRQUFlOztBQUFBLGtCQUNoQkMsNERBQVEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxFQUFjTCxVQUFkLENBRFE7QUFBQSxNQUN6QkcsSUFEeUIsYUFDekJBLElBRHlCOztBQUVqQyxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFR0EsSUFBSSxDQUFDRyxHQUFMLENBQVMsVUFBQ0YsUUFBRCxFQUFjO0FBQ3RCLDBCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxzQkFBZUEsUUFBUSxDQUFDRyxFQUF4QixDQUFWO0FBQUEsK0JBQ0U7QUFBRyxtQkFBUyxFQUFFQyxpRUFBTyxDQUFDQyxNQUF0QjtBQUFBLGlDQUNFO0FBQUEsc0JBQUtMLFFBQVEsQ0FBQ007QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQTZDTixRQUFRLENBQUNHLEVBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELEtBUkEsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBaEJEOztHQUFNSCxRO1VBQ2FDLG9EOzs7S0FEYkQsUTtBQWtCU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaGFzaGlyYXMuNThiMDM4MmRmMmU3NWJkNzY0M2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcclxuaW1wb3J0IHN0YXlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9oYXNoaXJhLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUG9zdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MoXHJcbiAgICBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycz9fbGltaXQ9MTBcIlxyXG4gICk7XHJcbiAgcmV0dXJuIHJlcy5kYXRhO1xyXG59O1xyXG5jb25zdCBIYXNoaXJhcyA9ICh7IEhhc2hpcmFzIH0pID0+IHtcclxuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KFtcImhhc2hpcmFcIl0sIGZldGNoUG9zdHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+SGFzaGlyYXM8L2gxPlxyXG4gICAgICB7ZGF0YS5tYXAoKEhhc2hpcmFzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaGFzaGlyYXMvJHtIYXNoaXJhcy5pZH1gfSBrZXk9e0hhc2hpcmFzLmlkfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdGF5bGVzLnNpbmdsZX0+XHJcbiAgICAgICAgICAgICAgPGgzPntIYXNoaXJhcy5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIYXNoaXJhcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==