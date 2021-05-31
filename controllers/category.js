const SubCategory = require("../models/sub-category.js")
const Category = require("../models/category.js")

exports.getAllCategory = async (req,res) => {
    try {
        var allCategory = await Category.find()
        if (allCategory.length !== 0) {
          allCategory = await Category.find().populate({
            path:"children",
            populate: { path: 'item' }
          })
        }
        return res.status(200).json(allCategory);
        } catch (err) {
        console.log(err);
        return res.status(500).json(err);
        }
}

exports.createCategory = async (req, res) => {
    try {
    let catName = req.body.name;
    const category = new Category({
      name: catName,
      item: []
    })
    const createdItem = await category.save();
  
    return res.status(200).json(createdItem);
    } catch (err) {
    console.log(err);
    return res.status(500).json(err);
    }
  };
  
  exports.deleteCategory = async (req, res) => {
    try {
    let catID = req.body.category._id
    await Category.findByIdAndRemove(catID,(err,docs)=>{
      if (err) {
        console.log(err);
      } else {
          console.log(docs)
          docs.children.forEach(child => {
              console.log(child)
            SubCategory.findByIdAndRemove(child,(err,sub)=>{
                if (err) {
                    console.log(err)
                } else {
                    console.log(sub)
                }
            });
        })
      }
    })
  
    return res.status(200).json({ msg: "Xoa danh muc thanh cong" });
    } catch (err) {
    console.log(err);
    return res.status(500).json(err);
    }
  };
  
  exports.createSubCategoryInCategory = async (req, res) => {
    try {
      let catID = req.body.category._id;
      let subCatName = req.body.subCategory.name;
      const subCategory = new SubCategory({
        name: subCatName,
        item: []
      })
      console.log(catID)
      const createdSubCat = await subCategory.save(function (err,subcat) {
        Category.findById(catID,(err,docs)=>{
          docs.children.push(subcat._id);
          docs.save()
        })
      });
      return res.status(200).json(subCategory);
      } catch (err) {
      console.log(err);
      return res.status(500).json(err);
      }
  }
  
  exports.deleteSubCategory = async (req, res) => {
    try {
      let catID = req.body.category._id;
      let subCatID = req.body.subCategory._id;
      await Category.findById(catID,(err, docs) => {
        const subCats = docs.children
        const subCat = subCats.find(sub => sub == subCatID)
        if (subCat !== undefined) {
          docs.children.splice(subCats.indexOf(subCat),1)
          docs.save();
          SubCategory.findByIdAndRemove(subCatID,(err,docs)=>{
              if (err) {
                  console.log(err)
              } else {
                  console.log(docs)
              }
          })
        }
      })
  
      return res.status(200).json({msg: "Xoa subcat thanh cong!"});
      } catch (err) {
      console.log(err);
      return res.status(500).json(err);
      }
  }
  
  exports.updateSubCategory = async (req, res) => {
    try {
      let subCatID = req.body.subCategory._id;
      let items = req.body.items;
      await SubCategory.findById(subCatID,(err, docs) => {
          console.log(docs)
        docs.item = items;
        docs.save();
      })
      return res.status(200).json(items);
      } catch (err) {
      console.log(err);
      return res.status(500).json(err);
      }
    }