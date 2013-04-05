var countries  = require('..').countries,
    currencies = require('..').currencies,
    countryData = require('..').data.countries,
    assert     = require('assert'),
    _          = require('underscore');

describe('countries', function () {

  describe('alpha2', function () {
    it('should find USA', function () {
      assert.equal( countries.alpha2.BE.name, 'Belgium');
      assert.equal( countries.alpha2.US.name, 'United States');
    });
  });

  describe('alpha3', function () {
    it('should find France', function () {
      assert.equal( countries.alpha3.FRA.name, 'France');
      assert.deepEqual( countries.alpha3.FRA.currencies, ['EUR']);
    });
  });

  describe('check currencies for each country', function () {
    _.each( countryData, function (country) {
      describe(country.alpha2, function () {
        _.each( country.currencies, function (currency) {
          it(currency, function () {
            assert( currencies.code[currency] );            
          });
        });
      });
    });
  });
});
