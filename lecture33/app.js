(function () {
'use strict';

angular.module('ShoppingListComponentApp', [])
.controller('ShoppingListController', ShoppingListController)
.service('ShoppingListService', ShoppingListService)
.component('shoppingList', {
  templateUrl: 'shoppingList.html',
  controller: ShoppingListComponentController,
  bindings: {
    ccitems: '<ltitems',
    cctitle: '@atitle',
    onRemove: '&aremove'
  }
});

ShoppingListComponentController.$inject = ['$scope', '$element']
function ShoppingListComponentController($scope, $element) {
  var $ctrl = this;

  $ctrl.cookiesInList = function () {
    for (var i = 0; i < $ctrl.ccitems.length; i++) {
      var name = $ctrl.ccitems[i].name;
      if (name.toLowerCase().indexOf("cookie") !== -1) {
        return true;
      }
    }
    return false;
  };

  $ctrl.remove = function (myIndex) {
      $ctrl.onRemove({index: myIndex});
  };

  $ctrl.$onInit = function () {
    console.log("We are in $onInit()");
  };

  $ctrl.$onChanges = function (changeObj) {
    console.log("Changes: ", changeObj);
  };


  $ctrl.$postLink = function () {
    $scope.$watch('$ctrl.cookiesInList()', function (newval,oldval) {
      var errorElem = $element.find('div.error');
      console.log(errorElem);
      if (newval == true) {
        errorElem.slideDown(900);
      } else {
        errorElem.slideUp(900);
      }
    });
  };

}


ShoppingListController.$inject = ['ShoppingListService'];
function ShoppingListController(ShoppingListService) {
  var viewList = this;
  viewList.citems = ShoppingListService.getItems();
  var origTitle = "Shopping List";
  viewList.ctitle = origTitle + " (" + viewList.citems.length + " items )";

  viewList.itemName = "";
  viewList.itemQuantity = "";

  viewList.addItem = function () {
    ShoppingListService.addItem(viewList.itemName, viewList.itemQuantity);
    viewList.ctitle = origTitle + " (" + viewList.citems.length + " items )";
  }

  viewList.removeItem = function (itemIndex) {
    console.log("'this' is: ", this);
    this.lastRemoved = "Last item removed was " + this.citems[itemIndex].name;
    ShoppingListService.removeItem(itemIndex);
    this.ctitle = origTitle + " (" + viewList.citems.length + " items )";
  };
}


// If not specified, maxItems assumed unlimited
function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}




})();
