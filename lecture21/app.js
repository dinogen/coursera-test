(function () {
  'use strict';

  angular.module('MyApp', [])
  .controller('ShoppingListController', ShoppingListController)
  .factory('ShoppingCartFactory', ShoppingCartFactory);


  ShoppingListController.$inject = ['ShoppingCartFactory'];
  function ShoppingListController (ShoppingCartFactory) {
    var shoppingCartService = ShoppingCartFactory();
    this.list1 = shoppingCartService.getList();
    this.product = "";
    this.qty = "";
    this.addToList = function () {
      shoppingCartService.addToList(this.product, this.qty);
    }

    this.removeAt = function (i) {
      shoppingCartService.remove(i);
    }

  }

  function ShoppingCartFactory() {
    var factory = function () {
      return new ShoppingCart()
    }
    return factory;
  }


  function ShoppingCart() {
    var list1 = [];

    this.getList = function () {
      return list1;
    }

    this.addToList = function (name,year) {
      list1.push({nome: name, anno: year});
    }

    this.remove = function (i) {
      list1.splice(i,1);
    }

  }

})();
