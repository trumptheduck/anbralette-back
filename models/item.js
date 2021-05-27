const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    item_id: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    images: {type: [String]},
    sizes: {type: [String]},
    description: {type: String, required: true},
    discount: {type: Number},
  },
  {
    collection: "items",
  }
);
itemSchema.methods.updateData = function (data) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.images = data.images;
    this.sizes = data.sizes;
    this.description = data.description;
    this.discount = data.discount;
    this.save()
}

module.exports = mongoose.model("Item", itemSchema);