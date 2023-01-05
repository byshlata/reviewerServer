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
var mongoose_1 = require("mongoose");
var path_1 = require("../enums/path");
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var express = require('express');
var cors = require('cors');
var authMe = require('./routes/authRouter');
var authSocial = require('./routes/authSocialRouter');
var register = require('./routes/registerRouter');
var login = require('./routes/loginRouterRouter');
var logout = require('./routes/logoutRouter');
var createReview = require('./routes/createReviewRouter');
var editReview = require('./routes/editReviewRouter');
var changeAvatar = require('./routes/changeAvatarRouter');
var reviews = require('./routes/reviewsRouter');
var review = require('./routes/reviewRouter');
var users = require('./routes/usersRouter');
var getUser = require('./routes/userRouter');
var appSettings = require('./routes/appSettingsRouter');
var config = require('dotenv').config;
require("dotenv").config();
config();
function run() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, mongoose_1.connect)(process.env.DB_HOST)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
run()["catch"](function (err) { return console.log(err); });
var app = express();
process.on('unhandledRejection', function (reason, p) {
    console.log(reason, p);
});
var corsOptions = {
    origin: ["https://byshlata.github.io", "http://localhost:3000", "https://vercel.com", "https://reviewer-rust.vercel.app", "https://reviewer-rust.vercel.app/"],
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ['GET', 'PUT', 'POST', 'DELETE']
};
app.use(cors(corsOptions));
app.use(express.json());
app.use((0, cookie_parser_1["default"])());
app.use("".concat(path_1.Path.PrivacyPolicy), express.static('public'));
app.use("".concat(path_1.Path.Review), review);
app.use("".concat(path_1.Path.Reviews), reviews);
app.use("".concat(path_1.Path.Register), register);
app.use("".concat(path_1.Path.Social), authSocial);
app.use("".concat(path_1.Path.Login), login);
app.use("".concat(path_1.Path.Logout), logout);
app.use("".concat(path_1.Path.Auth), authMe);
app.use("".concat(path_1.Path.ChangeAvatar), changeAvatar);
app.use("".concat(path_1.Path.CreateReview), createReview);
app.use("".concat(path_1.Path.EditReview), editReview);
app.use("".concat(path_1.Path.User), getUser);
app.use("".concat(path_1.Path.Users), users);
app.use("".concat(path_1.Path.AppSettings), appSettings);
var port = process.env.PORT || 5050;
app.listen(port, function () {
    console.log("server is listening on port ".concat(port));
});
