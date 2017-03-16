angular.module('BaseClass')

.factory('BCValidatable', ['BCValidatable.Field', 'BCValidatable.validators.required',
    'BCValidatable.validators.length', 'BCValidatable.validators.length.min',
    'BCValidatable.validators.length.max', function(Field) {
    function Validatable() {
        var _validations = {};

        privateVariable(_validations, 'add', function(validationSpec) {
            _.each(validationSpec, addField);
        });

        function addField(validationSet, fieldName) {
            if (_validations[fieldName]) _validations[fieldName].addValidators(validationSet);
            else _validations[fieldName] = new Field(fieldName, validationSet);
        }

        this.validations = _validations;
        this.validates = _validations.add;
    }
    return Validatable;
}

]);