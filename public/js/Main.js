angular.module('MainApp2', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "js/templates/main.html"
            })
            .when("/employee", {
                templateUrl : "js/templates/employee.html"
            })
            .when("/accident", {
                templateUrl : "js/templates/accident.html"
            })
            .when("/claim", {
                templateUrl : "js/templates/claim.html"
            });
        $locationProvider.html5Mode(true);
    })
    .controller('MainController', function($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;

        $scope.categories = [
            {"id": 0, "name": "Employee"},
            {"id": 1, "name": "Accident"},
            {"id": 2, "name": "Claim"}
        ];

        $scope.bookmarks = [
            {"id":0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
            {"id":1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development" },
            {"id":2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
            {"id":3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
            {"id":4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
            {"id":5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
            {"id":6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
            {"id":7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
            {"id":8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
        ];

        $scope.currentCategory = null;

        function setCurrentCategory(category) {
            $scope.currentCategory  = category;
        }

        function isCurrentCategory(category) {
            return $scope.currentCategory !== null && category.name === $scope.category.name;
        }
        $scope.setCurrentCategory = setCurrentCategory;
        $scope.isCurrentCategory = isCurrentCategory;

    });