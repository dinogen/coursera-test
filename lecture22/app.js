(function () {
  'use strict';

  angular.module('MyApp', [])
  .controller('ShoppingListController', ShoppingListController)
  .provider('ShoppingCartService', ShoppingCartServiceProvider)
  .config(Config);

  Config.$inject = ['ShoppingCartServiceProvider'];
  function Config(ShoppingCartServiceProvider) {
    ShoppingCartServiceProvider.defaults.qty = 2;
  }

  ShoppingListController.$inject = ['ShoppingCartService'];
  function ShoppingListController (ShoppingCartService) {
    this.list1 = ShoppingCartService.getList();
    this.product = "";
    this.qty = "";
    this.addToList = function () {
      ShoppingCartService.addToList(this.product, this.qty);
    }

    this.removeAt = function (i) {
      ShoppingCartService.remove(i);
    }
  }




  function ShoppingCartService(defaultQTY) {
    var list1 = [];
    this.getList = function () {
      return list1;
    }
    this.addToList = function (prod,qty) {
      if (qty.length == 0) {
        qty = defaultQTY;
      }
      list1.push({prod: prod, qty: qty});
    }
    this.remove = function (i) {
      list1.splice(i,1);
    }
  }

  function ShoppingCartServiceProvider() {
    this.defaults = {
      qty: 1
    };

    this.$get = function () {
      var shoppingCart = new ShoppingCartService(this.defaults.qty);
      return shoppingCart;
    }

  }

})();
