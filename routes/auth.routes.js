var express = require('express');
var router = express.Router();
const authControllers=require('../controller/auth.controller');
router.post('/login', authControllers.loginUser);
module.exports = router;