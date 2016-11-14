(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);

SignupService.$inject = ['$http','ApiPath'];
function SignupService($http, ApiPath) {
  var service = this;

  var signupData = {
    registered: false,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    favoritedish: "",
  }

  service.getSignupData = function () {
    return signupData;
  }

  service.getMenuItemPromise = function (short_name) {
    var response = $http({
          method: "GET",
          url: (ApiPath + '/menu_items/' + short_name + '.json')
        });
    return response;
  };


}



})();
