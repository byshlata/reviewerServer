"use strict";
exports.__esModule = true;
exports.createCategory = void 0;
var createCategory = function (str) { return str.charAt(0).toUpperCase() + str.slice(1).split('').map(function (char) { return char.toLowerCase(); }).join(''); };
exports.createCategory = createCategory;
