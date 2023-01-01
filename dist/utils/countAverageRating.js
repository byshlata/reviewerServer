"use strict";
exports.__esModule = true;
exports.countAverageRating = void 0;
var countAverageRating = function (_a) {
    var ratingNow = _a.ratingNow, numberMark = _a.numberMark, numberStar = _a.numberStar;
    return +((ratingNow * numberMark + numberStar) / (numberMark + 1)).toFixed(1);
};
exports.countAverageRating = countAverageRating;
