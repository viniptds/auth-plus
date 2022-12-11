const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.json({msg: 'Hello World!'});
});

const application = require('./application');
const claim = require('./claim');
const role = require('./role');
const user = require('./user');

router.use('/app',  application);
router.use('/claim',  claim);
router.use('/role',  role);
router.use('/user',  user);

// models.sequelize
//   .authenticate()
//   .then(function () {
//     console.log('Connection successful');
//   })
//   .catch(function(error) {
//     console.log("Error creating connection:", error);
//   });


module.exports = router;