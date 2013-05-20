// Take the csv and convert to json and tidy it up so that it is consistent.

var csv           = require('csv')
  , _             = require('underscore')
  , canonicalJSON = require('canonical-json')
  , path          = require('path')
  , csvFile       = path.join( __dirname, 'countries.csv' )
  , countries     = []
  , jsonCountries = {}

// read in the CSV
csv()
  .from.path(csvFile, { columns: true })
  .on('record', function (row) {
    countries.push(row);
  })
  .on('end', function () {

    // sort by name
    countries = _.sortBy(countries, function(i) {
      return i.name
    })

    // change the appropriate fields to be an array
    _.each(['countryCallingCodes'], function(key) {
      _.each(countries, function (country) {
        country[key] = country[key] ? country[key].split(',') : [];
        country[key] = (country[key].length > 0) ? country[key][0] : ''
        // if calling code empty, then remove it (e.g. clipperton island)
        if (country[key] === '')
          delete countries[country];
      })
    })

    // strip out what we don't need
    _.each(countries, function (country) {
      delete country.currencies;
      delete country.ccTLD;
      delete country.status;
      delete country.alpha3;
      // rename alpha2 to iso2
      country.iso2 = country.alpha2;
      delete country.alpha2;
      // rename countryCallingCodes to code
      country.code = country.countryCallingCodes;
      delete country.countryCallingCodes;
      // strip the '+' from code
      country.code = country.code.replace(/\+/g, '')
      jsonCountries[country.iso2] = country
    })


    // print out results to stdout
    console.log( JSON.stringify( jsonCountries, null, 2 ));

  });
