const {providersList} = require(__dirname + "/../constants.js");
const getSupportedCurrencies = require(__dirname);

module.exports = async function determineProvider(currency) {
	for(let provider of providersList) {
		const supportedCurrencies = await getSupportedCurrencies(provider);
		if(supportedCurrencies.indexOf(currency) > -1)
			return provider;
	}
	
	return -1; //no supporting provider
}