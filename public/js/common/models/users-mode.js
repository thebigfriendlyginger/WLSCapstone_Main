angular.module('wombat.models.users', [])
    .service('UsersModel', function ($http, $q) {
        var model = this,
            users;

        function extract(result) {
            return result.data.users;
        }

        function cacheUsers(result) {
            users = extract(result);
            return users;
        }

        model.getUsers = function () {
            return (users) ? $q.when(users) : $http.get('/api/user').then(cacheUsers);
        };

        model.getUserById = function (userId) {
            return $http.get('/api/user/' + userId).then(function (response) {
                return response.data.user;
            });
        };

        model.createUser = function (user) {
            $http.post('/api/user', user)
                .then( function(result) {
                    user.id = result.data;
                    if(user.id)
                        users.push(user);
                });
        };

        model.updateUser = function (user) {
            $http.put('/api/user/' + user.id, user);
            var index = _.findIndex(users, function (e) {
                return e.id == user.id
            });
            users[index] = user;
        };

        model.deleteUser = function (user) {
            $http.delete('/api/user/' + user.id);
            _.remove(users, function (e) {
                return e.id == user.id;
            });
        };

    })
;
