const router = require("express").Router();
const itemController = require("../../controllers/item.js");
const verifyMiddleware = require('../../middlewares/verify.js')
// GET ALL

router.get('/items', itemController.getItems);

//GET BY item_id

router.get("/item/get/:id", itemController.getItemById);

// CREATE

router.post("/item",verifyMiddleware, itemController.createItem);

// EDIT

router.patch("/item",verifyMiddleware, itemController.editItem);

// REMOVE

router.post("/item/remove",verifyMiddleware, itemController.removeItem);

//////////////////////////////////////////////////////////////

module.exports = router;