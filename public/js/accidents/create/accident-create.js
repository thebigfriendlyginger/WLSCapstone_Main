angular.module('accidents.create', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('wombat.nav.accidents.create', {
                url: '/create',
                //target the un-named 'ui-view' in PARENT states template
                templateUrl: 'js/accidents/create/accident-create.tmpl.html',
                controller: 'CreateAccidentCtrl as createAccidentCtrl'
            })
        ;
    })
    .controller('CreateAccidentCtrl', function($state, $stateParams, AccidentsModel, EmployeesModel, USStatesModel, CountriesModel) {
        var createAccidentCtrl = this;

        function returnToAccidents() {
            $state.go('wombat.nav.accidents')
        }

        function cancelCreating() {
            returnToAccidents();
        }

        function createAccident() {
            AccidentsModel.createAccident(createAccidentCtrl.newAccident);
            returnToAccidents();
        }

        function resetForm() {
            createAccidentCtrl.newAccident = {
                EmployeeID: '',
                AccidentDate: '',
                AccidentDescription: '',
                AccidentState: '',
                AccidentCountry: ''
            };
        }

        USStatesModel.getUSStates()
            .then(function (usstates) {
                createAccidentCtrl.usstates = usstates;
            });
        CountriesModel.getCountries()
            .then(function (countries) {
                createAccidentCtrl.countries = countries;
            });

        EmployeesModel.getEmployees()
            .then(function (employees) {
                createAccidentCtrl.employees = employees;
            });

        createAccidentCtrl.cancelCreating = cancelCreating;
        createAccidentCtrl.createAccident = createAccident;

        resetForm();
    });