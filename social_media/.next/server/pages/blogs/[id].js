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
exports.id = "pages/blogs/[id]";
exports.ids = ["pages/blogs/[id]"];
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

/***/ "./pages/blogs/[id].js":
/*!*****************************!*\
  !*** ./pages/blogs/[id].js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Layout/Layout */ \"./Layout/Layout.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_DateFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/DateFormat */ \"./components/DateFormat.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_DateFormat__WEBPACK_IMPORTED_MODULE_4__]);\n_components_DateFormat__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst PostDetail = ({ data  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Blog Detail\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\blogs\\\\[id].js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\blogs\\\\[id].js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-32 bg-gray-50 p-[2rem]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-xl font-semibold\",\n                        children: data.title\n                    }, void 0, false, {\n                        fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\blogs\\\\[id].js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DateFormat__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        timestamp: data.created_at\n                    }, void 0, false, {\n                        fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\blogs\\\\[id].js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg mt-5\",\n                        children: data.body\n                    }, void 0, false, {\n                        fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\blogs\\\\[id].js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\blogs\\\\[id].js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\blogs\\\\[id].js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\nasync function getStaticPaths() {\n    const data = await fetch(\"http://localhost:8000/api/blogs/\");\n    const res = await data.json();\n    const paths = res.map((item)=>{\n        return {\n            params: {\n                id: item.id.toString()\n            }\n        };\n    });\n    return {\n        fallback: false,\n        paths\n    };\n}\nasync function getStaticProps(context) {\n    const id = context.params.id;\n    const blog = await fetch(`http://localhost:8000/api/blogs/${id}/`);\n    const data = await blog.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostDetail);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDZTtBQUNaO0FBRXdCO0FBRXJELE1BQU1JLGFBQWEsQ0FBQyxFQUFFQyxLQUFJLEVBQUUsR0FBSztJQUMvQixxQkFDRSw4REFBQ0osc0RBQU1BOzswQkFDTCw4REFBQ0Msa0RBQUlBOzBCQUNILDRFQUFDSTs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQXlCSCxLQUFLQyxLQUFLOzs7Ozs7a0NBQ2pELDhEQUFDSCw4REFBVUE7d0JBQUNPLFdBQVdMLEtBQUtNLFVBQVU7Ozs7OztrQ0FDdEMsOERBQUNDO3dCQUFFSixXQUFVO2tDQUFnQkgsS0FBS1EsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlDO0FBRU8sZUFBZUMsaUJBQWlCO0lBQ3JDLE1BQU1ULE9BQU8sTUFBTVUsTUFBTTtJQUN6QixNQUFNQyxNQUFNLE1BQU1YLEtBQUtZLElBQUk7SUFDM0IsTUFBTUMsUUFBUUYsSUFBSUcsR0FBRyxDQUFDLENBQUNDLE9BQVM7UUFDOUIsT0FBTztZQUNMQyxRQUFRO2dCQUFFQyxJQUFJRixLQUFLRSxFQUFFLENBQUNDLFFBQVE7WUFBRztRQUNuQztJQUNGO0lBQ0EsT0FBTztRQUNMQyxVQUFVLEtBQUs7UUFDZk47SUFDRjtBQUNGLENBQUM7QUFFTSxlQUFlTyxlQUFlQyxPQUFPLEVBQUU7SUFDNUMsTUFBTUosS0FBS0ksUUFBUUwsTUFBTSxDQUFDQyxFQUFFO0lBQzVCLE1BQU1LLE9BQU8sTUFBTVosTUFBTSxDQUFDLGdDQUFnQyxFQUFFTyxHQUFHLENBQUMsQ0FBQztJQUNqRSxNQUFNakIsT0FBTyxNQUFNc0IsS0FBS1YsSUFBSTtJQUM1QixPQUFPO1FBQ0xXLE9BQU87WUFDTHZCO1FBQ0Y7SUFDRjtBQUNGLENBQUM7QUFFRCxpRUFBZUQsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvY2lhbF9tZWRpYS8uL3BhZ2VzL2Jsb2dzL1tpZF0uanM/NTgzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL0xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuaW1wb3J0IERhdGVGb3JtYXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRGF0ZUZvcm1hdFwiO1xyXG5cclxuY29uc3QgUG9zdERldGFpbCA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QmxvZyBEZXRhaWw8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMzIgYmctZ3JheS01MCBwLVsycmVtXVwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj57ZGF0YS50aXRsZX08L2gxPlxyXG4gICAgICAgIDxEYXRlRm9ybWF0IHRpbWVzdGFtcD17ZGF0YS5jcmVhdGVkX2F0fSAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbXQtNVwiPntkYXRhLmJvZHl9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9ibG9ncy9cIik7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcbiAgY29uc3QgcGF0aHMgPSByZXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXJhbXM6IHsgaWQ6IGl0ZW0uaWQudG9TdHJpbmcoKSB9LFxyXG4gICAgfTtcclxuICB9KTtcclxuICByZXR1cm4ge1xyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgcGF0aHMsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkO1xyXG4gIGNvbnN0IGJsb2cgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9ibG9ncy8ke2lkfS9gKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgYmxvZy5qc29uKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3REZXRhaWw7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkhlYWQiLCJEYXRlRm9ybWF0IiwiUG9zdERldGFpbCIsImRhdGEiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidGltZXN0YW1wIiwiY3JlYXRlZF9hdCIsInAiLCJib2R5IiwiZ2V0U3RhdGljUGF0aHMiLCJmZXRjaCIsInJlcyIsImpzb24iLCJwYXRocyIsIm1hcCIsIml0ZW0iLCJwYXJhbXMiLCJpZCIsInRvU3RyaW5nIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJibG9nIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blogs/[id].js\n");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("date-fns");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blogs/[id].js"));
module.exports = __webpack_exports__;

})();