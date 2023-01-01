"use strict";
exports.__esModule = true;
exports.createUserReviewsTableResponse = void 0;
var createUserReviewsTableResponse = function (reviews) {
    return reviews.map(function (_a) {
        var createdAt = _a.createdAt, authorAssessment = _a.authorAssessment, ratingLike = _a.ratingLike, titleMain = _a.titleMain, _id = _a._id, ratingStar = _a.ratingStar;
        return ({ createdAt: createdAt, authorAssessment: authorAssessment, ratingLike: ratingLike.countLike, titleMain: titleMain, ratingStar: ratingStar.averageRating, id: _id });
    });
};
exports.createUserReviewsTableResponse = createUserReviewsTableResponse;
