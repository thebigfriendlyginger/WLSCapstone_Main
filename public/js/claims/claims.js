angular.module('claims', [
    'claims.create',
    'claims.edit',
    'wombat.models.claims'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('wombat.nav.claims', {
                url: 'claims',
                views: {
                    'content@': {
                        controller: 'ClaimsCtrl as claimsCtrl',
                        templateUrl: 'js/claims/claims.tmpl.html'
                    }
                }
            })
        ;
    })
    .controller('ClaimsCtrl', function ClaimsCtrl($stateParams, ClaimsModel) {
        var claimsCtrl = this;

        ClaimsModel.getClaims()
            .then(function (claims) {
                claimsCtrl.claims = claims;
            });

        claimsCtrl.deleteClaim = ClaimsModel.deleteClaim;
    })
;
