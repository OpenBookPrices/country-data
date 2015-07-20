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

  describe('formatting', function () {
    it("decimals should be numbers", function () {
      assert(_.isNumber(currencies.USD.decimals));
    });
  });

  describe('symbols', function () {
    it('should find $', function () {
      assert.equal( currencies.USD.symbol, '$');
    });
    it('should find ¥', function () {
      assert.equal( currencies.JPY.symbol, '¥');
    });
    it('should find R', function () {
      assert.equal( currencies.ZAR.symbol, 'R');
    });

    it('should find AED (has no symbol)', function () {
      assert.equal( currencies.AED.symbol, 'AED');
    });

  });

});
