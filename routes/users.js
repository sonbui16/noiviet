var express = require('express');
var userController = require('../controllers/user.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', userController.index);
router.get('/add', userController.add);
router.post('/add', userController.handleAdd);

router.get('/edit/:id', userController.edit);
router.post('/edit/:id', userController.handleEdit);


module.exports = router;
