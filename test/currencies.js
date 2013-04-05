var currencies = require('..').currencies,
    assert    = require('assert');

describe('currencies', function () {

    it('should find USD', function () {
      assert.equal( currencies.code.USD.name, 'United States dollar');
    });

});
