angular.module('accidents', [
    'accidents.create',
    'accidents.edit',
    'wombat.models.accidents'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('wombat.nav.accidents', {
                url: 'accidents',
                views: {
                    'content@': {
                        controller: 'AccidentsCtrl as accidentsCtrl',
                        templateUrl: 'js/accidents/accidents.tmpl.html'
                    }
                }
            })
        ;
    })
    .controller('AccidentsCtrl', function AccidentsCtrl($stateParams, AccidentsModel) {
        var accidentsCtrl = this;

        AccidentsModel.getAccidents()
            .then(function (accidents) {
                accidentsCtrl.accidents = accidents;
            });

        accidentsCtrl.deleteAccident = AccidentsModel.deleteAccident;
    })
;
