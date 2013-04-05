// Take the csv and convert to json and tidy it up so that it is consistent.

var csv           = require('csv')
    _             = require('underscore'),
    canonicalJSON = require('canonical-json'),
    path          = require('path');


var csvFile = path.join( __dirname, 'currencies.csv' );
var currencies = [];

// read in the CSV
csv()
  .from.path(csvFile, { columns: true })
  .on('record', function (row) {
    currencies.push(row);
  })
  .on('end', function () {

    // sort by code
    currencies = _.sortBy(currencies, function (i) { return i.code;} );

    // print out results to stdout
    console.log( canonicalJSON( currencies, null, 2 ));  

  });
