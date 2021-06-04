const router = require("express").Router();
const orderController = require("../../controllers/order.js");

// GET ALL
router.get('/coupons', orderController.getAllCoupon);

router.post('/coupon/get', orderController.getCoupon);

router.post('/coupon', orderController.addCoupon);

router.post('/coupon/delete', orderController.deleteCoupon);

router.get('/orders', orderController.getOrders);

router.post('/order/get', orderController.getOrderById);

router.post('/order', orderController.addOrder);

router.patch('/order', orderController.changeOrderStatus);

router.post('/order/delete', orderController.removeOrder);


//////////////////////////////////////////////////////////////

module.exports = router;