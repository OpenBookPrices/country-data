var lookup     = require('..').lookup,
    countries  = require('..').countries,
    currencies = require('..').currencies,
    languages  = require('..').languages,
    assert     = require('chai').assert,
    _          = require('underscore');

describe('lookup', function () {

  describe("check countries by currency", function () {
    _.each( countries, function (country, name) {
      describe(name, function () {
        _.each( country.currencies, function (currency) {
          it(currency, function () {
            assert.include( lookup.countries({currencies: currency}), country );
          });
        });
      });
    });
  });

  describe("check countries by name", function () {
    _.each( countries, function (country, name) {
      describe(name, function () {
        it(name, function () {
          if(country.name) assert.include( lookup.countries({name: country.name}), country );
        });
      });
    });
  });

  describe("check currencies by code", function () {
    _.each( currencies, function (currency, name) {
      describe(name, function () {
        it(name, function () {
          if(currency.code) assert.include( lookup.currencies({code: currency.code}), currency );
        });
      });
    });
  });

  describe("check languages by name", function () {
    _.each( languages, function (language, name) {
      describe(name, function () {
        it(name, function () {
          if(language.name) assert.include( lookup.languages({name: language.name}), language );
        });
      });
    });
  });

});
