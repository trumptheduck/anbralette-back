const router = require("express").Router();
const feedbackController = require("../../controllers/feedback.js");

// GET ALL

router.get('/feedbacks', feedbackController.getFeedbacks);

router.post('/feedback', feedbackController.addFeedback);

router.post('/feedback/delete', feedbackController.deleteFeedback);


//////////////////////////////////////////////////////////////

module.exports = router;