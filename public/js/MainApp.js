angular.module('MainApp', [
    'ui.router',
    'nav',
    'employees',
    'accidents',
    'claims',
    'wombat.models.usstates',
    'wombat.models.countries'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        //abstract state 'wombat' serves as a PLACEHOLDER or NAMESPACE for application states
        //think of this as the root of the application. name it anything you want.
            .state('wombat', {
                url: '',
                abstract: true
            })
        ;

        // if the route is not provided, send the view back to the index.
        $urlRouterProvider.otherwise('/');

        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // })
        // ;
    })
;