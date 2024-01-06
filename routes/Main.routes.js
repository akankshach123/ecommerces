var express = require('express');
var router = express.Router();

const  Maincontroller=require('../controller/Main.controller - ')


  

router.get('/all',Maincontroller.getAll)
router.post('/create',Maincontroller.create)
//router.post('/delete/:id',productcontroller.delete)
//router.post('/update',productcontroller.update)
//router.post('/search/:Name',categorycontroller.serch)

module.exports = router;
