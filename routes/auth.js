var express = require('express');
var authController = require('../controllers/auth.controller');
var router = express.Router();

/* GET users listing. */
router.get('/dang-nhap', authController.index);



module.exports = router;
