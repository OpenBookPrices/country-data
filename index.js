var countriesAll  = require('./data/countries.json'),
    currenciesAll = require('./data/currencies.json'),
    _               = require('underscore');

exports.countries = {
  all: countriesAll,
};

_.each(countriesAll, function (country) {
  exports.countries[country.alpha2] = country;
  exports.countries[country.alpha3] = country;
});

exports.currencies = {
  all: currenciesAll,
};

_.each(currenciesAll, function (currency) {
  exports.currencies[currency.code] = currency;
});
