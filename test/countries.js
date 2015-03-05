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
  });

  describe('alpha3', function () {
    it('should find France', function () {
      assert.equal( countries.FRA.name, 'France');
      assert.deepEqual( countries.FRA.currencies, ['EUR']);
    });
  });

  describe('check all countries have a status', function () {
    _.each( countries.all, function (country) {
      it(country, function () {
        assert( country.status );
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
