(function () {
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function ($scope) {
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.displayNumeric = function () {
     var totalNameValue = calNum4String($scope.name);
     $scope.totalValue = totalNameValue;
  };

  function calNum4String(s) {
      var totalStringValue=0;
      for (var i=0; i< s.length; i++) {
        totalStringValue += s.charCodeAt(i);
      }
      return totalStringValue;
  }


});



})();
