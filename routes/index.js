const router = require('express').Router();

router.use('/api/user', require('./api/user'));
router.use('/api/service', require('./api/service'));

module.exports = router;
