(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', '$stateParams'];
function ItemsController(MenuDataService,$stateParams) {
  var mainlist = this;
  mainlist.items = [];
  console.log($stateParams);
  var promise = MenuDataService.getItemsForCategory($stateParams.category);
  promise.then(function (response) {
    mainlist.items = response.data.menu_items;
  })
  .catch(function (err) {
    console.log("Error reading from the remote service.");
  });
}

})();
