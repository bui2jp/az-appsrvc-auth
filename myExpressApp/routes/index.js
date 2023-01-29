var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(req.headers);
  console.log("req.headers...");

  //AppService1の認証では以下の4つがヘッダーに設定されてきます
  console.log('x-ms-client-principal: ', req.header('x-ms-client-principal'))
  console.log('x-ms-client-principal-id: ', req.header('x-ms-client-principal-id'))
  console.log('x-ms-token-aadb2c-id-token: ', req.header('x-ms-token-aadb2c-id-token'))
  console.log('x-ms-client-principal-idp: ', req.header('x-ms-client-principal-idp'))  

  res.render('index', { title: 'Express (chikutaku)' });
});

module.exports = router;
