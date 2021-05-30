const multer = require("multer")
const filepath = "../resources/item-images";
const util = require("util");
const path = require("path");

var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(`${__dirname}/${filepath}`));
  },
  filename: (req, file, callback) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      var message = `${file.originalname} không hợp lệ! Chỉ chấp nhận file đuôi .png hoặc .jpeg.`;
      return callback(message, null);
    }

    var filename = `${Date.now()}-image${path.extname(file.originalname)}`;
    callback(null, filename);
  }
});

var uploadFiles = multer({ storage: storage }).array("multi-files", 100);
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;