var countries = require('..').countries,
    assert    = require('assert');

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

});
