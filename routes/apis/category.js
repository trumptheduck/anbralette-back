const router = require("express").Router();
const categoryController = require("../../controllers/category.js");
const verifyMiddleware = require('../../middlewares/verify.js')
// GET ALL CAT

router.get('/categories', categoryController.getAllCategory);

// CREATE CAT

router.post("/category", verifyMiddleware,categoryController.createCategory);

// CREATE SUBCAT

router.post("/subcategory", verifyMiddleware,categoryController.createSubCategoryInCategory);

// REMOVE CAT

router.post("/category/remove", verifyMiddleware,categoryController.deleteCategory);

// REMOVE SUBCAT

router.post("/subcategory/remove", verifyMiddleware,categoryController.deleteSubCategory);

// UPDATE SUBCAT

router.patch("/subcategory", verifyMiddleware,categoryController.updateSubCategory);

// //////////////////////////////////////////////////////////////

module.exports = router;