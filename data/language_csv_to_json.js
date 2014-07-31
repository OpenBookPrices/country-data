// Take the csv and convert to json and tidy it up so that it is consistent.

var csv           = require('csv')
    _             = require('underscore'),
    canonicalJSON = require('canonical-json'),
    path          = require('path');


var csvFile = path.join( __dirname, 'languages.csv' );
var languages = [];

// read in the CSV
csv()
  .from.path(csvFile, { columns: true })
  .on('record', function (row) {
    languages.push(row);
  })
  .on('end', function () {

    // sort by alpha2
    languages = _.sortBy(languages, function (i) { return i.alpha2;} );

    // print out results to stdout
    console.log( canonicalJSON( languages, null, 2 ));

  });
