var express = require('express');
var userController = require('../controllers/user.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', userController.index);
router.get('/add', userController.add);


module.exports = router;
