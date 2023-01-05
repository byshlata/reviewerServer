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
exports.changeRightsUsers = exports.changeStatusUsers = exports.deleteSomeUsers = exports.getUsers = exports.setRating = exports.getUserPasswordByEmail = exports.loginUser = exports.getUserByEmail = exports.getUserById = exports.changeUser = exports.createUser = exports.editReview = exports.setStar = exports.setLike = exports.deleteSomeReviews = exports.getReviewsUser = exports.addComment = exports.sortByRating = exports.sortByData = exports.searchByTag = exports.searchByReview = exports.createReview = exports.getReviewsById = exports.addAppSettings = exports.addCategoryAppSettings = exports.addTagsAppSettings = exports.getAppSetting = void 0;
var repositoryApp_1 = require("./repositoryApp");
__createBinding(exports, repositoryApp_1, "getAppSetting");
__createBinding(exports, repositoryApp_1, "addTagsAppSettings");
__createBinding(exports, repositoryApp_1, "addCategoryAppSettings");
__createBinding(exports, repositoryApp_1, "addAppSettings");
var repositoryReview_1 = require("./repositoryReview");
__createBinding(exports, repositoryReview_1, "getReviewsById");
__createBinding(exports, repositoryReview_1, "createReview");
__createBinding(exports, repositoryReview_1, "searchByReview");
__createBinding(exports, repositoryReview_1, "searchByTag");
__createBinding(exports, repositoryReview_1, "sortByData");
__createBinding(exports, repositoryReview_1, "sortByRating");
__createBinding(exports, repositoryReview_1, "addComment");
__createBinding(exports, repositoryReview_1, "getReviewsUser");
__createBinding(exports, repositoryReview_1, "deleteSomeReviews");
__createBinding(exports, repositoryReview_1, "setLike");
__createBinding(exports, repositoryReview_1, "setStar");
__createBinding(exports, repositoryReview_1, "editReview");
var repositoryUser_1 = require("./repositoryUser");
__createBinding(exports, repositoryUser_1, "createUser");
__createBinding(exports, repositoryUser_1, "changeUser");
__createBinding(exports, repositoryUser_1, "getUserById");
__createBinding(exports, repositoryUser_1, "getUserByEmail");
__createBinding(exports, repositoryUser_1, "loginUser");
__createBinding(exports, repositoryUser_1, "getUserPasswordByEmail");
__createBinding(exports, repositoryUser_1, "setRating");
__createBinding(exports, repositoryUser_1, "getUsers");
__createBinding(exports, repositoryUser_1, "deleteSomeUsers");
__createBinding(exports, repositoryUser_1, "changeStatusUsers");
__createBinding(exports, repositoryUser_1, "changeRightsUsers");
