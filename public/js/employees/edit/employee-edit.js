angular.module('employees.edit', [])
//our module gets a relative name while our state gets an absolute path.
// This is because the employees submodule will already pass the edit function to the root directory
    .config(function ($stateProvider) {
        $stateProvider
            .state('wombat.nav.employees.edit', {
                url: '/:employeeId/edit',
                //target the un-named 'ui-view' in PARENT states template
                templateUrl: 'js/employees/edit/employee-edit.tmpl.html',
                controller: 'EditEmployeeCtrl as editEmployeeCtrl'
            })
        ;
    })
    .controller('EditEmployeeCtrl', function ($state, $stateParams, EmployeesModel, USStatesModel, CountriesModel){
        var editEmployeeCtrl = this;

        function returnToEmployees() {
            $state.go('wombat.nav.employees')
        }

        function updateEmployee() {
            editEmployeeCtrl.employee = angular.copy(editEmployeeCtrl.editedEmployee);
            EmployeesModel.updateEmployee(editEmployeeCtrl.editedEmployee);
            returnToEmployees();
        }

        function cancelEditing() {
            returnToEmployees();
        }

        EmployeesModel.getEmployeeById($stateParams.employeeId)
            .then(function (employee) {
                if (employee) {
                    editEmployeeCtrl.employee = employee;
                    editEmployeeCtrl.editedEmployee = angular.copy(editEmployeeCtrl.employee);
                } else {
                    returnToEmployees();
                }
            });

        USStatesModel.getUSStates()
            .then(function (usstates) {
                editEmployeeCtrl.usstates = usstates;
            });
        CountriesModel.getCountries()
            .then(function (countries) {
                editEmployeeCtrl.countries = countries;
            });

        editEmployeeCtrl.cancelEditing = cancelEditing;
        editEmployeeCtrl.updateEmployee = updateEmployee;
    })
;
