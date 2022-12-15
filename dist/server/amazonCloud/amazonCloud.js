var multer = require('multer');
var multerS3 = require('multer-s3');
var aws = require('aws-sdk');
aws.config.update({
    secretAccessKey: "3AfBmqzBgDlb2NDWT6Yb0DVupOfBx4czYsG9N++Y",
    accessKeyId: "AKIAZ2H2CHOLCW64BC22",
    region: 'eu-north-1'
});
var s3 = new aws.S3();
var fileFilter = function (req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }
    else {
        cb(new Error('Invalid file type, only JPEG and PNG is allowed!'), false);
    }
};
var upload = multer({
    fileFilter: fileFilter,
    storage: multerS3({
        acl: 'public',
        s3: s3,
        bucket: 'article-public-image',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: 'TESTING_METADATA' });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString());
        }
    })
});
module.exports = upload;
