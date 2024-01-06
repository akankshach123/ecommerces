var express = require('express');
var router = express.Router();
const order_items=require('../controller/order_items.controller')
router.get('/',order_items.getAll)
router.post('/create',order_items.corder)
//router.post('/delete/:id',ordercontroller.delete)
//router.post('/search/:id',ordercontroller.search)
module.exports = router;
