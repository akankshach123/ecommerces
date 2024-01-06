var express = require('express');
var router = express.Router();
const  offercontroller=require('../controller/offer.controller')
router.get('/search',offercontroller.getAll)
router.post('/create',offercontroller.create)
module.exports = router;
