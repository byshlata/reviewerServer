import { S3Client } from "@aws-sdk/client-s3";

const multer = require('multer');
const multerS3 = require('multer-s3');


let s3 = new S3Client({
    region: 'eu-north-1',
    credentials: {
        accessKeyId: "AKIAZ2H2CHOLE5IQ2XTL",
        secretAccessKey: "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",
    },
});


const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type, only JPEG and PNG is allowed!'), false);
    }
}

const upload = multer({
    fileFilter,
    storage: multerS3({
        acl: 'public-read',
        s3,
        bucket: 'avatar-public-image',
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString()+file.originalname)
        }
    })
});

module.exports = upload;
