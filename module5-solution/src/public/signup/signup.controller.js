(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['signupData','menuItems','SignupService'];
function SignupController(signupData,menuItems,SignupService) {
  var $ctrl = this;
  $ctrl.firstname = "";
  $ctrl.lastname = "";
  $ctrl.email = "";
  $ctrl.phone = "";
  $ctrl.favoritedish = "";

  $ctrl.signupData = signupData;

  $ctrl.submit = function () {
    $ctrl.signupData.registered = true;
    $ctrl.signupData.firstname = $ctrl.firstname;
    $ctrl.signupData.lastname = $ctrl.lastname;
    $ctrl.signupData.email = $ctrl.email;
    $ctrl.signupData.phone = $ctrl.phone;
    $ctrl.signupData.favoritedish = $ctrl.favoritedish;
    $ctrl.showFavoriteError = false;
    var promise = SignupService.getMenuItemPromise($ctrl.favoritedish);
    promise.then(function (response) {
      $ctrl.signupData.favoritedishjsondata = response.data;
      $ctrl.completed = true;
    }).catch(function (err) {
      $ctrl.signupData.favoritedishjsondata = "nope";
      $ctrl.completed = false;
      $ctrl.showFavoriteError = true;
    });
  }
}


})();
