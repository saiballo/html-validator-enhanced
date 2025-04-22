# html-validator-enhanced

> A Node module with optional settings for validating HTML pages using the "validator.w3.org/nu" or "whatwg" standard.
> Forked from [html-validator](https://github.com/zrrrzzt/html-validator)


![](https://img.shields.io/badge/Made%20with%20love%20and%20with-javascript%2C%20node-blue)
[![MIT license](https://img.shields.io/badge/License-MIT-green.svg)](https://lbesson.mit-license.org/)

## Installation

Available on [npm](https://www.npmjs.com/package/@saiballo/html-validator-enhanced):

```sh
npm install @saiballo/html-validator-enhanced --save
```

## Usage
Create a function like this if you want to validate a html fragment:

```js
(async () => {
	const validator = require("@saiballo/html-validator-enhanced");

	const options = {
		data: "<p>not correct</h1></p>",
		isFragment: true,
		format: "json"
	}

	try {

		const result = await validator(options);
		console.log(result);

	} catch (error) {

		console.error(error);
	}
})()
```
If you need to validate a local page with "data" attribute:

```js
(async () => {
	const validator = require("@saiballo/html-validator-enhanced");
	const fs = require("node:fs");

	const options = {
		data: fs.readFileSync("page-to-validate.html", "utf8"),
		format: "json"
	}

	try {

		const result = await validator(options);
		console.log(result);

	} catch (error) {

		console.error(error);
	}
})()
```

The complete default configuration that you can override is:

```js
const options = {
	"validator":  "WHATWG",
	"isLocal":  false,
	"isFragment":  false,
	"format": "json",
	"ignore": [],
	"whatwgConfig": {
		"elements": [],
		"rules": {}
	}
}
```
#### Parameters
```js
// Possible values: "WHATWG" | "https://validator.w3.org/nu/"
//"WHATWG" is recommended. it will validate against the WHATWG standards.
"validator":  "WHATWG"

// set this to true if you want to validate local urls
"isLocal":  false

// set this to true only if all your pages are not a complete document
// if only certain pages are fragments, you can use "isFragment: true" in these pages as front matter data
"isFragment":  false

// this is the formatting of the returned data. it supports json (default), html, xhtml, xml, gnu and text for W3C and only json for WHATWG
"format": "json"

// only for "WHATWG" validator. string or array of strings or rules (when using WHATWG) you want the checker to remove in the response. even partial text.
// e.g. "ignore": ["Mismatched close-tag, expected '</div>' but found '</body>'", "another partial error response text"]
"ignore": []

// only for "WHATWG" validator. additional configuration for elements and rules
"whatwgConfig": {
	"elements": [],
	"rules": {}
}
```
## custom WHATWG configuration
```js
// with this example, you add a custom tag called "customtag" to the valid tags in the validation. see https://html-validate.org/guide/metadata/simple-component.html
// additionally, you set the "heading-level" rule to "on" instead of "off". see https://html-validate.org/rules/index.html
"whatwgConfig": {
	"elements": [
		{
			"customtag": {
				"flow": true,
				"phrasing": true
			}
		}
	],
	"rules": {
		"heading-level": "error"
	}
}
```

## Team ARMADA 429
<img src="https://raw.githubusercontent.com/saiballo/saiballo/refs/heads/master/armada429.png" width="100" height="100">

* Lorenzo "Saibal" Forti

## License

![](https://img.shields.io/badge/License-Copyleft%20Saibal%20--%20All%20Rights%20Reserved-red)
