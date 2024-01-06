var express = require('express');
var router = express.Router();
const multer  = require('multer');
const colorsimages=require('../controller/colorsimage.controller')

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


  

router.get('/all',colorsimages.getAll)
router.post('/create',upload.array('profile',10),colorsimages.create)
//router.post('/delete/:id',productcontroller.delete)
//router.post('/update',productcontroller.update)
//router.post('/search/:Name',categorycontroller.serch)

module.exports = router;
