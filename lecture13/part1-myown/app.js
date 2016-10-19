(function () {
'use strict';

angular.module('MyApp', [])
.controller('MyController', MyController)
.filter('decor',DecorFilterFactory)
.filter('decorguided', DecorGuidedFilterFactory);

function DecorFilterFactory() {
  return function (s) {
    return "*" + s + "*"
  }
}

function DecorGuidedFilterFactory() {
  return function (s, mydecor) {
    return mydecor + s + mydecor
  }
}

MyController.$inject = ['$scope','$filter','decorFilter', 'decorguidedFilter'];
function MyController ($scope, $filter,decorFilter,decorguidedFilter) {
  $scope.name = "Marcello";


}

})();
