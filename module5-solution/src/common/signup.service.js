(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);


function SignupService() {
  var service = this;

  var signupData = {
    registered: false,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    favoritedish: ""
  }

  service.getSignupData = function () {
    return signupData;
  }


}



})();
