import {transakAPIKey} from "./constants.js";

export default async function getSupportedCurrencies(provider) {
	switch(provider) {
		case "luno":
			//dont matter if its for onRamp or for offRamp, it supports same currencies
			return ["EUR", "GBP", "MYR", "NGN", "UGX", "ZAR", "ZMW"];
			break;
		case "transak":
			const url = `https://api.transak.com/api/v2/currencies/fiat-currencies?apiKey=${transakAPIKey}`;
			const options = {
				"method": "GET",
				headers: {"accept": "application/json"}
			};
			const result = await fetch(new Request(url, options));
			const currenciesObj = (await result.json())
			const currencies = currenciesObj["response"].map(kini => kini.symbol);
			
			return currencies;
			break;
		default:
			break;
	}

}