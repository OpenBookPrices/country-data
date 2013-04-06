var countries  = require('..').countries,
    currencies = require('..').currencies,
    assert     = require('assert'),
    _          = require('underscore');

describe('countries', function () {

  describe('all', function () {
    it('should be array', function () {
      assert( _.isArray(countries.all) );
    });
  });

  describe('alpha2', function () {
    it('should find USA', function () {
      assert.equal( countries.BE.name, 'Belgium');
      assert.equal( countries.US.name, 'United States');
    });
  });

  describe('alpha3', function () {
    it('should find France', function () {
      assert.equal( countries.FRA.name, 'France');
      assert.deepEqual( countries.FRA.currencies, ['EUR']);
    });
  });

  describe('check currencies for each country', function () {
    _.each( countries.all, function (country) {
      describe(country.alpha2, function () {
        _.each( country.currencies, function (currency) {
          it(currency, function () {
            assert( currencies[currency] );            
          });
        });
      });
    });
  });
});
