var express = require('express');
var router = express.Router();
const imagescontroller=require('../controller/images.controller')



  

router.get('/all/:id',imagescontroller.getAll)
//router.post('/create',subccontroller.create)
//router.post('/delete/:id',productcontroller.delete)
//router.post('/update',productcontroller.update)
 router.get('/search/:id',imagescontroller.search)

module.exports = router;
