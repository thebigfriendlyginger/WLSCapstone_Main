angular.module('BaseClass')

    .factory('BCValidatable.Field', ['BCValidatable.Validator', 'BCValidatable.Validation',
        'BCValidatable.validators', function(Validator, Validation, validators) {
        function Field(name, validationSet) {
            var field = [];

            field.addValidators = function(validationSet) {
                _.each(validationSet, field.addValidator);
            };
            field.addValidator = function(options, validationName) {
                var validator = validators.find(validationName) || new Validator(options, validationName),
                    configuredFns = _.flatten([validator.configure(options)]);

                _.each(configuredFns, function(configuredFn) {
                    field.push(new Validation(name, configuredFn));
                });
            };
            return field;
        }
        return Field;
    }]);