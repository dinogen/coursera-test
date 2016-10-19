(function () {
'use strict';

angular.module('MyApp', [])
.controller('MyController', MyController);

var list1 = [
  {
    nome: "Marcello",
    anno: 1966
  },
  {
    nome: "Antonio",
    anno: 1964
  },
  {
    nome: "Tommaso",
    anno: 1996
  }
]

MyController.$inject = ['$scope'];
function MyController ($scope) {
  $scope.list1 = list1;
  $scope.nome= "chi";
  $scope.anno = "0";
  $scope.addToList = function () {
    $scope.list1.push({nome: $scope.nome, anno: $scope.anno});
  }

  $scope.removeLast = function () {
    $scope.list1.pop();
  }

  function Dog(name) {
    this.name = name;
  }

  var myDog = new Dog("fido");
  console.log("myDog: ", myDog);

  $scope.createDog = function () {
    var anotherDog = {name: "fuffi"};
    console.log("anotherDog: ", anotherDog);
  }
}

})();
