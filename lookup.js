var _ = require('underscore');

module.exports = init;

function init(o) {
  return {
    countries: search.bind(null, o.countries),
    currencies: search.bind(null, o.currencies),
    languages: search.bind(null, o.languages)
  };
}

function search(data, query) {
  var q = _.pairs(query);

  return data.filter(function(d) {
    return q.filter(function(v) {
      var prop = d[v[0]];

      if(_.isArray(prop)) return prop.indexOf(v[1]) >= 0;

      return prop == v[1];
    }).length == q.length;
  });
}