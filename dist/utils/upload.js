var util = require("util");
var Multer = require("multer");
var maxSize = 2 * 1024 * 1024;
var processFile = Multer({
    storage: Multer.memoryStorage(),
    limits: { fileSize: maxSize }
}).single("file");
var processFileMiddleware = util.promisify(processFile);
module.exports = processFileMiddleware;
