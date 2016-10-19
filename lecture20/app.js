(function () {
  'use strict';

  angular.module('MyApp', [])
  .controller('MyController', MyController)
  .service('MyService', MyService);



  function MyController (MyService) {
    this.list1 = MyService.getList();
    this.nome= "";
    this.anno = "";
    this.addToList = function () {
      MyService.addToList(this.nome,this.anno);
    }

    this.removeAt = function (i) {
      MyService.remove(i);
    }



  }

  function MyService() {
    var list1 = [
      {
        nome: "Marcello",
        anno: 1966
      },
      {
        nome: "Antonio",
        anno: 1964
      },
      {
        nome: "Tommaso",
        anno: 1996
      }
    ];

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
