(function () {
  'use strict';

  angular.module('MyApp', [])
  .controller('ShoppingListController', ShoppingListController)
  .service('ShoppingCartService', ShoppingCartService)
  .service('ItemFilterService',ItemFilterService);

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

  function ItemFilterService() {

  }

  ShoppingCartService.$inject = ['$q','ItemFilterService'];
  function ShoppingCartService($q, ItemFilterService) {
    var list1 = [];
    this.getList = function () {
      return list1;
    }
    this.addToList = function (prod,qty) {
      var prodPromise = ItemFilterService.checkProd(prod);
      var qtyPromise = ItemFilterService.checkQty(qty);
      $q.all([prodPromise,qtyPromise])
      .then(function (response) {
        if (qty.length == 0) {
          qty = 1;
        }
        list1.push({prod: prod, qty: qty});
      })
      .catch(function (errorResponse) {
        console.log(errorResponse.message);
      });
    }


    this.remove = function (i) {
      list1.splice(i,1);
    }
  }

  ItemFilterService.$inject = ['$q', '$timeout'];
  function ItemFilterService($q,$timeout) {
    var service = this;
    service.checkProd = function (prod) {
      var deferred = $q.defer();
      var result = {message: ""};
      $timeout(function () {
        if (prod.toLowerCase().indexOf('bomb')==-1) {
          deferred.resolve(result);
        } else {
          result.message = "Niente bombe qui.";
          deferred.reject(result);
        }
      }, 3000);
      return deferred.promise;
    }
    service.checkQty = function (qty) {
      var deferred = $q.defer();
      var result = {message: ""};
      $timeout(function () {
        if (qty < 10) {
          deferred.resolve(result);
        } else {
          result.message = "Troppa roba.";
          deferred.reject(result);
        }
      }, 1000);
      return deferred.promise;
    }
  }

})();
