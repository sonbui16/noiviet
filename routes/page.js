var express = require("express");
var router = express.Router();
var pageController = require("../controllers/page.controller");

router.get("/", pageController.index);
router.get("/privacy", pageController.privacy)
router.get("/terms-of-use", pageController.termsOfUse)



module.exports = router;
