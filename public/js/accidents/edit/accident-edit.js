angular.module('accidents.edit', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('wombat.nav.accidents.edit', {
                url: '/:accidentId/edit',
                //target the un-named 'ui-view' in PARENT states template
                templateUrl: 'js/accidents/edit/accident-edit.tmpl.html',
                controller: 'EditAccidentCtrl as editAccidentCtrl'
            })
        ;
    })
    .controller('EditAccidentCtrl', function ($state, $stateParams, AccidentsModel, USStatesModel, CountriesModel, EmployeesModel){
        var editAccidentCtrl = this;

        function returnToAccidents() {
            $state.go('wombat.nav.accidents')
        }

        function updateAccident() {
            editAccidentCtrl.accident = angular.copy(editAccidentCtrl.editedAccident);
            AccidentsModel.updateAccident(editAccidentCtrl.editedAccident);
            returnToAccidents();
        }

        function cancelEditing() {
            returnToAccidents();
        }

        AccidentsModel.getAccidentById($stateParams.accidentId)
            .then(function (accident) {
                if (accident) {
                    editAccidentCtrl.accident = accident;
                    editAccidentCtrl.editedAccident = angular.copy(editAccidentCtrl.accident);
                } else {
                    returnToAccidents();
                }
            });

        USStatesModel.getUSStates()
            .then(function (usstates) {
                editAccidentCtrl.usstates = usstates;
            });
        CountriesModel.getCountries()
            .then(function (countries) {
                editAccidentCtrl.countries = countries;
            });
        EmployeesModel.getEmployees()
            .then(function (employees) {
                editAccidentCtrl.employees = employees;
            });

        editAccidentCtrl.cancelEditing = cancelEditing;
        editAccidentCtrl.updateAccident = updateAccident;
    })
;
