"use strict";
exports.__esModule = true;
exports.createToken = void 0;
var secret_1 = require("../enums/secret");
var jwt = require('jsonwebtoken');
var createToken = function (id) { return jwt.sign({ id: id }, secret_1.Secret.Secret, { expiresIn: '30d' }); };
exports.createToken = createToken;
