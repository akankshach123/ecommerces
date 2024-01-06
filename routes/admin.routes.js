var express = require('express');
var router = express.Router();
const { body } = require('express-validator');
const admincontroller=require('../controller/admin.controller')
router.get('/',admincontroller.getAll);
router.post('/create',
[body('first_name').notEmpty().withMessage("Please enter your name")
 .isAlpha().withMessage("Please enter Valid Name in char only").isLength({
  min: 2, max: 30
}).withMessage("Please enter a valid in length min 2 max 30"),

body('last_name').notEmpty().withMessage("Please enter your name")
.isAlpha().withMessage("Please enter Valid Name in char only").isLength({
  min: 2, max: 30
}).withMessage("Please enter a valid in length min 2 max 30"),

 body('email').notEmpty().withMessage("Email is required").isEmail()
.withMessage("Please enter a valid email"),
    
 body('phone').notEmpty().withMessage("Mobile is required")
    .isNumeric().isLength({ min: 10, max: 12 })
  ],admincontroller.createA);
   router.post('/delete/:id',admincontroller.delete);
   module.exports = router;



