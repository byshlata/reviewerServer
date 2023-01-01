import { s3Client } from "./client";

const multer = require('multer');
const multerS3 = require('multer-s3');

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type, only JPEG and PNG is allowed!'), false);
    }
}

const UploadFileAmazonCloud = (bucket: string) => {
    return multer({
        fileFilter,
        storage: multerS3({
            acl: 'public-read',
            s3: s3Client,
            bucket,
            metadata: function (req, file, cb) {
                cb(null, { fieldName: file.fieldname });
            },
            key: function (req, file, cb) {
                cb(null, Date.now().toString() + file.originalname)
            }
        })
    });
}

module.exports = UploadFileAmazonCloud;
