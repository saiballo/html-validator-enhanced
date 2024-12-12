/**
* @preserve
* Filename: whatwg-standard-config.js
*
* Created: 11/12/2024 (19:56:24)
* Created by: Lorenzo Saibal Forti <lorenzo.forti@gmail.com>
*
* Last update: 12/12/2024 (09:24:19)
* Updated by: Lorenzo Saibal Forti <lorenzo.forti@gmail.com>
*
* Copyleft: 2024 - Tutti i diritti riservati
*
* Comments:
*/

module.exports = {
	"elements": [
		"html5",
		{
			"button": {
				"inherit": "button",
				"requiredAttributes": []
			}
		}
		// {
		// 	"svg:title": {
		// 		"flow": true,
		// 		"phrasing": true
		// 	}
		// },
		// {
		// 	"svg:desc": {
		// 		"flow": true,
		// 		"phrasing": true
		// 	}
		// }
		// {
		// 	"th": {
		// 		"inherit": "table",
		// 		"requiredAttributes": []
		// 	}
		// }
	],
	"rules": {
		"attribute-allowed-values": "error",
		"close-attr": "error",
		"close-order": "error",
		"deprecated": "error",
		"deprecated-rule": "error",
		"doctype-html": "error",
		"element-name": "error",
		"element-permitted-content": "error",
		"element-permitted-occurrences": "error",
		"element-permitted-order": "error",
		"element-required-attributes": "error",
		"element-required-content": "error",
		"heading-level": "off",
		"missing-doctype": "error",
		"no-conditional-comment": "error",
		"no-deprecated-attr": "error",
		"no-dup-attr": "error",
		"no-dup-id": "error",
		"no-missing-references": "error",
		"no-raw-characters": ["error", {
			"relaxed": true
		}],
		"no-redundant-role": "error",
		"no-unknown-elements": "error",
		"script-element": "error",
		"unrecognized-char-ref": "error",
		"void-content": "error",
		"wcag/h37": "error"
	}
};
