'use strict';

// Take the csv and convert to json and tidy it up so that it is consistent.

var path = require('path');
var _ = require('underscore');
var csv = require('csv');
var canonicalJSON = require('canonical-json');
var fs = require('fs');

var output = [];

// read in the CSV
var csvFile = path.join( __dirname, 'currencies.csv' );
var input = fs.createReadStream(csvFile);


var parser = csv.parse({"columns": true});

parser.on('readable', function () {
  var record = null;
  while(record = parser.read()){
    // convert decimals to and number
    record.decimals = parseInt(record.decimals);
    output.push(record);
  }
});

parser.on('finish', function(){

  // sort by code
  output = _.sortBy(output, function (i) { return i.code;} );

  // print out results to stdout
  console.log( canonicalJSON( output, null, 2 ));
});


input.pipe(parser);
