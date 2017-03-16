angular.module('wombat.models.claims', [])
    .service('ClaimsModel', function ($http, $q) {
        var model = this,
            claims;

        function extract(result) {
            return result.data.claims;
        }

        function cacheClaims(result) {
            claims = extract(result);
            return claims;
        }

        model.getClaims = function () {
            return (claims) ? $q.when(claims) : $http.get('/api/claim').then(cacheClaims);
        };

        model.getClaimById = function (claimId) {
            return $http.get('/api/claim/' + claimId).then(function (response) {
                return response.data.claim;
            });
        };

        model.createClaim = function (claim) {
            $http.post('/api/claim', claim).then(function (response) {
                claim.id = response.data;
                if(claim.id)
                    claims.push(claim);
            });
        };

        model.updateClaim = function (claim) {
            $http.put('/api/claim/' + claim.id, claim);
            var index = _.findIndex(claims, function (c) {
                return c.id == claim.id
            });

            claims[index] = claim;
        };

        model.deleteClaim = function (claim) {
            $http.delete('/api/claim/' + claim.id);
            _.remove(claims, function (c) {
                return c.id == claim.id;
            });
        };

    })
;
