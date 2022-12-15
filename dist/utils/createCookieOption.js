"use strict";
exports.__esModule = true;
exports.createCookieOption = void 0;
var utils_1 = require("../utils");
var createCookieOption = function () { return ({
    expires: (0, utils_1.createDataLiveCookie)(),
    secure: true,
    httpOnly: true,
    sameSite: 'none'
}); };
exports.createCookieOption = createCookieOption;
