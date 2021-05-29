const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
    name: {type: String, required: true},
    children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' }]
  },
  {
    collection: "categories",
  }
)

module.exports = mongoose.model("Category", categorySchema);