var languages  = require('..').languages,
    currencies = require('..').currencies,
    assert     = require('assert'),
    _          = require('underscore');

describe('languages', function () {

  describe('all', function () {
    it('should be array', function () {
      assert( _.isArray(languages.all) );
    });
  });

  describe('alpha2', function () {
    it('should find English and German', function () {
      assert.equal( languages.en.name, 'English');
      assert.equal( languages.de.name, 'German');
    });
  });

  describe('alpha3', function () {
    it('should find English and German', function () {
      assert.equal( languages.eng.name, 'English');
      assert.equal( languages.deu.name, 'German');
      assert.equal( languages.ger.name, 'German');
    });
  });

});
