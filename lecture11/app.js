(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

function DIController ($scope, $filter) {
  $scope.name = "Yaakov";
  var myDoorStatus = 'closed';
  $scope.doorStatus = myDoorStatus;

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  }

  $scope.pushDoor = function () {
    console.log('status init=' + $scope.doorStatus);
    if ($scope.doorStatus == 'closed') {
      $scope.doorStatus = 'open';
      console.log('status open=' + $scope.doorStatus);
    }
    else {
      $scope.doorStatus = 'closed';
      console.log('status closed=' + $scope.doorStatus);
    }

  }

}

})();
