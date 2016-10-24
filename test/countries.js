'use strict';

var countries  = require('..').countries;
var currencies = require('..').currencies;
var languages  = require('..').languages;
var  assert = require('assert');
var _ = require('underscore');

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
    it('should prefer assigned alpha2 country codes', function () {
      assert.equal( countries.SK.name, 'Slovakia');
      assert.equal( countries.BY.name, 'Belarus');
    });
  });

  describe('alpha3', function () {
    it('should find France', function () {
      assert.equal( countries.FRA.name, 'France');
      assert.deepEqual( countries.FRA.currencies, ['EUR']);
    });
  });

  describe('check each country has correct form', function () {
    _.each( countries.all, function (country) {
      describe(country.name, function () {
        it('should have a status', function () {
          assert( country.status );
        });
        it('should have correctly formed alpha2 and alpha3', function () {
          assert(country.alpha2.match(/^[A-Z]{2}$/), 'alpha2 correctly formed - ' + country.alpha2);
          if (country.alpha3.length) {
            assert(country.alpha3.match(/^[A-Z]{3}$/), 'alpha3 correctly formed - ' + country.alpha3);
          }
        });
      });
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

  describe('check specific country currencies', function () {
    it('Latvian currency should be EUR', function () {
      assert.deepEqual( countries.LV.currencies, ['EUR']);
    });
  });

  describe('check emoji for a specific country', function () {
    it('Finland emoji should be the flag', function () {
      assert.deepEqual( countries.FI.emoji, String.fromCharCode(55356, 56811, 55356, 56814));
    });
  });

  describe('check languages for each country', function () {
    _.each( countries.all, function (country) {
      describe(country.alpha2, function () {
        _.each( country.languages, function (language) {
          it(language, function () {
            assert( languages[language] );
          });
        });
      });
    });
  });
});
