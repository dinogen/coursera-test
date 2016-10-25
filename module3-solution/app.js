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


  // Retrieve menu
  service.getMenuItems = function () {
    var response = $http({
      method: "GET",
      url: BaseURLPath + "/menu_items.json"
    });
    return response;
  };
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchString = "";
  menu.dontWantList = [];
  menu.onNarrow = function () {
    // console.log("button clicked");
    menu.menuItems = [];
    var promise = MenuSearchService.getMenuItems();
    promise.then(function (response) {
      var menuItems = response.data.menu_items;
      menuItems.forEach(function (item) {
        if (item.description.indexOf(menu.searchString)  > 0){
          // console.log(" scelta item:", item);
          menu.menuItems.push(item);
        }
      });
    })
    .catch(function (err) {
      console.log("Error reading from the remote service.");
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
