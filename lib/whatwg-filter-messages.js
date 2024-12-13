/**
* @preserve
* Filename: whatwg-filter-messages.js
*
* Created: 11/12/2024 (19:58:08)
* Created by: Lorenzo Saibal Forti <lorenzo.forti@gmail.com>
*
* Last update: 12/12/2024 (18:23:10)
* Updated by: Lorenzo Saibal Forti <lorenzo.forti@gmail.com>
*
* Copyleft: 2024 - Tutti i diritti riservati
*
* Comments:
*/

module.exports = (messages, ignore) => {

	const filters = Array.isArray(ignore) ? ignore : [ignore];

	const filtered = messages.filter((item) => {

		const { ruleId, message } = item;

		// change filters.includes(message) with test() method
		if (filters.includes(ruleId) || filters.some((filter) => message.includes(filter))) {

			return false;
		}

		return true;
	});

	return filtered;
};
