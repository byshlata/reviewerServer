"use strict";
exports.__esModule = true;
exports.Review = void 0;
var mongoose_1 = require("mongoose");
var ratingLikeSchema_1 = require("../models/ratingLikeSchema");
var ratingStarSchema_1 = require("../models/ratingStarSchema");
var commentSchema_1 = require("../models/commentSchema");
var ReviewSchema = new mongoose_1.Schema({
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    authorAssessment: { type: Number },
    titleMain: { type: String, required: true },
    titleAbout: { type: String, required: true },
    category: { type: String, required: true },
    reviewText: { type: String, required: true },
    tags: { type: [String] },
    image: { type: String, "default": null },
    ratingLike: { type: ratingLikeSchema_1.RatingLikeSchema, required: true },
    ratingStar: { type: ratingStarSchema_1.RatingStarSchema, required: true },
    comments: { type: [commentSchema_1.CommentSchema], required: true, "default": [] },
    __v: { type: Number, select: false }
}, {
    timestamps: true
});
ReviewSchema.index({
    titleMain: 'text',
    titleAbout: 'text',
    reviewText: 'text',
    'comments.$**': 'text'
}, { language_override: 'russian' });
exports.Review = (0, mongoose_1.model)('Review', ReviewSchema);
