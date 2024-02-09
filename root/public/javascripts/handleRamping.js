import {providersList} from "./constants.js";
import determineProvider from "./determineProvider.js";

export default async function handleRamping(currency, finalAction) {
	const currencyProvider = await determineProvider(currency);
	if(currencyProvider === -1)
		throw new Error("No provider found for currency %s", currency);
	else
		finalAction(currencyProvider);
}