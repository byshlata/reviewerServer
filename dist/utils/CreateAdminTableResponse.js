"use strict";
exports.__esModule = true;
exports.createAdminTableResponse = void 0;
var createAdminTableResponse = function (reviews) {
    return reviews.map(function (_a) {
        var rating = _a.rating, rights = _a.rights, login = _a.login, status = _a.status, _id = _a._id;
        return ({ rights: rights, status: status, rating: rating, login: login, idUser: _id });
    });
};
exports.createAdminTableResponse = createAdminTableResponse;
