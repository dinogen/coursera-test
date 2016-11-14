(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['signupData','ApiPath'];
function MyinfoController(signupData, ApiPath) {
  var $ctrl = this;
  $ctrl.signupData = signupData;
  $ctrl.imagebasepath = ApiPath;
}

})();
