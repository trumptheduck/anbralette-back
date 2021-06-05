const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
    {
    image: {type: String, required: true},
  },
  {
    collection: "feedbacks",
  }
)

module.exports = mongoose.model("Feedback", couponSchema);