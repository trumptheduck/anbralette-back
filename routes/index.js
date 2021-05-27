const router = require('express').Router();

router.use('/apis', require('./apis/item.js'));

module.exports = router;
