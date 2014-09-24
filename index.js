var countriesAll  = require('./data/countries.json'),
    currenciesAll = require('./data/currencies.json'),
    languagesAll  = require('./data/languages.json'),
    regions       = require('./data/regions'),
    lookup        = require('./lookup'),
    _             = require('underscore');

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

exports.languages = {
  all: languagesAll,
};

_.each(languagesAll, function (language) {
  exports.languages[language.alpha2] = language;
});


exports.regions = regions;
exports.lookup = lookup({
    countries: countriesAll,
    currencies: currenciesAll,
    languages: languagesAll
});