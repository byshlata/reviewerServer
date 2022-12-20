"use strict";
exports.__esModule = true;
exports.Comment = exports.CommentSchema = void 0;
var mongoose_1 = require("mongoose");
exports.CommentSchema = new mongoose_1.Schema({
    idAuthor: { type: String, required: true },
    imageAuthor: { type: String, required: true, "default": null },
    loginAuthor: { type: String, required: true }
}, {
    timestamps: true
});
exports.Comment = (0, mongoose_1.model)('Comment', exports.CommentSchema);
