const mongoose = require("mongoose");
const Item = require("./item.js")

const orderSchema = new mongoose.Schema(
    {
      name: {type: String, required: true},
      phone: {type: String, required: true},
      province: {type: String, required: true},
      address: {type: String, required: true},
      note: {type: String},
      coupon: {type: String},
      discount: {type: Number},
      payload: [{
        amount: {type: Number, required: true},
        size: {type: String, required: true},
        item: { type: Item.schema, required: true}
      }],
      date: {type: String, required: true},
      status: {type: String, required: true},
      total: {type: Number, required: true},
      payment: {type: String, required: true}
    },
    {
      collection: "orders",
    }
  );

module.exports = mongoose.model("Order", orderSchema);