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
exports.loginUser = exports.getUserByEmail = exports.getUserById = exports.changeUser = exports.authUser = exports.createUser = exports.createReview = exports.getReviewsById = exports.addAppSettings = exports.addCategoryAppSettings = exports.addTagsAppSettings = exports.getAppSetting = void 0;
var repositoryApp_1 = require("./repositoryApp");
__createBinding(exports, repositoryApp_1, "getAppSetting");
__createBinding(exports, repositoryApp_1, "addTagsAppSettings");
__createBinding(exports, repositoryApp_1, "addCategoryAppSettings");
__createBinding(exports, repositoryApp_1, "addAppSettings");
var repositoryReview_1 = require("./repositoryReview");
__createBinding(exports, repositoryReview_1, "getReviewsById");
__createBinding(exports, repositoryReview_1, "createReview");
var repositoryUser_1 = require("./repositoryUser");
__createBinding(exports, repositoryUser_1, "createUser");
__createBinding(exports, repositoryUser_1, "authUser");
__createBinding(exports, repositoryUser_1, "changeUser");
__createBinding(exports, repositoryUser_1, "getUserById");
__createBinding(exports, repositoryUser_1, "getUserByEmail");
__createBinding(exports, repositoryUser_1, "loginUser");
