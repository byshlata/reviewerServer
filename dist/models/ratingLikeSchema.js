"use strict";
exports.__esModule = true;
exports.RatingLike = exports.RatingLikeSchema = void 0;
var mongoose_1 = require("mongoose");
exports.RatingLikeSchema = new mongoose_1.Schema({
    countLike: { type: Number, required: true, "default": 0 },
    idUsers: { type: {}, required: true, "default": {} }
}, {
    timestamps: true
});
exports.RatingLike = (0, mongoose_1.model)('RatingLike', exports.RatingLikeSchema);
