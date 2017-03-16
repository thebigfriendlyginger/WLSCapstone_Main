angular.module('wombat.models.countries', [])
    .service('CountriesModel', function ($http, $q) {
        var model = this,
            countries;

        function extract(result) {
            return result.data.countries;
        }

        function cacheCountries(result) {
            countries = extract(result);
            return countries;
        }

        model.getCountries = function () {
            return (countries) ? $q.when(countries) : $http.get('/api/country').then(cacheCountries);
        };
    })
;
