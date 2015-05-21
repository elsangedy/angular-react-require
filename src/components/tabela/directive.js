define(function(require) {
  'use strict';

  var module = require('./module');

  module.directive('tabela', Tabela);

  //---

  Tabela.$inject = ['reactDirective'];

  function Tabela(reactDirective) {

    return reactDirective('Tabela');

  }

});
