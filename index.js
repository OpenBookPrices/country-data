var data_countries = require('./data/countries.json'),
    _              = require('underscore');

exports.data = {
  countries: data_countries
};

exports.countries = {
  alpha2: {},
  alpha3: {},  
};

_.each(data_countries, function (country) {
  exports.countries.alpha2[country.alpha2] = country;
  exports.countries.alpha3[country.alpha3] = country;
});

