(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('BaseURLPath', 'http://davids-restaurant.herokuapp.com')
.directive('foundItems', FoundItems);


MenuSearchService.$inject = ['$http', 'BaseURLPath'];
function MenuSearchService($http, BaseURLPath) {
  var service = this;
  service.getMatchedMenuItems = function (searchString) {
    var promise1 = $http({
      method: "GET",
      url: BaseURLPath + "/menu_items.json"
    });
    var promise2 = promise1.then(function (response) {
      var fullList = response.data.menu_items;
      var menuItems = [];
      fullList.forEach(function (item) {
        if (item.description.indexOf(searchString)  > 0) {
          menuItems.push(item);
        }
      });
      return menuItems;
    })
    .catch(function (err) {
      console.log("Error reading from the remote service.");
    });
    return promise2;
  };
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchString = "";
  menu.dontWantList = [];
  menu.onNarrow = function () {
    var promise = MenuSearchService.getMatchedMenuItems(menu.searchString);
    promise.then(function (response) {
      menu.foundList = response;
    })
    .catch(function (err) {
      console.log("Error from getMatchedMenuItems");
    });
  }
}

function FoundItems() {
  var ddo = {
    templateUrl: "founditems.html"
  };
  return ddo;
}


})();
