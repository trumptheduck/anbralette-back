const router = require("express").Router();
const userController = require("../../controllers/user.js");
const verifyMiddleware = require('../../middlewares/verify.js')
// GET ALL

router.post('/user/login', userController.adminLogin);

router.post('/user/register',verifyMiddleware, userController.adminSignup);

router.post('/user/autologin', userController.adminAutoLogin);


//////////////////////////////////////////////////////////////

module.exports = router;