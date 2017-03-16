angular.module('BaseClass')
.factory('BCValidatable.ValidationFn', [function() {
    function ValidationFn(validationFn, options) {
        var fn = _.bind(validationFn, options);

        return fn;
    }
    return ValidationFn
}]);