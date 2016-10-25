'use strict';

var _ = require('underscore');
var continents = require('./data/continents');
var regions = require('./data/regions');
var countriesAll = require('./data/countries.json');
var currenciesAll = require('./data/currencies.json');
var languagesAll = require('./data/languages.json');
var lookup = require('./lookup');

var getSymbol = require('currency-symbol-map')

exports.continents = continents;
exports.regions = regions;

exports.countries = {
  all: countriesAll,
};

_.each(countriesAll, function (country) {
  // prefer assigned country codes over inactive ones
  var exportedAlpha2 = exports.countries[country.alpha2];
  if (!exportedAlpha2 || exportedAlpha2.status === 'deleted') {
    exports.countries[country.alpha2] = country;
  }

  var exportedAlpha3 = exports.countries[country.alpha3];
  if (!exportedAlpha3 || exportedAlpha3.status === 'deleted') {
    exports.countries[country.alpha3] = country;
  }
});

exports.currencies = {
  all: currenciesAll,
};

_.each(currenciesAll, function (currency) {
  //If the symbol isn't available, default to the currency code
  var symbol = getSymbol(currency.code);
  if (symbol == '?') {
    symbol = currency.code;
  }

  currency.symbol = symbol;
  exports.currencies[currency.code] = currency;
});

exports.languages = {
  all: languagesAll,
};

// Note that for the languages there are several entries with the same alpha3 -
// eg Dutch and Flemish. Not sure how to best deal with that - here whichever
// comes last wins.
_.each(languagesAll, function (language) {
  exports.languages[language.alpha2] = language;
  exports.languages[language.bibliographic] = language;
  exports.languages[language.alpha3] = language;
});

exports.lookup = lookup({
    countries: countriesAll,
    currencies: currenciesAll,
    languages: languagesAll
});

var callingCountries = {all: []};

var callingCodesAll = _.reduce(countriesAll, function (codes, country) {
  if (country.countryCallingCodes && country.countryCallingCodes.length) {
    callingCountries.all.push(country);

    callingCountries[country.alpha2] = country;
    callingCountries[country.alpha3] = country;

    _.each(country.countryCallingCodes, function (code) {
      if (codes.indexOf(code) == -1) {
        codes.push(code);
      }
    });
  }
  return codes;
}, []);

delete callingCountries['']; // remove empty alpha3s
exports.callingCountries = callingCountries;

callingCodesAll.sort(function (a, b) {
  var parse = function (str) { return parseInt(str) };
  var splitA = _.map(a.split(' '), parse);
  var splitB = _.map(b.split(' '), parse);

  if (splitA[0] < splitB[0]) {
    return -1;
  } else if (splitA[0] > splitB[0]) {
    return 1;
  } else {
    // Same - check split[1]
    if (splitA[1] === undefined && splitB[1] !== undefined) {
      return -1;
    } else if (splitA[1] !== undefined && splitB[1] === undefined) {
      return 1;
    } else if (splitA[1] < splitB[1]) {
      return -1;
    } else if (splitA[1] > splitB[1]) {
      return 1;
    } else {
      return 0;
    }
  }
});

exports.callingCodes = {
  all: callingCodesAll
};
