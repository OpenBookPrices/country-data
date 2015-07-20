'use strict';

// Take the csv files and convert them to standard format

var path = require('path');
var _ = require('underscore');
var csv = require('csv');
var fs = require('fs');

var firstHeader = process.argv[2];


var output = [];

// read in the CSV
var input = process.stdin;



var parser = csv.parse({"columns": true});


parser.on('readable', function () {
  var record = null;
  while(record = parser.read()){
     output.push(record);
  }
});

parser.on('finish', function(){

  output = _.sortBy(output, function (i) { return i[firstHeader].toLowerCase();} );

  var headers = _.keys(output[0]);
  var remaining = _.without(headers, firstHeader);
  var columns = _.flatten([firstHeader, remaining.sort()]);
  // console.warn(columns);

  csv.stringify(
    output,
    { "header":true, "columns": columns },
    function(err, string){ process.stdout.write(string) }
  );

});

input.pipe(parser);
