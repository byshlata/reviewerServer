"use strict";
exports.__esModule = true;
exports.RatingStar = exports.RatingStarSchema = void 0;
var mongoose_1 = require("mongoose");
exports.RatingStarSchema = new mongoose_1.Schema({
    averageRating: { type: Number, required: true, "default": 0 },
    idUsers: { type: {}, required: true, "default": {} }
}, {
    timestamps: true
});
exports.RatingStar = (0, mongoose_1.model)('RatingStar', exports.RatingStarSchema);
