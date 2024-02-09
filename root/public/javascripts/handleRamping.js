const {providersList} = require(__dirname + "/../constants.js");
const determineProvider = require(__dirname);

module.exports = async function handleRamping(currency, finalAction) {
	const currencyProvider = await determineProvider(currency);
	if(currencyProvider === -1)
		throw new Error("No provider found for currency %s", currency);
	else
		finalAction(currencyProvider);
}