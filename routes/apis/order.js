const router = require("express").Router();
const orderController = require("../../controllers/order.js");
const verifyMiddleware = require('../../middlewares/verify.js')
// GET ALL
router.get('/coupons', verifyMiddleware,orderController.getAllCoupon);

router.post('/coupon/get', orderController.getCoupon);

router.post('/coupon', verifyMiddleware,orderController.addCoupon);

router.post('/coupon/delete', verifyMiddleware,orderController.deleteCoupon);

router.get('/orders',orderController.getOrders);

router.post('/order/get', orderController.getOrderById);

router.post('/order', orderController.addOrder);

router.patch('/order', verifyMiddleware,orderController.changeOrderStatus);

router.post('/order/delete', verifyMiddleware,orderController.removeOrder);


//////////////////////////////////////////////////////////////

module.exports = router;