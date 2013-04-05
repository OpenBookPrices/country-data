var data_countries  = require('./data/countries.json'),
    data_currencies = require('./data/currencies.json'),
    _               = require('underscore');

exports.data = {
  countries: data_countries,
  currencies: data_currencies,
};

exports.countries = {
  alpha2: {},
  alpha3: {},  
};

_.each(data_countries, function (country) {
  exports.countries.alpha2[country.alpha2] = country;
  exports.countries.alpha3[country.alpha3] = country;
});

exports.currencies = {
  code: {},
};

_.each(data_currencies, function (currency) {
  exports.currencies.code[currency.code] = currency;
});
