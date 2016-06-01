all:
	node data/normalize_csv.js name < data/countries.csv > data/countries.csv.new
	mv data/countries.csv.new data/countries.csv

	node data/normalize_csv.js name < data/deleted_countries.csv > data/deleted_countries.csv.new
	mv data/deleted_countries.csv.new data/deleted_countries.csv

	node data/normalize_csv.js code < data/currencies.csv > data/currencies.csv.new
	mv data/currencies.csv.new data/currencies.csv

	node data/normalize_csv.js name < data/languages.csv > data/languages.csv.new
	mv data/languages.csv.new data/languages.csv

	node data/country_csv_to_json.js  > data/countries.json
	node data/currency_csv_to_json.js > data/currencies.json
	node data/language_csv_to_json.js > data/languages.json
