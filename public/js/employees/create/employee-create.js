angular.module('employees.create', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('wombat.nav.employees.create', {
                url: '/create',
                //target the un-named 'ui-view' in PARENT states template
                templateUrl: 'js/employees/create/employee-create.tmpl.html',
                controller: 'CreateEmployeeCtrl as createEmployeeCtrl'
            })
        ;
    })
    .controller('CreateEmployeeCtrl', function($state, EmployeesModel, USStatesModel, CountriesModel) {
        var createEmployeeCtrl = this;

        function returnToEmployees() {
            $state.go('wombat.nav.employees')
        }

        function cancelCreating() {
            returnToEmployees();
        }

        function createEmployee() {
            EmployeesModel.createEmployee(createEmployeeCtrl.newEmployee);
            returnToEmployees();
        }

        function resetForm() {
            createEmployeeCtrl.newEmployee = {
                id: '',
                FirstName: '',
                MI: '',
                LastName: '',
                HouseNumber: '',
                Street: '',
                City: '',
                County: '',
                EmployeeState: '',
                EmployeeCountry: '',
                Zip: '',
                DateOfBirth: '',
                HireDate: '',
                LicenseDate: '',
                TerminationDate: '',
                Salary: ''
            };
        }

        createEmployeeCtrl.today = new Date();
        createEmployeeCtrl.minAge = new Date(18*365*24*60*60*1000);
                                        // years/days/hours/minutes/seconds/milliseconds
        USStatesModel.getUSStates()
            .then(function (usstates) {
                createEmployeeCtrl.usstates = usstates;
            });
        CountriesModel.getCountries()
            .then(function (countries) {
                createEmployeeCtrl.countries = countries;
            });

        createEmployeeCtrl.cancelCreating = cancelCreating;
        createEmployeeCtrl.createEmployee = createEmployee;

        resetForm();
    });