var countries = require('..').countries,
    regions   = require('..').regions,
    assert    = require('assert'),
    _         = require('underscore');

describe('regions', function () {

  describe("check region's countries are known", function () {
    _.each( regions, function (region, name) {
      describe(name, function () {
        _.each( region.countries, function (country) {
          it(country, function () {
            assert( countries[country] );
          });
        });
      });
    });
  });

});
