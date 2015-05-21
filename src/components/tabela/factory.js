define(function(require) {
  'use strict';

  var module = require('./module');

  var React = require('react');

  module.factory('Tabela', Tabela);

  //---

  //Tabela.$inject = [];

  function Tabela() {

    var factory = React.createClass({
      propTypes : {
        table: React.PropTypes.object.isRequired
      },

      getDefaultProps: getDefaultPropsFn,

      render: renderFn
    });

    return factory;

    //---

    function getDefaultPropsFn() {
      return {
        table: {
          rows: [],
          cols: []
        }
      };
    }

    //---

    function renderFn() {
      var cols = this.props.table.cols.map(colsFn);
      var header = React.DOM.thead(null, headerFn(cols));
      var body = React.DOM.tbody(null, this.props.table.rows.map(bodyFn));

      return React.DOM.table({key: 'body', className: 'table table-striped'}, [header, body]);

      //---

      function colsFn(col, i) {
        return React.DOM.th({key: i}, col);
      }

      //---

      function cellFn(cell, i) {
        return React.DOM.td({key: i}, cell);
      }

      //---

      function bodyFn(row, i) {
        return React.DOM.tr({key: i}, row.map(cellFn));
      }

      //---

      function headerFn(cols) {
        return React.DOM.tr({key:'header'}, cols);
      }
    }
  }

});
