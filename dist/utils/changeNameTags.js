"use strict";
exports.__esModule = true;
exports.changeNameTags = void 0;
var UppercaseFirstChar_1 = require("./UppercaseFirstChar");
var changeNameTags = function (tags) { return tags.map(function (tag) { return (0, UppercaseFirstChar_1.uppercaseFirstChar)(tag.trim()); }); };
exports.changeNameTags = changeNameTags;
