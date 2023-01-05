"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.setStar = exports.setLike = exports.addComment = exports.deleteSomeReviews = exports.getReviewsUser = exports.searchByTag = exports.searchByReview = exports.sortByRating = exports.sortByData = exports.editReview = exports.createReview = exports.getReviewsById = void 0;
var models_1 = require("../../models");
var utils_1 = require("../../utils");
var mongoose_1 = __importDefault(require("mongoose"));
var repository_1 = require("../../server/repository");
var getReviewsById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, models_1.Review.findById({ _id: id }).populate('author').populate('comments.author')];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                error_1 = _a.sent();
                (0, utils_1.throwError)();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getReviewsById = getReviewsById;
var createReview = function (_a) {
    var authorAssessment = _a.authorAssessment, titleAbout = _a.titleAbout, titleMain = _a.titleMain, tags = _a.tags, image = _a.image, category = _a.category, idUser = _a.idUser, reviewText = _a.reviewText;
    return __awaiter(void 0, void 0, void 0, function () {
        var ratingLike, ratingStar, review, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    ratingLike = new models_1.RatingLike();
                    ratingStar = new models_1.RatingStar();
                    return [4 /*yield*/, new models_1.Review({
                            author: new mongoose_1["default"].Types.ObjectId(idUser),
                            image: image,
                            authorAssessment: authorAssessment,
                            titleAbout: titleAbout,
                            titleMain: titleMain,
                            tags: tags,
                            category: category,
                            ratingLike: ratingLike,
                            ratingStar: ratingStar,
                            reviewText: reviewText
                        })];
                case 1:
                    review = _b.sent();
                    review.tags = (0, utils_1.changeNameTags)(tags.split(','));
                    return [4 /*yield*/, review.save()];
                case 2: return [2 /*return*/, _b.sent()];
                case 3:
                    error_2 = _b.sent();
                    (0, utils_1.throwError)();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.createReview = createReview;
var editReview = function (_a) {
    var authorAssessment = _a.authorAssessment, titleAbout = _a.titleAbout, titleMain = _a.titleMain, tags = _a.tags, image = _a.image, category = _a.category, reviewText = _a.reviewText, idReview = _a.idReview;
    return __awaiter(void 0, void 0, void 0, function () {
        var editData, review, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    editData = {
                        authorAssessment: authorAssessment,
                        titleAbout: titleAbout,
                        titleMain: titleMain,
                        image: image,
                        category: category,
                        reviewText: reviewText
                    };
                    return [4 /*yield*/, models_1.Review.findByIdAndUpdate(idReview, editData, { upsert: true })];
                case 1:
                    review = _b.sent();
                    review.tags = (0, utils_1.changeNameTags)(tags.split(','));
                    return [4 /*yield*/, review.save()];
                case 2: return [2 /*return*/, _b.sent()];
                case 3:
                    error_3 = _b.sent();
                    (0, utils_1.throwError)();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.editReview = editReview;
var sortByData = function (_a) {
    var sort = _a.sort, count = _a.count;
    return __awaiter(void 0, void 0, void 0, function () {
        var reviews, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, models_1.Review.find({}).sort({ createdAt: sort }).populate('author')];
                case 1:
                    reviews = _b.sent();
                    return [2 /*return*/, count ? reviews.slice(0, count) : reviews];
                case 2:
                    error_4 = _b.sent();
                    (0, utils_1.throwError)();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.sortByData = sortByData;
var sortByRating = function (_a) {
    var sort = _a.sort, count = _a.count;
    return __awaiter(void 0, void 0, void 0, function () {
        var reviews, error_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, models_1.Review.find({}).sort({ 'ratingStar.averageRating': sort }).populate('author')];
                case 1:
                    reviews = _b.sent();
                    return [2 /*return*/, count ? reviews.slice(0, count) : reviews];
                case 2:
                    error_5 = _b.sent();
                    (0, utils_1.throwError)();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.sortByRating = sortByRating;
var searchByReview = function (searchText) { return __awaiter(void 0, void 0, void 0, function () {
    var reviews, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, models_1.Review.find({ $text: { $search: searchText } }, { score: { $meta: "textScore" } }).sort({ score: { $meta: "textScore" } }).limit(10)];
            case 1:
                reviews = _a.sent();
                return [2 /*return*/, reviews.map(function (review) { return ({ titleMain: review.titleMain, _id: review._id }); })];
            case 2:
                error_6 = _a.sent();
                (0, utils_1.throwError)();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.searchByReview = searchByReview;
var searchByTag = function (tag) { return __awaiter(void 0, void 0, void 0, function () {
    var error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, models_1.Review.find({ tags: { $in: [tag] } }).populate('author')];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                error_7 = _a.sent();
                (0, utils_1.throwError)();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.searchByTag = searchByTag;
var getReviewsUser = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, models_1.Review.find({ author: id })];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                error_8 = _a.sent();
                (0, utils_1.throwError)();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getReviewsUser = getReviewsUser;
var deleteSomeReviews = function (_a) {
    var idSome = _a.idSome, id = _a.id;
    return __awaiter(void 0, void 0, void 0, function () {
        var reviews, tags, appSettingsTags, tagsApp, i, index, error_9;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, models_1.Review.find({ _id: { $in: idSome } })];
                case 1:
                    reviews = _b.sent();
                    tags = reviews.map(function (review) { return review.tags; }).flat();
                    return [4 /*yield*/, models_1.AppSettings.findOne()];
                case 2:
                    appSettingsTags = _b.sent();
                    tagsApp = appSettingsTags.tags;
                    for (i = 0; i < tags.length; i += 1) {
                        index = tagsApp.indexOf(tags[i]);
                        tagsApp.splice(index, 1);
                    }
                    appSettingsTags.tags = tagsApp;
                    appSettingsTags.save();
                    return [4 /*yield*/, models_1.Review.deleteMany({ _id: { $in: idSome } })];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, (0, exports.getReviewsUser)(id)];
                case 4: return [2 /*return*/, _b.sent()];
                case 5:
                    error_9 = _b.sent();
                    (0, utils_1.throwError)();
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
};
exports.deleteSomeReviews = deleteSomeReviews;
var addComment = function (_a) {
    var textComment = _a.textComment, id = _a.id, idReview = _a.idReview;
    return __awaiter(void 0, void 0, void 0, function () {
        var newComment, review, error_10;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, new models_1.Comment({
                            text: textComment,
                            author: new mongoose_1["default"].Types.ObjectId(id)
                        })];
                case 1:
                    newComment = _b.sent();
                    return [4 /*yield*/, models_1.Review.findById({ _id: idReview }).populate('author').populate('comments.author')];
                case 2:
                    review = _b.sent();
                    review.comments.push(newComment);
                    return [4 /*yield*/, review.save()];
                case 3: return [2 /*return*/, _b.sent()];
                case 4:
                    error_10 = _b.sent();
                    (0, utils_1.throwError)();
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
};
exports.addComment = addComment;
var setLike = function (_a) {
    var idReview = _a.idReview, id = _a.id;
    return __awaiter(void 0, void 0, void 0, function () {
        var review, error_11;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 7, , 8]);
                    return [4 /*yield*/, models_1.Review.findById({ _id: idReview })];
                case 1:
                    review = _b.sent();
                    if (!(0, utils_1.isStatusRating)({ idUser: id, idUsers: review.ratingLike.idUsers })) return [3 /*break*/, 3];
                    // @ts-ignore
                    review.ratingLike.idUsers.pull(new mongoose_1["default"].Types.ObjectId(id));
                    review.ratingLike.countLike -= 1;
                    return [4 /*yield*/, (0, repository_1.setRating)({ idUser: review.author._id, value: -1 })];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 3:
                    // @ts-ignore
                    review.ratingLike.idUsers.push(new mongoose_1["default"].Types.ObjectId(id));
                    review.ratingLike.countLike += 1;
                    return [4 /*yield*/, (0, repository_1.setRating)({ idUser: review.author._id, value: 1 })];
                case 4:
                    _b.sent();
                    _b.label = 5;
                case 5: return [4 /*yield*/, review.save()];
                case 6: return [2 /*return*/, _b.sent()];
                case 7:
                    error_11 = _b.sent();
                    (0, utils_1.throwError)();
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
};
exports.setLike = setLike;
var setStar = function (_a) {
    var idReview = _a.idReview, numberStar = _a.numberStar, id = _a.id;
    return __awaiter(void 0, void 0, void 0, function () {
        var review, ratingNow, numberMark, error_12;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, models_1.Review.findById({ _id: idReview })];
                case 1:
                    review = _b.sent();
                    ratingNow = review.ratingStar.averageRating;
                    numberMark = review.ratingStar.idUsers.length;
                    if (!(0, utils_1.isStatusRating)({ idUser: id, idUsers: review.ratingStar.idUsers })) {
                        review.ratingStar.averageRating = (0, utils_1.countAverageRating)({
                            ratingNow: ratingNow,
                            numberMark: numberMark,
                            numberStar: numberStar
                        });
                        // @ts-ignore
                        review.ratingStar.idUsers.push(new mongoose_1["default"].Types.ObjectId(id));
                    }
                    return [4 /*yield*/, review.save()];
                case 2: return [2 /*return*/, _b.sent()];
                case 3:
                    error_12 = _b.sent();
                    (0, utils_1.throwError)();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.setStar = setStar;
