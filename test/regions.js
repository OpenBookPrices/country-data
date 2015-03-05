'use strict';

var countries = require('..').countries;
var regions = require('..').regions;
var assert = require('assert');
var _ = require('underscore');

describe('regions', function () {

  describe("check region's countries are known", function () {
    _.each(regions, function (region, name) {
      describe(name, function () {
        _.each(region.countries, function (country) {
          it(country, function () {
            assert(countries[country]);
          });
        });
      });
    });
  });

  describe("check region countries exist", function () {
    var countriesAssigned = [];

    _.each(regions, function (region, name) {
      describe(name, function () {
        if (!region.countries) {
         _.each(region[name].countries, function (country) {
            countriesAssigned.push(country);
          });
        }
      });
    });
    countriesAssigned = countriesAssigned.sort();
    var duplicate = countriesAssigned.filter(function (value, index, array) {
      delete array[index];
      return array.indexOf(value) !== -1
    })
    if (duplicate.length > 0) { console.log('duplicated: ', duplicate); }

    it("are not duplicated", function () {
      assert(duplicate.length === 0);
    });
  });

  describe("check all assigned countries are in regions", function() {
    var countriesAssigned = [];
    var countriesAvailable = [];

    _.each(regions, function (region, name) {
      _.each(region.countries, function (country) {
        countriesAssigned.push(country);
      });
    });

    _.each(countries.all, function(country) {
      if (country.status == "assigned") {
        countriesAvailable.push(country.alpha2);
      }
    });

    var difference = _.difference(countriesAvailable, countriesAssigned);
    if (difference.length > 0) { console.log('unused: ', difference); }

    it("are all used", function () {
      assert(difference.length === 0);
    });

  });
});
