const router = require('express').Router();

router.use('/apis', require('./apis/item.js'));
router.use('/apis', require('./apis/category.js'));

module.exports = router;
