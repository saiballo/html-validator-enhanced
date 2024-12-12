/**
* @preserve
* Filename: validate.js
*
* Created: 11/12/2024 (19:57:25)
* Created by: Lorenzo Saibal Forti <lorenzo.forti@gmail.com>
*
* Last update: 12/12/2024 (09:26:37)
* Updated by: Lorenzo Saibal Forti <lorenzo.forti@gmail.com>
*
* Copyleft: 2024 - Tutti i diritti riservati
*
* Comments:
*/

const w3c = require("./w3c-validator");
const whatwg = require("./whatwg-validator");

module.exports = (options) => {

	const { validator } = options;
	const useWHATWG = validator && validator.toLowerCase() === "whatwg";

	return useWHATWG ? whatwg(options) : w3c(options);
};
