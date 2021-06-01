const router = require("express").Router();
const userController = require("../../controllers/user.js");

// GET ALL

router.post('/user/login', userController.adminLogin);

router.post('/user/register', userController.adminSignup);

router.post('/user/autologin', userController.adminAutoLogin);


//////////////////////////////////////////////////////////////

module.exports = router;