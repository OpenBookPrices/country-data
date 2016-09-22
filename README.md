# Country Data

[![Build Status](https://travis-ci.org/OpenBookPrices/country-data.png)](https://travis-ci.org/OpenBookPrices/country-data)

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
  * `status`: The ISO status of the entry - see below.
  * `currencies` An array of [ISO 4217 currency codes](http://en.wikipedia.org/wiki/ISO_4217) with the primary one first
  * `languages` An array of [ISO 639-2](http://en.wikipedia.org/wiki/ISO_639-2) codes for languages (may not be complete).
  * `countryCallingCodes` An array of the international call prefixes for this country.
  * `ioc` The [International Olympic Committee country code](http://en.wikipedia.org/wiki/List_of_IOC_country_codes)
  * `emoji` The emoji of country's flag.

### Status notes

The `status` can be one of 'assigned', 'reserved', 'user assigned' or 'deleted'.

Assigned means that the code is properly in the ISO 3166 standard. Reserved means that the code is being prevented from being used. Deleted means that it has been deleted. User Assigned means that for some use cases it is required. Deleted means that it used to be in the standard but is now not.

See https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for full details, especially the "User-assigned code elements" and "Reserved code elements" sections.

## Regions

Countries are ofter grouped into regions. The list of regions is by no means exhaustive, pull requests very welcome for additions.

  * `countries` An array of `alpha2` codes for the countries in this region.

## Currencies

It is not that useful to just have the currency code(s) for a country, so included is currency data too:

  * `name` The english name for the currency
  * `code` The [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) code
  * `number` The [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) number
  * `decimals` The number of decimal digits conventionally shown
  * `symbol` The currency symbol for the currency (e.g. ¥, $ etc.). Some symbols are not available, in which case
    `symbol` contains the ISO 4217 code.  Credit to [bengourley/currency-symbol-map](https://github.com/bengourley/currency-symbol-map)
    for the symbol database.

## Languages

A list of languages provided by [ISO 639-2](http://en.wikipedia.org/wiki/ISO_639-2);

  * `name` The english name for the language
  * `alpha2` The two letter [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) code for the language (may be blank).
  * `alpha3` The three letter terminological [ISO 639-2](http://en.wikipedia.org/wiki/ISO_639-2) code for the language (may be blank).
  * `bibliograpic` The three letter bibliographic [ISO 639-2](http://en.wikipedia.org/wiki/ISO_639-2) code for the language (may be blank).

## Lookup

To make finding easier there are utility methods that can search the countries and currencies. See examples below.


## Installing

``` bash
npm install country-data
```


## Example usage

``` javascript
var countries        = require('country-data').countries,
    currencies       = require('country-data').currencies,
    regions          = require('country-data').regions,
    languages        = require('country-data').languages,
    callingCountries = require('country-data').callingCountries;

// .all gives you an array of all entries
console.log( countries.all );
console.log( currencies.all );

// countries are found using alpha2 or alpha3 (both uppercase)
console.log( countries.BE.name );        // 'Belgium'
console.log( countries.FRA.currencies ); // ['EUR']

// callingCountries is like countries but only has entries with dialing codes.

// currencies are accessed by their code (uppercase)
console.log( currencies.USD.name ); // 'United States dollar'

// regions are accessed using a camel case name
console.log( regions.europe.countries )
```

``` javascript
var lookup = require('country-data').lookup;

// Match a value (grab first from array)
var france = lookup.countries({name: 'France'})[0];

// Or match one of several possible values.
var eurozone_countries = lookup.countries({currencies: 'EUR'});
```

It is very simple for now - feel free to contribute more helpful accessors.


## Possible future additions

More data for each country is most welcome. Obvious things that it might be nice
to add are:

### Countries

  * Wikipedia links
  * Coordinates (centroid, bounding box, etc)

### Currencies

  * other currency that it is [pegged](http://en.wikipedia.org/wiki/Fixed_exchange_rate) to

## Using with webpack

As this code loads the data from JSON files you need to add the JSON loader to webpack:

``` bash
npm install json-loader --save-dev
```

and then include in your `webpack.config.js`:

``` javascript
// ...
   loaders: [
      // other loaders
      { test: /\.json$/, loader: 'json' },
  ],
// ...
```

## Other similar bits of code

* [libphonenumber](https://code.google.com/p/libphonenumber/) "Google's common Java, C++ and Javascript library for parsing, formatting, storing and validating international phone numbers."


## How to contribute

The final format is JSON, but it is easier to work with CSV. Hence in the `data`
folder there are CSV files and scripts that convert them to JSON. Please don't
edit the JSON directly, but do it via the CSV.

These are the steps required:

``` bash
# Clone the repo (or better your fork of it)
git clone https://github.com/OpenBookPrices/country-data.git
cd country-data

# install the dependencies
npm install .

# Edit the countries.csv
open data/countries.csv

# Convert the raw data (CSV or JS files) to JSON
make

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
