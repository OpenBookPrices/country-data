var _ = require('underscore');

module.exports = init;

function init(o) {
    var countries = o.countries;

    return {
        countries: function(query) {
            var q = _.pairs(query);

            return countries.filter(function(country) {
                return q.filter(function(v) {
                    var prop = country[v[0]];

                    if(_.isArray(prop)) return prop.indexOf(v[1]) >= 0;

                    return prop == v[1];
                }).length == q.length;
            });
        }
    };
}