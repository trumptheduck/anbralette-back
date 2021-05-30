const fs = require("fs");
const filepath = "./resources/item-images";
const upload = require("../middlewares/upload.js")

exports.verifyUploadFiles = async (req, res) => {
    try {
      await upload(req, res);
  
      if (req.files.length <= 0) {
        return res.send(`Bạn phải chọn ít nhất 1 file.`);
      }
  
      return res.send(`Đã tải lên: ${req.files.length} files`);
    } catch (error) {
      console.log(error);
  
      if (error.code === "LIMIT_UNEXPECTED_FILE") {
        return res.send("Quá nhiều files để upload!");
      }
      return res.send(`Xảy ra lỗi khi đang tải lên nhiều files: ${error}`);
    }
  };

exports.getAllFilePath = (req,res) => {
    fs.readdir(filepath, (err, files) => {
        console.log(files)
        res.send(JSON.stringify({files:files}))
    });
}
exports.deleteFiles = (req,res) => {
    var deleteList = req.body.files;
    var deleted = 0;
    deleteList.forEach(image => {
        fs.unlink(filepath + "/" + image, (err) => {
            deleted++
            if (err) {
              console.error(err)
            } else {
              console.log("Removed: ",image)
            }
            if (deleted === deleteList.length) {
                res.send({msg: `Đã xóa ${deleted} files`})
            }
          })
    })
}