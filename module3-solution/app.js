(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('BaseURLPath', 'https://davids-restaurant.herokuapp.com')
.directive('foundItems', FoundItemsDirective);


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
        if (item.description.toLowerCase().indexOf(searchString.toLowerCase())  > 0) {
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


function FoundItemsDirective() {
  var ddo = {
    templateUrl: "founditems.html",
    scope: {
      found: "<",
      onRemove: "&"
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };
  return ddo;
}

function FoundItemsDirectiveController() {
  var dirMenu = this;

}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchString = "";
  menu.onNarrow = function () {
    menu.dont = [];
    var promise = MenuSearchService.getMatchedMenuItems(menu.searchString);
    promise.then(function (response) {
      menu.found = response;
    })
    .catch(function (err) {
      console.log("Error from getMatchedMenuItems");
    });
  };
  menu.onRemove = function (i) {
    menu.dont.push(menu.found[i]);
    menu.found.splice(i,1);
  };

}


})();
