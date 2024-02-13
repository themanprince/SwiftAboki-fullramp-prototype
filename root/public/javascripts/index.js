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
	  isFeeCalculationHidden: true,
	  userData: {
		  firstName: 'Doe',
		  lastName: 'Jane',
		  mobileNumber: '+337911123456',
		  dob: '1998-01-01',
		  address: {
		    addressLine1: '170 Rue du Faubourg Saint-Denis, Paris',
		    city: 'Paris',
		    state: 'Paris',
		    postCode: '75010',
			countryCode: "FR"
		  }
	  }
	};

	console.log("config object is", infoToPass);
	
	handleRamping(sendCurr, initiateWidget(infoToPass));
});