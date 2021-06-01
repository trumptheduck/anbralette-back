const mongoose = require("mongoose");

const layoutSchema = new mongoose.Schema(
  {
    homepage: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
  },
  {
    collection: "layouts",
  }
);
module.exports = mongoose.model("Layout", layoutSchema);