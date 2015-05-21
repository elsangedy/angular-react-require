define(function(require) {
  'use strict';

  var module = require('./module');
  require('./controller');
  require('./factory');
  require('./directive');

  return module;

});
