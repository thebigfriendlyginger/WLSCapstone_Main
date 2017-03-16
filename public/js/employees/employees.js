angular.module('employees', [
    // We want to include all the submodules that an employee object will have access to.
    // employees module is then routed to the main application
    'employees.create',
    'employees.edit',
    'wombat.models.employees'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('wombat.nav.employees', {
                //by extending the nav module we are actually making employees a submodule of nav
                //this is how we maintain a persistent navigation bar across many views
                url: 'employees',
                views: {
                    'content@': {
                        controller: 'EmployeesCtrl as employeesCtrl',
                        templateUrl: 'js/employees/employees.tmpl.html'
                    }
                }
            })
        ;
    })
    .controller('EmployeesCtrl', function (EmployeesModel) {
        var employeesCtrl = this;

        // function openEdit(employee) {
        //     $state.go('wombat.nav.employees.edit', {params: {employeeId: employee.id}})
        // }
        EmployeesModel.getEmployees()
            .then(function (employees) {
                employeesCtrl.employees = employees;
            });

        // pull functions from the EmployeesModel into the employeesCtrl
        // to follow a function, hold ctrl and hover your mouse over the function
        employeesCtrl.deleteEmployee = EmployeesModel.deleteEmployee;
        // employeesCtrl.openEdit = openEdit;
    })
;
