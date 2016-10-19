(function () {
'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService) {
    var contr = this;
    contr.toBuyList = ShoppingListCheckOffService.getToBuyShoppingList();
    contr.bShowMessage = false;
    contr.onClickBought = function (i) {
      ShoppingListCheckOffService.itemBought(i);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var contr = this;
    contr.boughtList = ShoppingListCheckOffService.getBoughtShoppingList();
    contr.bShowMessage = true;
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyList = [{
      name: "water",
      qty: 1
    },{
      name: "hamburger",
      qty: 5
    },{
      name: "apples",
      qty: 3
    },{
      name: "eggs",
      qty: 6
    },{
      name: "pears",
      qty: 2
    },{
      name: "ham",
      qty: 4
    },{
      name: "bread",
      qty: 1
    }];
    var boughtList = [];
    service.getToBuyShoppingList = function () {
      return toBuyList;
    }
    service.getBoughtShoppingList = function () {
      return boughtList;
    }
    service.itemBought =function (i) {
      var itemToMove = toBuyList[i];
      boughtList.push(itemToMove);
      toBuyList.splice(i,1);
    }
  }
})();
