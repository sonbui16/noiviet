var express = require('express');

var homeController = require('../controllers/home.controller');
var router = express.Router();

/* GET home page. */
router.get('/', homeController.index);
router.get('/about-us', homeController.aboutUs);

module.exports = router;
