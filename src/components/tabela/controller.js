define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('TabelaCtrl', TabelaCtrl);

  //---

  TabelaCtrl.$inject = ['$scope'];

  function TabelaCtrl($scope) {
    var vm = this;

    vm.table = {
      cols: [
        'First Name', 'Last Name', 'Email', 'Twitter', 'Id', 'Modified'
      ],
      rows: generateRows()
    };

    vm.regenerate = regenerate;
    vm.generateRows = generateRows;

    //---

    function generateRows() {
      var rows = [],
          i;

      for(i = 0; i < 5000; ++i) {
        var d = new Date();

        rows.push([
          'First Name ' + i,
          'Last Name ' + i,
          'name' + i + '@domain.com',
          '@name' + i,
          i + '-' + i,
          d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
        ]);
      }

      return rows;
    }

    //---

    function regenerate() {
      vm.table.rows = generateRows();
    }

  }

});
