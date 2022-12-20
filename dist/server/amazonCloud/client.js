"use strict";
exports.__esModule = true;
exports.s3Client = void 0;
var client_s3_1 = require("@aws-sdk/client-s3");
var s3Client = new client_s3_1.S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});
exports.s3Client = s3Client;
