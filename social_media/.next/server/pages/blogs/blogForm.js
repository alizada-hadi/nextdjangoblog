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
exports.id = "pages/blogs/blogForm";
exports.ids = ["pages/blogs/blogForm"];
exports.modules = {

/***/ "./Layout/Layout.jsx":
/*!***************************!*\
  !*** ./Layout/Layout.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Layout = ({ children  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-4xl m-auto\",\n        children: children\n    }, void 0, false, {\n        fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\Layout\\\\Layout.jsx\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9MYXlvdXQvTGF5b3V0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTBCO0FBRTFCLE1BQU1DLFNBQVMsQ0FBQyxFQUFFQyxTQUFRLEVBQUUsR0FBSztJQUMvQixxQkFBTyw4REFBQ0M7UUFBSUMsV0FBVTtrQkFBb0JGOzs7Ozs7QUFDNUM7QUFFQSxpRUFBZUQsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvY2lhbF9tZWRpYS8uL0xheW91dC9MYXlvdXQuanN4P2JiYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBtLWF1dG9cIj57Y2hpbGRyZW59PC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Layout/Layout.jsx\n");

/***/ }),

/***/ "./pages/blogs/blogForm.js":
/*!*********************************!*\
  !*** ./pages/blogs/blogForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Layout/Layout */ \"./Layout/Layout.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst blogForm = ({ date ={}  })=>{\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const data = {\n        title,\n        body\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const submitHandler = async (e)=>{\n        e.preventDefault();\n        const response = await fetch(\"http://localhost:8000/api/blogs/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        router.push(\"/\");\n        return response.json();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"New Blog\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\blogs\\\\blogForm.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\blogs\\\\blogForm.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"mt-32\",\n                onSubmit: submitHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                for: \"title\",\n                                className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                                children: \"Title\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\blogs\\\\blogForm.js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"title\",\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value),\n                                className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                                placeholder: \"Blog title\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\blogs\\\\blogForm.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\blogs\\\\blogForm.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                for: \"message\",\n                                className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                                children: \"Your message\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\blogs\\\\blogForm.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"message\",\n                                rows: \"4\",\n                                value: body,\n                                onChange: (e)=>setBody(e.target.value),\n                                className: \"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                                placeholder: \"What are you thinking about?\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\blogs\\\\blogForm.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\blogs\\\\blogForm.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-12 py-3 mt-10 rounded-xl font-semibold bg-blue-900 text-white text-lg\",\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\blogs\\\\blogForm.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\blogs\\\\blogForm.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\nextdjangoblog\\\\social_media\\\\pages\\\\blogs\\\\blogForm.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blogForm);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncy9ibG9nRm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDQztBQUNaO0FBRVc7QUFFeEMsTUFBTUssV0FBVyxDQUFDLEVBQUVDLE1BQU8sQ0FBQyxFQUFDLEVBQUUsR0FBSztJQUNsQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1VLE9BQU87UUFBRUo7UUFBT0U7SUFBSztJQUUzQixNQUFNRyxTQUFTUixzREFBU0E7SUFFeEIsTUFBTVMsZ0JBQWdCLE9BQU9DLElBQU07UUFDakNBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLG9DQUFvQztZQUMvREMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBVixNQUFNVyxLQUFLQyxTQUFTLENBQUNWO1FBQ3ZCO1FBRUFDLE9BQU9VLElBQUksQ0FBQztRQUNaLE9BQU9OLFNBQVNPLElBQUk7SUFDdEI7SUFFQSxxQkFDRSw4REFBQ3JCLHNEQUFNQTs7MEJBQ0wsOERBQUNDLGtEQUFJQTswQkFDSCw0RUFBQ0k7OEJBQU07Ozs7Ozs7Ozs7OzBCQUVULDhEQUFDaUI7Z0JBQUtDLFdBQVU7Z0JBQVFDLFVBQVViOztrQ0FDaEMsOERBQUNjO3dCQUFJRixXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQ0NDLEtBQUk7Z0NBQ0pKLFdBQVU7MENBQ1g7Ozs7OzswQ0FHRCw4REFBQ0s7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLE9BQU8xQjtnQ0FDUDJCLFVBQVUsQ0FBQ3BCLElBQU1OLFNBQVNNLEVBQUVxQixNQUFNLENBQUNGLEtBQUs7Z0NBQ3hDUixXQUFVO2dDQUNWVyxhQUFZO2dDQUNaQyxRQUFROzs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNWOzswQ0FDQyw4REFBQ0M7Z0NBQ0NDLEtBQUk7Z0NBQ0pKLFdBQVU7MENBQ1g7Ozs7OzswQ0FHRCw4REFBQ2E7Z0NBQ0NOLElBQUc7Z0NBQ0hPLE1BQUs7Z0NBQ0xOLE9BQU94QjtnQ0FDUHlCLFVBQVUsQ0FBQ3BCLElBQU1KLFFBQVFJLEVBQUVxQixNQUFNLENBQUNGLEtBQUs7Z0NBQ3ZDUixXQUFVO2dDQUNWVyxhQUFZOzs7Ozs7Ozs7Ozs7a0NBR2hCLDhEQUFDSTt3QkFBT2YsV0FBVTtrQ0FBMkU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yRztBQUVBLGlFQUFlcEIsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvY2lhbF9tZWRpYS8uL3BhZ2VzL2Jsb2dzL2Jsb2dGb3JtLmpzP2MzMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL0xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBibG9nRm9ybSA9ICh7IGRhdGUgPSB7fSB9KSA9PiB7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IHsgdGl0bGUsIGJvZHkgfTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYmxvZ3MvXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5OZXcgQmxvZzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibXQtMzJcIiBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgZm9yPVwidGl0bGVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBUaXRsZVxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41IGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCbG9nIHRpdGxlXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBmb3I9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgWW91ciBtZXNzYWdlXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgIHJvd3M9XCI0XCJcclxuICAgICAgICAgICAgdmFsdWU9e2JvZHl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Qm9keShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHAtMi41IHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYmctZ3JheS01MCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgYXJlIHlvdSB0aGlua2luZyBhYm91dD9cIlxyXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC0xMiBweS0zIG10LTEwIHJvdW5kZWQteGwgZm9udC1zZW1pYm9sZCBiZy1ibHVlLTkwMCB0ZXh0LXdoaXRlIHRleHQtbGdcIj5cclxuICAgICAgICAgIENyZWF0ZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmxvZ0Zvcm07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiSGVhZCIsInVzZVJvdXRlciIsImJsb2dGb3JtIiwiZGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJib2R5Iiwic2V0Qm9keSIsImRhdGEiLCJyb3V0ZXIiLCJzdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsImpzb24iLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJkaXYiLCJsYWJlbCIsImZvciIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJ0ZXh0YXJlYSIsInJvd3MiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blogs/blogForm.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blogs/blogForm.js"));
module.exports = __webpack_exports__;

})();