var express = require('express');
var router = express.Router();

var userRouter = require('./user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: 'Hello World' });
});

router.use('/users', userRouter);

module.exports = router;
