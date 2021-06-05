const router = require("express").Router();
const feedbackController = require("../../controllers/feedback.js");
const verifyMiddleware = require('../../middlewares/verify.js')
// GET ALL

router.get('/feedbacks', feedbackController.getFeedbacks);

router.post('/feedback', verifyMiddleware,feedbackController.addFeedback);

router.post('/feedback/delete', verifyMiddleware,feedbackController.deleteFeedback);


//////////////////////////////////////////////////////////////

module.exports = router;