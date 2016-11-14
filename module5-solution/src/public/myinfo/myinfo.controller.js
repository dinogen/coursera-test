(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['signupData'];
function MyinfoController(signupData) {
  var $ctrl = this;
  $ctrl.signupData = signupData;
}

})();
