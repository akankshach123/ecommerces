var express = require('express');
var router = express.Router();
const  categorycontroller=require('../controller/category.controller')




router.get('/all',categorycontroller.getAll)
router.post('/create',categorycontroller.create)
//router.post('/delete/:id',productcontroller.delete)
//router.post('/update',productcontroller.update)
//router.post('/search/:Name',categorycontroller.serch)

module.exports = router;
