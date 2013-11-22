var lookup    = require('..').lookup,
    countries = require('..').countries,
    assert    = require('chai').assert,
    _         = require('underscore');

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

});
