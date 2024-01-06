var express = require('express');
var router = express.Router();
const paymentcontroller=require('../controller/payment.controller')
router.get('/',paymentcontroller.getAll)
router.post('/create',paymentcontroller.create)
module.exports = router;