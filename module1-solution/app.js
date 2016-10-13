(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

function LunchCheckController ($scope) {
  $scope.foodList = "";
  $scope.message = "";
  $scope.messageColor = "text-success";
  $scope.inputBorderColor = "grey";

  $scope.checkFood = function () {
    var foodList = $scope.foodList;

    if (foodList.length == 0) {
      $scope.message = "Please enter data first";
      $scope.messageColor = "text-danger";
      $scope.inputBorderColor = "red";
    } else {
      var numOfItem = countTheList(foodList);
      console.log("the list has " + numOfItem + " elements");
      if (numOfItem > 3) {
        $scope.message = "Too much!";
        $scope.messageColor = "text-success";
        $scope.inputBorderColor = "green";
      } else {
        $scope.message = "Enjoy!";
        $scope.messageColor = "text-success";
        $scope.inputBorderColor = "green";
      }

    }
  }

  function countTheList(list) {
    var count = 0;
    var ar = list.split(",");
    for (var i=0; i<ar.length; i++)  {
      if (ar[i].trim().length > 0) {
        count++;
      }
    }

    return count;

  }



}

})();
