var _ = require('underscore');

module.exports = init;

function init(o) {
    var countries = o.countries;

    return {
        countries: function(query) {
            var q = _.pairs(query);

            return countries.filter(function(country) {
                return q.filter(function(v) {
                    return country[v[0]].indexOf(v[1]) >= 0;
                }).length == q.length;
            });
        }
    };
}