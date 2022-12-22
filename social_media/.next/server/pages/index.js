"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./Layout/Layout.jsx":
/*!***************************!*\
  !*** ./Layout/Layout.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Layout = ({ children  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-4xl m-auto\",\n            children: children\n        }, void 0, false, {\n            fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\Layout\\\\Layout.jsx\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\Layout\\\\Layout.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9MYXlvdXQvTGF5b3V0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTBCO0FBRTFCLE1BQU1DLFNBQVMsQ0FBQyxFQUFFQyxTQUFRLEVBQUUsR0FBSztJQUMvQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFBb0JGOzs7Ozs7Ozs7OztBQUd6QztBQUVBLGlFQUFlRCxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29jaWFsX21lZGlhLy4vTGF5b3V0L0xheW91dC5qc3g/YmJjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG0tYXV0b1wiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsImNoaWxkcmVuIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Layout/Layout.jsx\n");

/***/ }),

/***/ "./components/DateFormat.js":
/*!**********************************!*\
  !*** ./components/DateFormat.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_time_ago__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-time-ago */ \"react-time-ago\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ \"date-fns\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_time_ago__WEBPACK_IMPORTED_MODULE_2__]);\nreact_time_ago__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction DateFormat({ timestamp  }) {\n    let timeAgo = \"\";\n    if (timestamp) {\n        const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.parseISO)(timestamp);\n        const timePeriod = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.formatDistanceToNow)(date);\n        timeAgo = `${timePeriod} ago`;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-gray-500 font-semibold\",\n        children: [\n            \" \\xa0 \",\n            timeAgo\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\components\\\\DateFormat.js\",\n        lineNumber: 13,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateFormat);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RhdGVGb3JtYXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNnQjtBQUVlO0FBRXpELFNBQVNJLFdBQVcsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDakMsSUFBSUMsVUFBVTtJQUNkLElBQUlELFdBQVc7UUFDYixNQUFNRSxPQUFPTCxrREFBUUEsQ0FBQ0c7UUFDdEIsTUFBTUcsYUFBYUwsNkRBQW1CQSxDQUFDSTtRQUN2Q0QsVUFBVSxDQUFDLEVBQUVFLFdBQVcsSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFDRCxxQkFBTyw4REFBQ0M7UUFBSUMsV0FBVTs7WUFBOEI7WUFBU0o7Ozs7Ozs7QUFDL0Q7QUFFQSxpRUFBZUYsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvY2lhbF9tZWRpYS8uL2NvbXBvbmVudHMvRGF0ZUZvcm1hdC5qcz9jYmE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0VGltZUFnbyBmcm9tIFwicmVhY3QtdGltZS1hZ29cIjtcclxuXHJcbmltcG9ydCB7IHBhcnNlSVNPLCBmb3JtYXREaXN0YW5jZVRvTm93IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5mdW5jdGlvbiBEYXRlRm9ybWF0KHsgdGltZXN0YW1wIH0pIHtcclxuICBsZXQgdGltZUFnbyA9IFwiXCI7XHJcbiAgaWYgKHRpbWVzdGFtcCkge1xyXG4gICAgY29uc3QgZGF0ZSA9IHBhcnNlSVNPKHRpbWVzdGFtcCk7XHJcbiAgICBjb25zdCB0aW1lUGVyaW9kID0gZm9ybWF0RGlzdGFuY2VUb05vdyhkYXRlKTtcclxuICAgIHRpbWVBZ28gPSBgJHt0aW1lUGVyaW9kfSBhZ29gO1xyXG4gIH1cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGZvbnQtc2VtaWJvbGRcIj4gJm5ic3A7IHt0aW1lQWdvfTwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZUZvcm1hdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RUaW1lQWdvIiwicGFyc2VJU08iLCJmb3JtYXREaXN0YW5jZVRvTm93IiwiRGF0ZUZvcm1hdCIsInRpbWVzdGFtcCIsInRpbWVBZ28iLCJkYXRlIiwidGltZVBlcmlvZCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DateFormat.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ \"next/Link\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout/Layout */ \"./Layout/Layout.jsx\");\n/* harmony import */ var _components_DateFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DateFormat */ \"./components/DateFormat.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_DateFormat__WEBPACK_IMPORTED_MODULE_4__]);\n_components_DateFormat__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction Home({ response  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Blogs\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\index.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\index.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-32\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"blogs/blogForm\",\n                            className: \"px-10 py-3 rounded-xl border-2 bg-gray-50\",\n                            children: \"New Blog\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\index.js\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, this),\n                        response.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-4 bg-gray-50 p-[2rem] rounded-xl shadow-sm border-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-xl font-semibold tracking-wide text-gray-700 hover:underline hover:cursor-pointer\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: `/blogs/${item.id}`,\n                                            children: item.title\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\index.js\",\n                                            lineNumber: 28,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\index.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DateFormat__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        timestamp: item.created_at\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\index.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg mt-5\",\n                                        children: item.body.substring(0, 200)\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\index.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, item.id, true, {\n                                fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\index.js\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\index.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nasync function getStaticProps() {\n    const data = await fetch(\"http://localhost:8000/api/blogs/\");\n    const response = await data.json();\n    return {\n        props: {\n            response\n        }\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDQTtBQUVTO0FBQ1k7QUFFbkMsU0FBU0ksS0FBSyxFQUFFQyxTQUFRLEVBQUUsRUFBRTtJQUN6QyxxQkFDRTs7MEJBQ0UsOERBQUNKLGtEQUFJQTs7a0NBQ0gsOERBQUNLO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRWhDLDhEQUFDUCxzREFBTUE7MEJBQ0wsNEVBQUNRO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ1gsa0RBQUlBOzRCQUNIWSxNQUFNOzRCQUNORCxXQUFVO3NDQUNYOzs7Ozs7d0JBR0FOLFNBQVNRLEdBQUcsQ0FBQyxDQUFDQyxxQkFDYiw4REFBQ0o7Z0NBRUNDLFdBQVU7O2tEQUVWLDhEQUFDSTt3Q0FBR0osV0FBVTtrREFDWiw0RUFBQ1gsa0RBQUlBOzRDQUFDWSxNQUFNLENBQUMsT0FBTyxFQUFFRSxLQUFLRSxFQUFFLENBQUMsQ0FBQztzREFBR0YsS0FBS1IsS0FBSzs7Ozs7Ozs7Ozs7a0RBRTlDLDhEQUFDSCw4REFBVUE7d0NBQUNjLFdBQVdILEtBQUtJLFVBQVU7Ozs7OztrREFDdEMsOERBQUNDO3dDQUFFUixXQUFVO2tEQUFnQkcsS0FBS00sSUFBSSxDQUFDQyxTQUFTLENBQUMsR0FBRzs7Ozs7OzsrQkFQL0NQLEtBQUtFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWMxQixDQUFDO0FBRU0sZUFBZU0saUJBQWlCO0lBQ3JDLE1BQU1DLE9BQU8sTUFBTUMsTUFBTTtJQUN6QixNQUFNbkIsV0FBVyxNQUFNa0IsS0FBS0UsSUFBSTtJQUNoQyxPQUFPO1FBQ0xDLE9BQU87WUFDTHJCO1FBQ0Y7SUFDRjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NpYWxfbWVkaWEvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vTGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgRGF0ZUZvcm1hdCBmcm9tIFwiLi4vY29tcG9uZW50cy9EYXRlRm9ybWF0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcmVzcG9uc2UgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QmxvZ3M8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMzJcIj5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9e1wiYmxvZ3MvYmxvZ0Zvcm1cIn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMTAgcHktMyByb3VuZGVkLXhsIGJvcmRlci0yIGJnLWdyYXktNTBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBOZXcgQmxvZ1xyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAge3Jlc3BvbnNlLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTQgYmctZ3JheS01MCBwLVsycmVtXSByb3VuZGVkLXhsIHNoYWRvdy1zbSBib3JkZXItMlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMCBob3Zlcjp1bmRlcmxpbmUgaG92ZXI6Y3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZ3MvJHtpdGVtLmlkfWB9PntpdGVtLnRpdGxlfTwvTGluaz5cclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxEYXRlRm9ybWF0IHRpbWVzdGFtcD17aXRlbS5jcmVhdGVkX2F0fSAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbXQtNVwiPntpdGVtLmJvZHkuc3Vic3RyaW5nKDAsIDIwMCl9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2Jsb2dzL1wiKTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICByZXNwb25zZSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsIkhlYWQiLCJMYXlvdXQiLCJEYXRlRm9ybWF0IiwiSG9tZSIsInJlc3BvbnNlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwibWFwIiwiaXRlbSIsImgxIiwiaWQiLCJ0aW1lc3RhbXAiLCJjcmVhdGVkX2F0IiwicCIsImJvZHkiLCJzdWJzdHJpbmciLCJnZXRTdGF0aWNQcm9wcyIsImRhdGEiLCJmZXRjaCIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/Link");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-time-ago":
/*!*********************************!*\
  !*** external "react-time-ago" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("react-time-ago");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();