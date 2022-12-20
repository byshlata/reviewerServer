"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.AppSettings = exports.RatingStarSchema = exports.RatingStar = exports.RatingLikeSchema = exports.RatingLike = exports.Review = exports.CommentSchema = exports.Comment = exports.User = void 0;
var userSchema_1 = require("./userSchema");
__createBinding(exports, userSchema_1, "User");
var commentSchema_1 = require("./commentSchema");
__createBinding(exports, commentSchema_1, "Comment");
__createBinding(exports, commentSchema_1, "CommentSchema");
var reviewSchema_1 = require("./reviewSchema");
__createBinding(exports, reviewSchema_1, "Review");
var ratingLikeSchema_1 = require("./ratingLikeSchema");
__createBinding(exports, ratingLikeSchema_1, "RatingLike");
__createBinding(exports, ratingLikeSchema_1, "RatingLikeSchema");
var ratingStarSchema_1 = require("./ratingStarSchema");
__createBinding(exports, ratingStarSchema_1, "RatingStar");
__createBinding(exports, ratingStarSchema_1, "RatingStarSchema");
var appSettingsSchema_1 = require("./appSettingsSchema");
__createBinding(exports, appSettingsSchema_1, "AppSettings");
