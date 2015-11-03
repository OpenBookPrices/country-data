'use strict';

// Take the csv and convert to json and tidy it up so that it is consistent.

var path = require('path');
var _ = require('underscore');
var csv = require('csv');
var canonicalJSON = require('canonical-json');
var fs = require('fs');

var output = [];

// read in the CSV
var csvFile = path.join( __dirname, 'countries.csv' );
var input = fs.createReadStream(csvFile);


var parser = csv.parse({"columns": true});

parser.on('readable', function () {
  var record = null;
  while(record = parser.read()){
     output.push(record);
  }
});

parser.on('finish', function(){
  // sort by alpha2
  output = _.sortBy(output, function (i) { return i.alpha2;} );

  // strip out fields that are not ready yet
  _.each(output, function (country) {
    delete country.ccTLD;
  });

  // change the appropriate fields to be an array
  _.each(['currencies', 'countryCallingCodes', 'languages', 'bounds', 'subunits'], function(key) {
    _.each(output, function (country) {
      country[key] = country[key] ? (
         key == 'bounds' ?
         country[key].split(';').map(function(b) { return b.split(',').map(function(v) { if ( key == 'bounds' ) return parseFloat(v); return v; }) })
         : country[key].split(',') ) : [];
      if ( key == 'bounds' && country[key].length === 1 ) country[key] = country[key][0]
    });
  });

  // print out results to stdout
  console.log( canonicalJSON( output, null, 2 ));
});


input.pipe(parser);
