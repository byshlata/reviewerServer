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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.addAppSettings = exports.addTagsAppSettings = exports.addCategoryAppSettings = exports.getAppSetting = void 0;
var utils_1 = require("../../utils");
var models_1 = require("../../models");
var enums_1 = require("../../enums");
var getAppSetting = function () { return __awaiter(void 0, void 0, void 0, function () {
    var appSettings, startAppSettings, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                return [4 /*yield*/, models_1.AppSettings.findOne({ name: enums_1.AppSettingsEnum.AppSettings })];
            case 1:
                appSettings = _a.sent();
                if (!appSettings) return [3 /*break*/, 3];
                return [4 /*yield*/, appSettings];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                startAppSettings = new models_1.AppSettings();
                return [4 /*yield*/, startAppSettings.save()];
            case 4: return [2 /*return*/, _a.sent()];
            case 5: return [3 /*break*/, 7];
            case 6:
                error_1 = _a.sent();
                (0, utils_1.throwError)();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getAppSetting = getAppSetting;
var addCategoryAppSettings = function (category) { return __awaiter(void 0, void 0, void 0, function () {
    var appSettings, categoryByType, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, models_1.AppSettings.findOne({ name: enums_1.AppSettingsEnum.AppSettings })];
            case 1:
                appSettings = _a.sent();
                categoryByType = (0, utils_1.createCategory)(category);
                appSettings.category = Array.from(new Set(__spreadArray(__spreadArray([], appSettings.category, true), [categoryByType], false)));
                return [4 /*yield*/, appSettings.save()];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                error_2 = _a.sent();
                (0, utils_1.throwError)();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addCategoryAppSettings = addCategoryAppSettings;
var addTagsAppSettings = function (tags) { return __awaiter(void 0, void 0, void 0, function () {
    var tagsForBase, appSettings, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                tagsForBase = (0, utils_1.changeNameTags)(tags);
                return [4 /*yield*/, models_1.AppSettings.findOne({ name: enums_1.AppSettingsEnum.AppSettings })];
            case 1:
                appSettings = _a.sent();
                appSettings.tags = Array.from(__spreadArray(__spreadArray([], appSettings.tags, true), tagsForBase, true));
                return [4 /*yield*/, appSettings.save()];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                error_3 = _a.sent();
                (0, utils_1.throwError)();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addTagsAppSettings = addTagsAppSettings;
var addAppSettings = function (category, tags) { return __awaiter(void 0, void 0, void 0, function () {
    var error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, (0, exports.addCategoryAppSettings)(category)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, exports.addTagsAppSettings)(tags)];
            case 2:
                _a.sent();
                return [4 /*yield*/, (0, exports.getAppSetting)()];
            case 3: return [2 /*return*/, _a.sent()];
            case 4:
                error_4 = _a.sent();
                (0, utils_1.throwError)();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.addAppSettings = addAppSettings;
