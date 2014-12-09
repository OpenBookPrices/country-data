var callingCodes = require('..').callingCodes.all,
    countries    = require('..').countries.all,
    assert       = require('assert'),
    _            = require('underscore');

describe('calling codes', function () {

  describe('list of all calling codes', function () {
    _.each(countries, function (country) {
      if (country.countryCallingCodes && country.countryCallingCodes.length) {
        it('should contain codes for ' + country.name, function () {
          assert(
            _.every(country.countryCallingCodes, function (code) {
              return callingCodes.indexOf(code) > -1
            })
          )
        });
      }
    });
  });

});
