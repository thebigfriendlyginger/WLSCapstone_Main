angular.module('nav', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('wombat.nav', {
                url: '/',
                views: {
                    //target the ui-view named 'nav' in ROOT state (wombat)
                    //this lets us have a persistent side bar and to include partials in the rest of the layout
                    'nav@': {
                        controller: 'NavCtrl as navCtrl',
                        templateUrl: 'js/nav/nav.tmpl.html'
                    }
                }
            })
        ;
    })

    .controller('NavCtrl', function NavCtrl() {
        // var navCtrl = this;
    })
;