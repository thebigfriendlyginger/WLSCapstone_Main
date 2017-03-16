angular.module('claims.create', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('wombat.nav.claims.create', {
                url: '/create',
                //target the un-named 'ui-view' in PARENT states template
                templateUrl: 'js/claims/create/claim-create.tmpl.html',
                controller: 'CreateClaimCtrl as createClaimCtrl'
            })
        ;
    })
    .controller('CreateClaimCtrl', function($state, $stateParams, ClaimsModel, USStatesModel, CountriesModel, AccidentsModel) {
        var createClaimCtrl = this;

        function returnToClaims() {
            $state.go('wombat.nav.claims')
        }

        function cancelCreating() {
            returnToClaims();
        }

        function createClaim() {
            ClaimsModel.createClaim(createClaimCtrl.newClaim);
            returnToClaims();
        }

        function resetForm() {
            createClaimCtrl.newClaim = {
                AccidentID: '',
                ClaimDate: '',
                ClaimDescription: '',
                ClaimState: '',
                ClaimCountry: '',
                ClaimAmount: ''
            };
        }

        USStatesModel.getUSStates()
            .then(function (usstates) {
                createClaimCtrl.usstates = usstates;
            });
        CountriesModel.getCountries()
            .then(function (countries) {
                createClaimCtrl.countries = countries;
            });
        AccidentsModel.getAccidents()
            .then(function (accidents) {
                createClaimCtrl.accidents = accidents;
            });


        createClaimCtrl.cancelCreating = cancelCreating;
        createClaimCtrl.createClaim = createClaim;

        resetForm();
    });