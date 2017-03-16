angular.module('wombat.models.employees', [])
    .service('EmployeesModel', function ($http, $q) {
        var model = this,
            employees;

        function extract(result) {
            return result.data.employees;
        }

        function cacheEmployees(result) {
            employees = extract(result);
            return employees;
        }

        model.getEmployees = function () {
            return (employees) ? $q.when(employees) : $http.get('/api/employee').then(cacheEmployees);
        };

        model.getEmployeeById = function (employeeId) {
            return $http.get('/api/employee/' + employeeId).then(function (response) {
                return response.data.employee;
            });
        };

        model.createEmployee = function (employee) {
            $http.post('/api/employee', employee)
                .then( function(result) {
                    employee.id = result.data;
                    if(employee.id)
                        employees.push(employee);
                });
        };

        model.updateEmployee = function (employee) {
            $http.put('/api/employee/' + employee.id, employee);
            var index = _.findIndex(employees, function (e) {
                return e.id == employee.id
            });
            employees[index] = employee;
        };

        model.deleteEmployee = function (employee) {
            $http.delete('/api/employee/' + employee.id);
            _.remove(employees, function (e) {
                return e.id == employee.id;
            });
        };

    })
;
