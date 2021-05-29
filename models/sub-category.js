const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema(
    {
    name: {type: String, required: true},
    item: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item'}]
  },
  {
    collection: "subcategories",
  }
)

module.exports = mongoose.model("SubCategory", subCategorySchema);