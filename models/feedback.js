const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
    {
    image: {type: String, required: true},
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item'},
  },
  {
    collection: "feedbacks",
  }
)

module.exports = mongoose.model("Feedback", couponSchema);