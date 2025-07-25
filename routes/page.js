var express = require("express");
var router = express.Router();
var pageController = require("../controllers/page.controller");

router.get("", pageController.index);

module.exports = router;
