# Country Data

[![Build Status](https://travis-ci.org/LinkToBooks/country-data.png)](https://travis-ci.org/LinkToBooks/country-data)

There are lots of little bits of data that you often need relating to countries,
and I couldn't find any easy to use source of it. So I compiled it all here.


## Countries

The data currently provided for each country is:

  * `name` The english name for the country
  * `alpha2` The [ISO 3166-1 alpha 2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code
  * `alpha3` The [ISO 3166-1 alpha 3](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code
  * `currencies` An array of [ISO 4217 currency codes](http://en.wikipedia.org/wiki/ISO_4217) with the primary one first


## Currencies

It is not that useful to just have the currency code(s) for a country, so included is currency data too:

  * `name` The english name for the currency
  * `code` The [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) code
  * `number` The [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) number
  * `decimals` The number of decimal digits conventionally shown


## Installing

``` bash
npm install country-data
```


## Example usage

``` javascript
var countries  = require('country-data').countries,
    currencies = require('country-data').currencies;

// countries are found using alpha2 or alpha3
console.log( countries.alpha2.BE.name );        // 'Belgium'
console.log( countries.alpha3.FRA.currencies ); // ['EUR']

// currencies are accessed by their code
console.log( currencies.code.USD.name ); // 'United States dollar'
```

It is very simple for now - feel free to contribute more helpful accessors.


## Adding data

More data for each country is most welcome. Obvious things that it might be nice
to add are:

  * Top level domains
  * Wikipedia links
  * Coordinates (centroid, bounding box, etc)
  * International dialing codes

The data is finally stored as JSON, but this is not always easy to manipulate.
For this it is easier to edit the CSV files (using spreadsheet software) and
then use the scripts in the data directory to convert the CSV to JSON. Please
don't edit the JSON directly, but do it via the CSV.

These are the steps required

``` bash
# Clone the repo (or better your fork of it)
git clone https://github.com/LinkToBooks/country-data.git
cd country-data

# install the dependencies
npm install .

# Edit the countries.csv
open countries.csv

# Convert the CSV to JSON
node data/country_csv_to_json.js > data/countries.json

# Run the tests
mocha

# If all is ok commit and push
git add .
git commit
git push

# Then send a pull request with your changes
```


## Sources

The currency data was copied from the [Wikipedia ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) page.
