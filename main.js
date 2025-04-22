/**
* @preserve
* Filename: main.js
*
* Created: 11/12/2024 (19:55:25)
* Created by: Lorenzo Saibal Forti <lorenzo.forti@gmail.com>
*
* Last update: 22/04/2025 (16:38:58)
* Updated by: Lorenzo Saibal Forti <lorenzo.forti@gmail.com>
*
* Copyleft: 2024 - Tutti i diritti riservati
*
* Comments:
*/

const validUrl = require("valid-url");
const validate = require("./lib/validate");

module.exports = (options) => {

	if (!options) {
		throw new Error("Missing required input: options object");
	}

	if (!options.url && !options.data) {
		throw new Error("Missing required params: url or data");
	}

	if (options.url && !validUrl.isWebUri(options.url)) {
		throw new Error("Invalid url");
	}

	return validate(options);
};
