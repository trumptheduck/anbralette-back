const router = require('express').Router();

router.use('/apis', require('./apis/item.js'));
router.use('/apis', require('./apis/category.js'));
router.use('/apis', require('./apis/file.js'));
router.use('/apis', require('./apis/user.js'));
router.use('/apis', require('./apis/layout.js'));

module.exports = router;
