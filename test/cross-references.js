'use strict';

var countryData = require('..');
var assert = require('assert');
var _ = require('underscore');

function assertValidReferences (referenceListName, referenceIdKey, listName, listKey) {
    var validIds = _.pluck(countryData[referenceListName].all, referenceIdKey);
    _.each(countryData[listName].all, function (item) {
        describe('`' + listKey + '` of `' + item.name + '`', function () {
            it('should be a valid reference to `' + referenceIdKey + '` of `' + referenceListName + '`', function () {
                _.each(item[listKey], function (id) {
                    assert(_.contains(validIds, id),
                        'Expected `' + id + '` in `' + listKey + '` of `' + listName +
                        '` to be a valid entry in `' + referenceListName + '`');
                });
            });
        });
    });
}

describe('cross references', function () {
    assertValidReferences('currencies', 'code', 'countries', 'currencies');
    assertValidReferences('languages', 'alpha3', 'countries', 'languages');
});
