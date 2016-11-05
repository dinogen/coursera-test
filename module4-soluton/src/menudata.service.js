(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('BaseURLPath', 'https://davids-restaurant.herokuapp.com');


  MenuDataService.$inject = ['$q', '$http','BaseURLPath']
  function MenuDataService($q, $http, BaseURLPath) {
    var service = this;

    service.getAllCategories = function () {
      var promise1 = $http({
        method: "GET",
        url: BaseURLPath + "/categories.json"
      });
      return promise1;
    }

    service.getItemsForCategory = function (categoryShortName) {
      var promise1 = $http({
        method: "GET",
        url: BaseURLPath + "/menu_items.json",
        data: {category: categoryShortName}
      });
      return promise1;
    }


  }
})();
