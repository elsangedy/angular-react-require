define(function(require) {
  'use strict';

  var angular = require('angular');

  // angular module definition
  return angular.module(

    // module name
    'angular-react-require',

    // module dependencies
    [
      require('./components/tabela/package').name
    ]
  );

});
