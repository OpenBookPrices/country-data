// Take the csv and convert to json and tidy it up so that it is consistent.

var canonicalJSON = require('canonical-json'),
    rawRegions    = require('./regions.js');

// print out results to stdout
console.log( canonicalJSON( rawRegions, null, 2 ));
