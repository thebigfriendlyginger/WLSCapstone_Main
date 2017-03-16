angular.module('BaseClass')
    .factory('BCValidataable.Validation', [function() {
        function Validation(field, validationFn) {
            this.field = field;
            this.message = validationFn.message;
            this.validate = function(instance) {
                return validationFn(instance[field])
            }
        }
        return Validation;
    }]);