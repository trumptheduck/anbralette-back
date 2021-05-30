const router = require("express").Router();
const categoryController = require("../../controllers/category.js");

// GET ALL CAT

router.get('/categories', categoryController.getAllCategory);

// CREATE CAT

router.post("/category", categoryController.createCategory);

// CREATE SUBCAT

router.post("/subcategory", categoryController.createSubCategoryInCategory);

// REMOVE CAT

router.delete("/category", categoryController.deleteCategory);

// REMOVE SUBCAT

router.delete("/subcategory", categoryController.deleteSubCategory);

// UPDATE SUBCAT

router.patch("/subcategory", categoryController.updateSubCategory);

// //////////////////////////////////////////////////////////////

module.exports = router;