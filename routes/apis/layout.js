const router = require("express").Router();
const layoutController = require("../../controllers/layout.js");

// GET ALL

router.get('/layout', layoutController.getLayout);

router.post('/layout', layoutController.createLayout);

router.patch('/layout', layoutController.updateLayout);


//////////////////////////////////////////////////////////////

module.exports = router;