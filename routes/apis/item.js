const router = require("express").Router();
const itemController = require("../../controllers/item.js");

// GET ALL

router.get('/items', itemController.getItems);

//GET BY item_id

router.get("/item/get/:id", itemController.getItemById);

// CREATE

router.post("/item", itemController.createItem);

// EDIT

router.patch("/item", itemController.editItem);

// REMOVE

router.post("/item/remove", itemController.removeItem);

//////////////////////////////////////////////////////////////

module.exports = router;