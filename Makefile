all:
	node data/country_csv_to_json.js  > data/countries.json
	node data/currency_csv_to_json.js > data/currencies.json
