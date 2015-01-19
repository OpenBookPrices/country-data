'use strict';

// Take the csv and convert to json and tidy it up so that it is consistent.

var path = require('path');
var _ = require('underscore');
var csv = require('csv');
var canonicalJSON = require('canonical-json');
var csvFile = path.join( __dirname, 'countries.csv' );
var countries = [];

// read in the CSV
csv()
  .from.path(csvFile, { columns: true })
  .on('record', function (row) {
    countries.push(row);
  })
  .on('end', function () {

    // sort by alpha2
    countries = _.sortBy(countries, function (i) { return i.alpha2;} );

    // strip out fields that are not ready yet
    _.each(countries, function (country) {
      delete country.ccTLD;
    });

    // change the appropriate fields to be an array
    _.each(['currencies', 'countryCallingCodes', 'languages'], function(key) {
      _.each(countries, function (country) {
        country[key] = country[key] ? country[key].split(',') : [];
      });
    });

    // print out results to stdout
    console.log( canonicalJSON( countries, null, 2 ));
  });
