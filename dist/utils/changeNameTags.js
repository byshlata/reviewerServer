"use strict";
exports.__esModule = true;
exports.changeNameTags = void 0;
var uppercaseChar_1 = require("./uppercaseChar");
var changeNameTags = function (tags) { return tags.map(function (tag) { return (0, uppercaseChar_1.uppercaseChar)(tag.trim()); }); };
exports.changeNameTags = changeNameTags;
