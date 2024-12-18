/**
* @preserve
* Filename: whatwg-validator.js
*
* Created: 11/12/2024 (20:59:04)
* Created by: Lorenzo Saibal Forti <lorenzo.forti@gmail.com>
*
* Last update: 12/12/2024 (13:05:25)
* Updated by: Lorenzo Saibal Forti <lorenzo.forti@gmail.com>
*
* Copyleft: 2024 - Tutti i diritti riservati
*
* Comments:
*/

const { HtmlValidate } = require("html-validate");
const filterMessages = require("./whatwg-filter-messages");
const whatwgConfig = require("./whatwg-standard-config");
const config = require("./config");

module.exports = async (options) => {

	let whatwgConfigCloned = {
		...whatwgConfig
	};

	const optionsElements = options?.whatwgConfig?.elements || [];
	const optionsRules = options?.whatwgConfig?.rules || {};

	const elements = optionsElements && optionsElements.length > 0 ? whatwgConfig.elements.concat(optionsElements) : whatwgConfig.elements;
	const elementsUnique = elements.filter((o, index, arr) => arr.findIndex((item) => JSON.stringify(item) === JSON.stringify(o)) === index);

	whatwgConfigCloned = {
		"elements": elementsUnique,
		"rules": {
			...whatwgConfigCloned?.rules,
			...optionsRules
		}
	};

	const htmlvalidate = new HtmlValidate(whatwgConfigCloned);
	const { ignore } = options;
	options.isLocal = !options.data;
	const validatorOptions = await config(options);
	const { data } = validatorOptions;
	const report = await htmlvalidate.validateString(data);
	let { valid, errorCount, warningCount, results } = report;
	let isValid = valid;
	const messages = results.length > 0 ? results[0].messages : [];
	let errors = messages.filter((message) => message.severity === 2);
	let warnings = messages.filter((message) => message.severity === 1);

	if (ignore) {
		errors = filterMessages(errors, ignore);
		warnings = filterMessages(warnings, ignore);
		isValid = errors.length === 0;
		errorCount = errors.length;
		warningCount = warnings.length;
	}

	return {
		isValid,
		errorCount,
		warningCount,
		errors,
		warnings
	};
};
