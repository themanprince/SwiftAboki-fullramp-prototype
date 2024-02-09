import initiateWidget from "./initiateWidget.js";
import handleRamping from "./handleRamping.js";

import {transakAPIKey, ethAddr} from "./constants.js";


const btn = document.getElementById("sendBtn");
btn.addEventListener("click", function onRamp() {
	const amount = document.getElementById("amount").value;
	const sendCurr = document.getElementById("sendCurr").value;
	const infoToPass = {
	  apiKey: transakAPIKey, // (Required)
	  environment: 'STAGING',
	  walletAddress: ethAddr,
	  exchangeScreenTitle: "Send Money",
	  productsAvailed: "BUY",
	  fiatAmount: amount,
	  fiatCurrency: sendCurr,
	  network: "ethereum",
	  cryptoCurrencyCode: "USDT",
	  isFeeCalculationHidden: true
};

	
	handleRamping(sendCurr, initiateWidget(infoToPass));
});