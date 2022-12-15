"use strict";
exports.__esModule = true;
exports.User = void 0;
var mongoose_1 = require("mongoose");
var enums_1 = require("../enums");
var userSchema = new mongoose_1.Schema({
    login: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: String, required: true, "default": enums_1.Status.Active },
    rights: { type: String, required: true, "default": enums_1.Rights.User }
}, {
    timestamps: true
});
exports.User = (0, mongoose_1.model)('User', userSchema);
