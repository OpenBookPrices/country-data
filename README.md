# Country Data

[![Build Status](https://travis-ci.org/LinkToBooks/country-data.png)](https://travis-ci.org/LinkToBooks/country-data)

There are lots of little bits of data that you often need relating to countries,
and I couldn't find any easy to use source of it. So I compiled it all here.

## Work in Progress

This code base may change a bit until it hits `0.1.x` - feel free to use it, but be sure to check between upgrades.

I suspect that many of the `currencies` entries on the countries may be wrong. Help checking them would be appreciated.


## Countries

The data currently provided for each country is:

  * `name` The english name for the country
  * `alpha2` The [ISO 3166-1 alpha 2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code
  * `alpha3` The [ISO 3166-1 alpha 3](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code
  * `status`: The ISO status of the entry: either 'assigned' or 'reserved'.
  * `currencies` An array of [ISO 4217 currency codes](http://en.wikipedia.org/wiki/ISO_4217) with the primary one first
  * `countryCallingCodes` An array of the international call prefixes for this country.

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

// .all gives you an array of all entries
console.log( countries.all );
console.log( currencies.all );

// countries are found using alpha2 or alpha3 (both uppercase)
console.log( countries.BE.name );        // 'Belgium'
console.log( countries.FRA.currencies ); // ['EUR']

// currencies are accessed by their code (uppercase)
console.log( currencies.USD.name ); // 'United States dollar'
```

It is very simple for now - feel free to contribute more helpful accessors.


## Possible future additions

More data for each country is most welcome. Obvious things that it might be nice
to add are:

### Countries

  * Top level domains
  * Wikipedia links
  * Coordinates (centroid, bounding box, etc)
  * International dialling codes
  * Languages spoken - most common first

### Currencies

  * currency symbols
  * other currency that it is [pegged](http://en.wikipedia.org/wiki/Fixed_exchange_rate) to


## How to contribute

The final format is JSON, but it is easier to work with CSV. Hence in the `data`
folder there are CSV files and scripts that convert them to JSON. Please don't
edit the JSON directly, but do it via the CSV.

These are the steps required:

``` bash
# Clone the repo (or better your fork of it)
git clone https://github.com/LinkToBooks/country-data.git
cd country-data

# install the dependencies
npm install .

# Edit the countries.csv
open countries.csv

# Convert the CSV to JSON
node data/country_csv_to_json.js  > data/countries.json
node data/currency_csv_to_json.js > data/currencies.json

# Run the tests
mocha

# If all is ok commit and push
git add .
git commit
git push

# Then send a pull request with your changes. Ideally use several small commits,
# and reference a source that backs up the change.
```


## Sources

The currency data was copied from the [Wikipedia ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) page.

The country calling codes came from the  [Wikipedia country calling codes](http://en.wikipedia.org/wiki/List_of_country_calling_codes) page.
