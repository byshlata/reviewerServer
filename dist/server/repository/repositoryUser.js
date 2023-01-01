"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.__esModule = true;
exports.changeRightsUsers = exports.changeStatusUsers = exports.deleteSomeUsers = exports.getUsers = exports.setRating = exports.changeUser = exports.loginUser = exports.createUser = exports.getUserById = exports.getUserPasswordByEmail = exports.getUserByEmail = void 0;
var models_1 = require("../../models");
var utils_1 = require("../../utils");
var enums_1 = require("../../enums");
var bcrypt = require("bcrypt");
var getUserByEmail = function (email) { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, models_1.User.findOne({ email: new RegExp(email) })];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                error_1 = _a.sent();
                (0, utils_1.throwError)();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUserByEmail = getUserByEmail;
var getUserPasswordByEmail = function (email) { return __awaiter(void 0, void 0, void 0, function () {
    var error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, models_1.User.findOne({ email: new RegExp(email) }).select('password')];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                error_2 = _a.sent();
                (0, utils_1.throwError)();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUserPasswordByEmail = getUserPasswordByEmail;
var getUserById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, models_1.User.findById(id)];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                error_3 = _a.sent();
                (0, utils_1.throwError)();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUserById = getUserById;
var createUser = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var userNew, salt, _a, user, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                userNew = __assign({}, payload);
                return [4 /*yield*/, bcrypt.genSalt(enums_1.Secret.Salt)];
            case 1:
                salt = _b.sent();
                _a = userNew;
                return [4 /*yield*/, bcrypt.hash(userNew.password, salt)];
            case 2:
                _a.password = _b.sent();
                user = new models_1.User(__assign({}, userNew));
                return [4 /*yield*/, user.save()];
            case 3: return [2 /*return*/, _b.sent()];
            case 4:
                error_4 = _b.sent();
                (0, utils_1.throwError)();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
var loginUser = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var user, isValidPassword, _a, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 8, , 9]);
                return [4 /*yield*/, (0, exports.getUserPasswordByEmail)(payload.email)];
            case 1:
                user = _b.sent();
                if (!user) return [3 /*break*/, 6];
                return [4 /*yield*/, bcrypt.compare(payload.password, user.password)];
            case 2:
                isValidPassword = _b.sent();
                if (!isValidPassword) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, exports.getUserByEmail)(payload.email)];
            case 3:
                _a = _b.sent();
                return [3 /*break*/, 5];
            case 4:
                _a = (0, utils_1.throwError)();
                _b.label = 5;
            case 5: return [2 /*return*/, _a];
            case 6: return [2 /*return*/, null];
            case 7: return [3 /*break*/, 9];
            case 8:
                error_5 = _b.sent();
                (0, utils_1.throwError)();
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.loginUser = loginUser;
var changeUser = function (id, _a) {
    var avatar = _a.avatar, rating = _a.rating;
    return __awaiter(void 0, void 0, void 0, function () {
        var error_6;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, models_1.User.findByIdAndUpdate(id, {
                            avatar: avatar,
                            rating: rating
                        }, { "new": true })];
                case 1: return [2 /*return*/, _b.sent()];
                case 2:
                    error_6 = _b.sent();
                    return [2 /*return*/, null];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.changeUser = changeUser;
var setRating = function (_a) {
    var value = _a.value, idUser = _a.idUser;
    return __awaiter(void 0, void 0, void 0, function () {
        var error_7;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, models_1.User.findByIdAndUpdate({ _id: idUser }, { $inc: { rating: value } })];
                case 1:
                    _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_7 = _b.sent();
                    (0, utils_1.throwError)();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.setRating = setRating;
var getUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
    var error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, models_1.User.find({})];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                error_8 = _a.sent();
                (0, utils_1.throwError)();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUsers = getUsers;
var deleteSomeUsers = function (_a) {
    var idSome = _a.idSome;
    return __awaiter(void 0, void 0, void 0, function () {
        var error_9;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, models_1.User.deleteMany({ _id: { $in: idSome } })];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, (0, exports.getUsers)()];
                case 2: return [2 /*return*/, _b.sent()];
                case 3:
                    error_9 = _b.sent();
                    (0, utils_1.throwError)();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.deleteSomeUsers = deleteSomeUsers;
var changeStatusUsers = function (_a) {
    var idSome = _a.idSome;
    return __awaiter(void 0, void 0, void 0, function () {
        var users, i, error_10;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 7, , 8]);
                    return [4 /*yield*/, models_1.User.find({ _id: { $in: idSome } }).lean()];
                case 1:
                    users = _b.sent();
                    i = 0;
                    _b.label = 2;
                case 2:
                    if (!(i < users.length)) return [3 /*break*/, 5];
                    return [4 /*yield*/, changeStatus({ id: users[i]._id })];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    i += 1;
                    return [3 /*break*/, 2];
                case 5: return [4 /*yield*/, (0, exports.getUsers)()];
                case 6: return [2 /*return*/, _b.sent()];
                case 7:
                    error_10 = _b.sent();
                    (0, utils_1.throwError)();
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
};
exports.changeStatusUsers = changeStatusUsers;
var changeRightsUsers = function (_a) {
    var idSome = _a.idSome;
    return __awaiter(void 0, void 0, void 0, function () {
        var users, i, error_11;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 7, , 8]);
                    return [4 /*yield*/, models_1.User.find({ _id: { $in: idSome } })];
                case 1:
                    users = _b.sent();
                    i = 0;
                    _b.label = 2;
                case 2:
                    if (!(i < users.length)) return [3 /*break*/, 5];
                    return [4 /*yield*/, changeRights({ id: users[i]._id })];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    i += 1;
                    return [3 /*break*/, 2];
                case 5: return [4 /*yield*/, (0, exports.getUsers)()];
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
exports.changeRightsUsers = changeRightsUsers;
var changeStatus = function (_a) {
    var id = _a.id;
    return __awaiter(void 0, void 0, void 0, function () {
        var user, error_12;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, models_1.User.findById({ _id: id })];
                case 1:
                    user = _b.sent();
                    if (user.status === enums_1.Status.Active) {
                        user.status = enums_1.Status.Block;
                    }
                    else {
                        user.status = enums_1.Status.Active;
                    }
                    return [4 /*yield*/, user.save()];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_12 = _b.sent();
                    (0, utils_1.throwError)();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
};
var changeRights = function (_a) {
    var id = _a.id;
    return __awaiter(void 0, void 0, void 0, function () {
        var user, error_13;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, models_1.User.findById({ _id: id })];
                case 1:
                    user = _b.sent();
                    if (user.rights === enums_1.Rights.User) {
                        user.rights = enums_1.Rights.Admin;
                    }
                    else {
                        user.rights = enums_1.Rights.User;
                    }
                    return [4 /*yield*/, user.save()];
                case 2: return [2 /*return*/, _b.sent()];
                case 3:
                    error_13 = _b.sent();
                    (0, utils_1.throwError)();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
};
