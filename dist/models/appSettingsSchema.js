"use strict";
exports.__esModule = true;
exports.AppSettings = void 0;
var mongoose_1 = require("mongoose");
var enums_1 = require("../enums");
var appSettingsSchema = new mongoose_1.Schema({
    name: { type: String, required: true, "default": enums_1.AppSettingsEnum.AppSettings },
    category: {
        type: [String],
        required: true,
        "default": ['Movies', 'Books', 'Foods', 'Jobs', 'Other',]
    },
    tags: { type: [String] },
    __v: { type: Number, select: false },
    createdAt: { type: String, select: false },
    updatedAt: { type: String, select: false }
}, {
    timestamps: true
});
exports.AppSettings = (0, mongoose_1.model)('AppSettings', appSettingsSchema);
