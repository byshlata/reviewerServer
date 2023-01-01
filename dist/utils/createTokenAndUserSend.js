"use strict";
exports.__esModule = true;
exports.createTokenAndUserSend = void 0;
var utils_1 = require("../utils");
var createTokenAndUserSend = function (user) { return ({
    user: (0, utils_1.createUserSend)(user),
    token: (0, utils_1.createToken)(user._id)
}); };
exports.createTokenAndUserSend = createTokenAndUserSend;
