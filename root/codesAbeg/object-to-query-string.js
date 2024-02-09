module.exports = function convert(obj) {
	const keys = Object.keys(obj);
	const strings = keys.map(key => `${key}=${obj[key]}`);
	return strings.join("&");
}