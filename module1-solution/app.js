(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

function LunchCheckController ($scope) {
  $scope.foodList = "";
  $scope.message = "";

  $scope.checkFood = function () {
    var foodList = $scope.foodList;

    if (foodList.length == 0) {
      $scope.message = "Please enter data first";
    } else {
      var list = foodList.split(",");
      console.log("the list has " + list.length + " elements");
      if (list.length > 3) {
        $scope.message = "Too much!";
      } else {
        $scope.message = "Enjoy!";
      }

    }



  }



}

})();
