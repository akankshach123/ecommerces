var express = require('express');
var router = express.Router();
const ordercontroller=require('../controller/order.controller')
router.get('/',ordercontroller.getAll)
router.post('/create',ordercontroller.corder)
router.post('/delete/:id',ordercontroller.delete)
router.post('/search/:id',ordercontroller.search)
module.exports = router;
