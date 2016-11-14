(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
  var $ctrl = this;
  $ctrl.firstname = "";
  $ctrl.lastname = "";
  $ctrl.email = "";
  $ctrl.phone = "";
  $ctrl.favoritedish = "";

  $ctrl.signupData = SignupService.getSignupData();

  $ctrl.submit = function () {
    $ctrl.signupData.registered = true;
    $ctrl.signupData.firstname = $ctrl.firstname;
    $ctrl.signupData.lastname = $ctrl.lastname;
    $ctrl.signupData.email = $ctrl.email;
    $ctrl.signupData.phone = $ctrl.phone;
    $ctrl.signupData.favoritedish = $ctrl.favoritedish;
    $ctrl.completed = true;
  }
}


})();
