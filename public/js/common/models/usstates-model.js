angular.module('wombat.models.usstates', [])
    .service('USStatesModel', function ($http, $q) {
        var model = this,
            usstates;

        function extract(result) {
            return result.data.usstates;
        }

        function cacheUSStates(result) {
            usstates = extract(result);
            return usstates;
        }

        model.getUSStates = function () {
            return (usstates) ? $q.when(usstates) : $http.get('/api/usstate').then(cacheUSStates);
        };
    })
;
