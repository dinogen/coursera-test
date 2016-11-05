(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService'];
function CategoriesController(MenuDataService) {
  var mainlist = this;
  mainlist.items = [];
  var promise = MenuDataService.getAllCategories();
  promise.then(function (response) {
    mainlist.items = response.data;
  })
  .catch(function (err) {
    console.log("Error reading from the remote service.");
  });
}

})();
