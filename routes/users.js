var express = require('express');
var router = express.Router();
const { body } = require('express-validator');
const usercontroller=require('../controller/user.controller')
router.get('/all/:id',usercontroller.getAll);
router.post('/create',
[body('first_name').notEmpty().withMessage("Please enter your name")
    .isLength({
      min: 2, max: 30
    }).withMessage("Please enter a valid in length min 2 max 30"),

    body('last_name').notEmpty().withMessage("Please enter your name")
   .isLength({
      min: 2, max: 30
  }).withMessage("Please enter a valid in length min 2 max 30"),

  body('email').notEmpty().withMessage("Email is required").isEmail()
    .withMessage("Please enter a valid email"),
    
  body('phone_number').notEmpty().withMessage("Mobile is required")
    .isNumeric().isLength({ min: 10, max: 12 })
  ],usercontroller.createc);

//router.post('/update',usercontroller.update);
router.post('/delete/:id',usercontroller.delete);
router.get('/search/:id',usercontroller.search);
router.post('/send-otp',usercontroller.generateOtp);



module.exports = router;



