"use strict";
exports.__esModule = true;
var client_1 = require("./client");
var multer = require('multer');
var multerS3 = require('multer-s3');
var fileFilter = function (req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }
    else {
        cb(new Error('Invalid file type, only JPEG and PNG is allowed!'), false);
    }
};
var UploadFileAmazonCloud = function (bucket) {
    return multer({
        fileFilter: fileFilter,
        storage: multerS3({
            acl: 'public-read',
            s3: client_1.s3Client,
            bucket: bucket,
            metadata: function (req, file, cb) {
                cb(null, { fieldName: file.fieldname });
            },
            key: function (req, file, cb) {
                cb(null, Date.now().toString() + file.originalname);
            }
        })
    });
};
module.exports = UploadFileAmazonCloud;
