"use strict";
exports.__esModule = true;
exports.decipherToken = void 0;
var jwt = require('jsonwebtoken');
var decipherToken = function (token, secret) { return (jwt.verify(token, secret)).id; };
exports.decipherToken = decipherToken;
