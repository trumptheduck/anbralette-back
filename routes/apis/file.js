const fileController = require("../../controllers/file.js")
const uploadMiddleware = require("../../middlewares/upload.js")
const router = require("express").Router();
const verifyMiddleware = require('../../middlewares/verify.js')

router.post('/files', fileController.verifyUploadFiles)

router.get('/files',verifyMiddleware, fileController.getAllFilePath)

router.post('/deletefiles',verifyMiddleware, fileController.deleteFiles)

module.exports = router;
