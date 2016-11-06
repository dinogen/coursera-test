(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('BaseURLPath', 'https://davids-restaurant.herokuapp.com');


  MenuDataService.$inject = ['$q', '$http','BaseURLPath']
  function MenuDataService($q, $http, BaseURLPath) {
    var service = this;

    service.getAllCategories = function () {
      var data1 = $http({
        method: "GET",
        url: BaseURLPath + "/categories.json"
      });
      return data1.then(function (response) {
        return response.data;
      }).catch(
        function (error) {
          console.log("Error while retrieving data");
        }
      );
    }

    service.getItemsForCategory = function (categoryShortName) {
      var data1 = $http({
        method: "GET",
        url: BaseURLPath + "/menu_items.json",
        params: {category: categoryShortName}
      });
      return data1.then(function (response) {
        return response.data.menu_items;
      }).catch(
        function (error) {
          console.log("Error while retrieving data");
        }
      );
    }


  }
})();
