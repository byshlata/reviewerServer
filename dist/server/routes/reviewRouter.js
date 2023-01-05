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
var express_1 = __importDefault(require("express"));
var enums_1 = require("../../enums");
var utils_1 = require("../../utils");
var repository_1 = require("../repository");
var router = express_1["default"].Router();
router.get("".concat(enums_1.Path.Root).concat(enums_1.Path.Id), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, reviewBase, review, appSettings, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                return [4 /*yield*/, (0, repository_1.getReviewsById)(id)];
            case 1:
                reviewBase = _a.sent();
                review = (0, utils_1.createReviewSend)(reviewBase);
                return [4 /*yield*/, (0, repository_1.getAppSetting)()];
            case 2:
                appSettings = _a.sent();
                return [2 /*return*/, res.send({ appSettings: appSettings, review: review })];
            case 3:
                error_1 = _a.sent();
                return [2 /*return*/, res.status(401).send({ message: enums_1.ErrorMessage.ServerError })];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.get("".concat(enums_1.Path.User).concat(enums_1.Path.Root).concat(enums_1.Path.Id), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, reviewsBase, reviews, appSettings, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                return [4 /*yield*/, (0, repository_1.getReviewsUser)(id)];
            case 1:
                reviewsBase = _a.sent();
                reviews = (0, utils_1.createUserReviewsTableResponse)(reviewsBase);
                return [4 /*yield*/, (0, repository_1.getAppSetting)()];
            case 2:
                appSettings = _a.sent();
                return [2 /*return*/, res.send({ appSettings: appSettings, reviews: reviews })];
            case 3:
                error_2 = _a.sent();
                return [2 /*return*/, res.status(401).send({ message: enums_1.ErrorMessage.ServerError })];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.post("".concat(enums_1.Path.Root), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, searchResult, appSettings, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                query = req.query;
                return [4 /*yield*/, (0, repository_1.searchByReview)(query[enums_1.QueryAPI.Search])];
            case 1:
                searchResult = _a.sent();
                return [4 /*yield*/, (0, repository_1.getAppSetting)()];
            case 2:
                appSettings = _a.sent();
                return [2 /*return*/, res.send({ searchResult: searchResult, appSettings: appSettings })];
            case 3:
                error_3 = _a.sent();
                return [2 /*return*/, res.status(401).send({ message: enums_1.ErrorMessage.ServerError })];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.post("".concat(enums_1.Path.Like), utils_1.checkAuth, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, idReview, id, _b, user, appSettings, error_4;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                _a = req.body, idReview = _a.idReview, id = _a.id;
                return [4 /*yield*/, (0, repository_1.setLike)({ idReview: idReview, id: id })];
            case 1:
                _c.sent();
                return [4 /*yield*/, (0, utils_1.createAppSettingsAndUserSend)(id)];
            case 2:
                _b = _c.sent(), user = _b.user, appSettings = _b.appSettings;
                return [2 /*return*/, res.status(200).send({
                        user: user,
                        appSettings: appSettings
                    })];
            case 3:
                error_4 = _c.sent();
                return [2 /*return*/, res.status(401).send({ message: enums_1.ErrorMessage.ServerError })];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.post("".concat(enums_1.Path.Star), utils_1.checkAuth, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, idReview, numberStar, id, _b, user, appSettings, error_5;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                _a = req.body, idReview = _a.idReview, numberStar = _a.numberStar, id = _a.id;
                return [4 /*yield*/, (0, repository_1.setStar)({ idReview: idReview, id: id, numberStar: numberStar })];
            case 1:
                _c.sent();
                return [4 /*yield*/, (0, utils_1.createAppSettingsAndUserSend)(id)];
            case 2:
                _b = _c.sent(), user = _b.user, appSettings = _b.appSettings;
                return [2 /*return*/, res.status(200).send({
                        user: user,
                        appSettings: appSettings
                    })];
            case 3:
                error_5 = _c.sent();
                return [2 /*return*/, res.status(401).send({ message: enums_1.ErrorMessage.ServerError })];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.post("".concat(enums_1.Path.CreateComment), utils_1.checkAuth, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, textComment, idReview, reviewBase, review, _b, user, appSettings, error_6;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 4, , 5]);
                _a = req.body, id = _a.id, textComment = _a.textComment, idReview = _a.idReview;
                if (!id) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, repository_1.addComment)({ id: id, textComment: textComment, idReview: idReview })];
            case 1:
                reviewBase = _c.sent();
                review = (0, utils_1.createReviewSend)(reviewBase);
                return [4 /*yield*/, (0, utils_1.createAppSettingsAndUserSend)(id)];
            case 2:
                _b = _c.sent(), user = _b.user, appSettings = _b.appSettings;
                return [2 /*return*/, res.status(200).send({
                        appSettings: appSettings,
                        review: review,
                        user: user
                    })];
            case 3: return [3 /*break*/, 5];
            case 4:
                error_6 = _c.sent();
                return [2 /*return*/, res.status(401).send({ message: enums_1.ErrorMessage.Authorized })];
            case 5: return [2 /*return*/];
        }
    });
}); });
router["delete"]("".concat(enums_1.Path.Delete), utils_1.checkAuth, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, idSome, id, reviewsBase, reviews, _b, user, appSettings, error_7;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                _a = req.body, idSome = _a.idSome, id = _a.id;
                return [4 /*yield*/, (0, repository_1.deleteSomeReviews)({ idSome: idSome, id: id })];
            case 1:
                reviewsBase = _c.sent();
                reviews = (0, utils_1.createUserReviewsTableResponse)(reviewsBase);
                return [4 /*yield*/, (0, utils_1.createAppSettingsAndUserSend)(id)];
            case 2:
                _b = _c.sent(), user = _b.user, appSettings = _b.appSettings;
                return [2 /*return*/, res.status(200).send({ user: user, appSettings: appSettings, reviews: reviews })];
            case 3:
                error_7 = _c.sent();
                return [2 /*return*/, res.status(401).send({ message: enums_1.ErrorMessage.ServerError })];
            case 4: return [2 /*return*/];
        }
    });
}); });
module.exports = router;
