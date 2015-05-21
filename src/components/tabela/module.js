define(function(require) {
  'use strict';

  var angular = require('angular');

  require('ngReact');

  // angular module definition
  return angular.module(

  	// module name
    'angular-react-require.tabela',

    // module dependencies
    [
    	'react'
    ]
  );

});
