var express = require('express');
var router = express.Router();
const subccontroller=require('../controller/subc.controller ')



  

router.get('/search',subccontroller.getAll)
router.post('/create',subccontroller.create)
//router.post('/delete/:id',productcontroller.delete)
//router.post('/update',productcontroller.update)
//router.post('/search/:Name',categorycontroller.serch)

module.exports = router;
