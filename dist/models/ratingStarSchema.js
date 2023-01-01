"use strict";
exports.__esModule = true;
exports.RatingStar = exports.RatingStarSchema = void 0;
var mongoose_1 = require("mongoose");
exports.RatingStarSchema = new mongoose_1.Schema({
    averageRating: { type: Number, required: true, "default": 0 },
    idUsers: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User", "default": [] }],
    __v: { type: Number, select: false }
}, {
    timestamps: true
});
exports.RatingStar = (0, mongoose_1.model)('RatingStar', exports.RatingStarSchema);
