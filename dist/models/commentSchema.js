"use strict";
exports.__esModule = true;
exports.Comment = exports.CommentSchema = void 0;
var mongoose_1 = require("mongoose");
exports.CommentSchema = new mongoose_1.Schema({
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    text: { type: String },
    __v: { type: Number, select: false }
}, {
    timestamps: true
});
exports.Comment = (0, mongoose_1.model)('Comment', exports.CommentSchema);
