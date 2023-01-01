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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.createReviewSend = void 0;
var utils_1 = require("../utils");
var createReviewSend = function (review) {
    var reviewSend = JSON.parse(JSON.stringify(review));
    var changeAuthorComments = reviewSend.comments.map(function (comment) { return (__assign(__assign({}, comment), { author: (0, utils_1.change_IdById)(comment.author) })); });
    var changeAuthorReview = __assign(__assign({}, reviewSend), { author: (0, utils_1.change_IdById)(reviewSend.author), comments: __spreadArray([], changeAuthorComments, true) });
    return (0, utils_1.change_IdById)(changeAuthorReview);
};
exports.createReviewSend = createReviewSend;
