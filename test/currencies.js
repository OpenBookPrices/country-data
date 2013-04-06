var currencies = require('..').currencies,
    assert     = require('assert'),
    _          = require('underscore');

describe('currencies', function () {

  describe('all', function () {
    it('should be array', function () {
      assert( _.isArray(currencies.all) );
    });
  });

  describe('code', function () {
    it('should find USD', function () {
      assert.equal( currencies.USD.name, 'United States dollar');
    });
  });

});
