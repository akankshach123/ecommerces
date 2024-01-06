var express = require('express');
var router = express.Router();
const multer  = require('multer');
const productcontroller=require('../controller/product.controller')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload')
    },
    filename: function (req, file, cb) {
        let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
      const uniqueSuffix = Date.now();
      cb(null, file.fieldname + '-' + uniqueSuffix+ext)
    }
  })
  
const upload = multer({ storage: storage })
  
router.get('/',productcontroller.getAll)
router.post('/create',upload.array('profile',10),productcontroller.create)
router.post('/delete/:id',productcontroller.delete)
router.post('/update',productcontroller.update)
router.get('/search/:id',productcontroller.search)

module.exports = router;
