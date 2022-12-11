var express = require('express');
var router = express.Router();

var adminRouter = require('./admin/index');
var publicRouter = require('./public/index');

router.use('/admin', adminRouter);
router.use('/', publicRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: 'Hello World' });
});

module.exports = router;
