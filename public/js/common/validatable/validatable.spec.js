describe("BCValidatable", function() {
   var Validatable, Validator;
   beforEacch(inject(["BCValidatable", "BCValidatable.Validator",
   function(_BCValidatable_, _BCValidator_) {
       Validatable = _BCValidatable_;
       Validation = _BCValidator_;
   }]));

   factory('MinValidator', ['Validatable.Validator', function(Validator) {
       function min(value) {
           return value.length >= this.min;
       }
       min.message = function() {
           return "must be greater than " + this.min + " characters.";
       };
       return new Validator(min);
   }]);
});