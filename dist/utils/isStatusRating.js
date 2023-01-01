"use strict";
exports.__esModule = true;
exports.isStatusRating = void 0;
var isStatusRating = function (_a) {
    var idUsers = _a.idUsers, idUser = _a.idUser;
    return !!idUsers.find(function (id) { return String(id) === String(idUser); });
};
exports.isStatusRating = isStatusRating;
