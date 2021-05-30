const fileController = require("../../controllers/file.js")
const uploadMiddleware = require("../../middlewares/upload.js")
const router = require("express").Router();

router.post('/files', fileController.verifyUploadFiles)

router.get('/files', fileController.getAllFilePath)

router.post('/deletefiles', fileController.deleteFiles)

module.exports = router;
