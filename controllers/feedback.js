const Feedback = require("../models/feedback.js")

exports.addFeedback = async (req, res) => {
    try {
        
    const feedback = new Feedback({
      image: req.body.image,
    })
    const savedFeedback = await feedback.save()
    return res.status(200).json(savedFeedback);
    } catch (err) {
    console.log(err);
    return res.status(500).json(err);
    }
  };
  exports.deleteFeedback = async (req, res) => {
    try {
    let id = req.body._id;
    const feedback = await Feedback.findByIdAndDelete(id,(err,docs)=>{
      if (err) {
        console.log(err)
      } else {
        console.log(docs)
      }
    })
    return res.status(200).json({ msg: "Xoa feedback thanh cong" });
    } catch (err) {
    console.log(err);
    return res.status(500).json(err);
    }
  };
  exports.getFeedbacks = async (req, res) => {
    try {
    const feedbacks = await Feedback.find().populate("item")
    return res.status(200).json(feedbacks);
    } catch (err) {
    console.log(err);
    return res.status(500).json(err);
    }
  };
