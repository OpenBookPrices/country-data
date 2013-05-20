var countriesAll  = require('./data/countries.json'),
    countriesAll2 = require('./data/countries2.json'),
    currenciesAll = require('./data/currencies.json'),
    _               = require('underscore');

exports.countries = {
  all: countriesAll,
  all2: countriesAll2
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
