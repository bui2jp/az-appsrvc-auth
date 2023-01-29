var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //console.log(req.headers);
  res.send('respond with a resource (chikutaku)');
});

module.exports = router;
