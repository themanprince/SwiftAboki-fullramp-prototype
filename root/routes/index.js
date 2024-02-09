var express = require('express');
var router = express.Router();
const getSupportedCurrencies = require(__dirname + "/../codesAbeg/getSupportedCurrencies");
const {transakAPIKey, ethAddr} = require(__dirname + "/../constants.js");
const convertToQueryString = require(__dirname + "/../codesAbeg/object-to-query-string.js");
/* GET home page. */
router.get('/', function(req, res, next) {
	const queryString = convertToQueryString({transakAPIKey, "walletAddress": ethAddr});
	const shouldShow = false;
	res.render('index', {queryString, shouldShow});
});


/*router.post('/', function(req, res, next) {
	
	const {senderCurr, amount} = req.body;
	
	const infoToPass = {
		  apiKey: transakAPIKey, // (Required)
		  environment: 'PRODUCTION',
		  walletAddress: ethAddr,
		  exchangeScreenTitle: "Send Money",
		  productsAvailed: "BUY",
		  fiatAmount: amount,
		  fiatCurrency: senderCurr,
		  network: "ethereum",
		  cryptoCurrencyCode: "USDT",
		  isFeeCalculationHidden: true
	};
	
	const queryString = convertToQueryString(infoToPass);
	const shouldShow = true;
	res.render('index', {queryString, shouldShow});
});*/

module.exports = router;
