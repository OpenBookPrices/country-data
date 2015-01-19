'use strict';

// Take the csv and convert to json and tidy it up so that it is consistent.

var path = require('path');
var _ = require('underscore');
var csv = require('csv');
var canonicalJSON = require('canonical-json');
var csvFile = path.join( __dirname, 'languages.csv' );
var languages = [];

// read in the CSV
csv()
  .from.path(csvFile, { columns: true })
  .on('record', function (row) {
    languages.push(row);
  })
  .on('end', function () {

    // sort by alpha3
    languages = _.sortBy(languages, function (i) { return i.alpha3;} );

    // print out results to stdout
    console.log( canonicalJSON( languages, null, 2 ));
  });
