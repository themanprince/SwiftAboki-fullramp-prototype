import {providersList} from "./constants.js";
import getSupportedCurrencies from "./getSupportedCurrencies.js";

export default async function determineProvider(currency) {
	for(let provider of providersList) {
		const supportedCurrencies = await getSupportedCurrencies(provider);
		if(supportedCurrencies.indexOf(currency) > -1)
			return provider;
	}
	
	return -1; //no supporting provider
}