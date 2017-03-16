angular.module('claims.edit', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('wombat.nav.claims.edit', {
                url: '/:claimId/edit',
                //target the un-named 'ui-view' in PARENT states template
                templateUrl: 'js/claims/edit/claim-edit.tmpl.html',
                controller: 'EditClaimCtrl as editClaimCtrl'
            })
        ;
    })
    .controller('EditClaimCtrl', function ($state, $stateParams, ClaimsModel, USStatesModel, CountriesModel, AccidentsModel){
        var editClaimCtrl = this;

        function returnToClaims() {
            $state.go('wombat.nav.claims')
        }

        function updateClaim() {
            editClaimCtrl.claim = angular.copy(editClaimCtrl.editedClaim);
            ClaimsModel.updateClaim(editClaimCtrl.editedClaim);
            returnToClaims();
        }

        function cancelEditing() {
            returnToClaims();
        }

        ClaimsModel.getClaimById($stateParams.claimId)
            .then(function (claim) {
                if (claim) {
                    editClaimCtrl.claim = claim;
                    editClaimCtrl.editedClaim = angular.copy(editClaimCtrl.claim);
                } else {
                    returnToClaims();
                }
            });

        USStatesModel.getUSStates()
            .then(function (usstates) {
                editClaimCtrl.usstates = usstates;
            });
        CountriesModel.getCountries()
            .then(function (countries) {
                editClaimCtrl.countries = countries;
            });
        AccidentsModel.getAccidents()
            .then(function (accidents) {
                editClaimCtrl.accidents = accidents;
            });

        editClaimCtrl.cancelEditing = cancelEditing;
        editClaimCtrl.updateClaim = updateClaim;
    })
;
