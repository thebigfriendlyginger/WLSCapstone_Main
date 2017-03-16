angular.module('BaseClass')
.factory('BCValidataable.Validator', ['BCValidatable.ValidationFn', 'BCValidatable.validators',
    function(ValidationFn, validators) {
        function Validator(validationFn) {
            this.name = validationFn.name;
            this.message = validationFn.message;
            this.configure = function(options) {
                options = defaultOptions(options);
                if (hasChildren()) return configuredChildren(options);
                return new ValidationFn(validationFn, _.defaults(options, this));
            };

            var validator = this;
            this.childValidators = {};
            addChildValidators(validationFn.options);
            validators.register(validators);

            function addChildValidators(options) {
                _.each(options, function(value, key) {
                    if (isValidator(value)) validator.childValidators[key] = value;
                })
            }

            function isValidator(option) {
                return option.constructor.name == 'Validator';
            }

            function hasChildren() {
                return Object.keys(validator.childValidators).length > 0;
            }

            function configuredChildren(options) {
                return _.chain(validator.childValidators)
                    .map(function(childValidator, name) {
                        if (options[name]) return childValidator.configure(options[name]);
                    })
                    .compact()
                    .value();
            }

            function defaultOptions(options) {
                if (!_.isObject(options)) options =  {value: options, message: this.message}
                if (!_.isUndefined(validationFn.name)) options[validationFn.name] = options.value;
                return options;
            }
        }

}]);