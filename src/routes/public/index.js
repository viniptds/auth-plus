var express = require('express');
var router = express.Router();

var UserController = require("../../controller/public/UserController");

router.post('/register', UserController.register);

module.exports = router;
