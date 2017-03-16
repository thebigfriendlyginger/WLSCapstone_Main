angular.module('BaseClass')
    .factory('BCValidatable.validators.length', ['BCValidatable.Validator',
    'BCValidatable.validators.length.max', 'BCValidatable.validators.length.min',
    function (Validator, max, min) {
        function length() {};
        length.message = "";
        length.options = {
            max: max,
            min: min
        };
        return new Validator(length);
    }]);