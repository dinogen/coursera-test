(function () {
  'use strict';

  angular.module('MyApp', [])
  .controller('MenuController', MenuController)
  .service('MenuService',MenuService)
  .constant('BaseURLPath', 'http://davids-restaurant.herokuapp.com')
  .directive('shoppingListItem', ShoppingListItem);

  function ShoppingListItem() {
    var ddo = {
      template: '<li><a href="" ng-click="menu.logMenuItems(i.short_name)">({{i.short_name}}</a>) {{i.name}}</li>'
    };
    return ddo;
  }

  MenuController.$inject = ['MenuService'];
  function MenuController (MenuService) {
    var menu = this;
    var promise = MenuService.getMenuCategories();
    promise.then(function (response) {
      menu.categories = response.data;
    })
    .catch(function (err) {
      console.log("Errore di comunicazione");
    });
    menu.logMenuItems = function (shortName) {
      var promise = MenuService.getMenuForCategories(shortName);
      promise.then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
    }
  }

  MenuService.$inject = ['$http', 'BaseURLPath'];
  function MenuService($http, BaseURLPath) {
    this.getMenuCategories = function () {
      var response = $http({
        method: "GET",
        url: BaseURLPath + "/categories.json"
      });
      return response;
    };
    this.getMenuForCategories = function (shortName) {
      var response = $http({
        method: "GET",
        url: BaseURLPath + "/menu_items.json",
        params: {category: shortName}
      });
      return response;
    }
  }
})();
