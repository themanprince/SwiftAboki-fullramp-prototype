var express = require('express');
var router = express.Router();
const getSupportedCurrencies = require(__dirname + "/../codesAbeg/getSupportedCurrencies");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

module.exports = router;
