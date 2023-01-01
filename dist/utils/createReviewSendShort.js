"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.createReviewSendShort = void 0;
var utils_1 = require("../utils");
var createReviewSendShort = function (review) {
    var _a = JSON.parse(JSON.stringify(review)), reviewText = _a.reviewText, comments = _a.comments, otherData = __rest(_a, ["reviewText", "comments"]);
    var authorSend = (0, utils_1.change_IdById)(otherData.author);
    return (0, utils_1.change_IdById)(__assign(__assign({}, otherData), { author: authorSend }));
};
exports.createReviewSendShort = createReviewSendShort;
