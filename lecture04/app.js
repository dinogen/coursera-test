(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "marcello";
  $scope.myFunc = function () {
    return "Ciaooo";

  }
});

})();
