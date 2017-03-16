angular.module('wombat.models.accidents', [])
    .service('AccidentsModel', function ($http, $q) {
        var model = this,
            accidents;

        function extract(result) {
            return result.data.accidents;
        }

        function cacheAccidents(result) {
            accidents = extract(result);
            return accidents;
        }

        model.getAccidents = function () {
            return (accidents) ? $q.when(accidents) : $http.get('/api/accident').then(cacheAccidents);
        };

        model.getAccidentById = function (accidentId) {
            return $http.get('/api/accident/' + accidentId).then(function (response) {
                return response.data.accident;
            });
        };

        model.createAccident = function (accident) {
            $http.post('/api/accident', accident).then(function (response) {
                accident.id = response.data;
                if(accident.id)
                    accidents.push(accident);
            });
        };

        model.updateAccident = function (accident) {
            $http.put('/api/accident/' + accident.id, accident);
            var index = _.findIndex(accidents, function (a) {
                return a.id == accident.id
            });
            accidents[index] = accident;
        };

        model.deleteAccident = function (accident) {
            $http.delete('/api/accident/' + accident.id);
            _.remove(accidents, function (a) {
                return a.id == accident.id;
            });
        };

    })
;
