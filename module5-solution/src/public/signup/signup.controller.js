(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['signupData','menuItems'];
function SignupController(signupData,menuItems) {
  var $ctrl = this;
  $ctrl.firstname = "";
  $ctrl.lastname = "";
  $ctrl.email = "";
  $ctrl.phone = "";
  $ctrl.favoritedish = "";

  $ctrl.signupData = signupData;
  $ctrl.menuItems = menuItems.menu_items;

  $ctrl.submit = function () {
    $ctrl.signupData.registered = true;
    $ctrl.signupData.firstname = $ctrl.firstname;
    $ctrl.signupData.lastname = $ctrl.lastname;
    $ctrl.signupData.email = $ctrl.email;
    $ctrl.signupData.phone = $ctrl.phone;
    $ctrl.signupData.favoritedish = $ctrl.favoritedish;
    console.log($ctrl.signupData);
    $ctrl.completed = true;
  }
}


})();
