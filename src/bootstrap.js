define(function(require) {
  'use strict';

  var angular = require('angular');

  angular.element(document).ready(startApp);

  //---

  function startApp() {

    // define run module to bootstrap application
    var module = angular.module(
      // module name
      'app',

      // module dependencies
      [
        require('./app').name
      ]
    );

    // start angular app
    angular.bootstrap(document, [module.name]);

  }

});
