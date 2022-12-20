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
exports.id = "pages/api/getBlogs";
exports.ids = ["pages/api/getBlogs"];
exports.modules = {

/***/ "(api)/./pages/api/getBlogs.js":
/*!*******************************!*\
  !*** ./pages/api/getBlogs.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const response = await fetch(\"http://localhost:8000/api/blogs/\", {\n        method: \"GET\",\n        \"Content-type\": \"application/json\"\n    });\n    res.status(200).json({\n        response\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0QmxvZ3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLGVBQWVBLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxvQ0FBb0M7UUFDL0RDLFFBQVE7UUFDUixnQkFBZ0I7SUFDbEI7SUFFQUgsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFSjtJQUFTO0FBQ2xDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NpYWxfbWVkaWEvLi9wYWdlcy9hcGkvZ2V0QmxvZ3MuanM/MDBjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYmxvZ3MvXCIsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH0pO1xyXG5cclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHJlc3BvbnNlIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getBlogs.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getBlogs.js"));
module.exports = __webpack_exports__;

})();