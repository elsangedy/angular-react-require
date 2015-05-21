require({

  jsx: {
    fileExtension: '.jsx'
  },

  paths: {

    angular: [
      './vendor/angular.min'
    ],

    react: [
      './vendor/react.min'
    ],

    ngReact: [
      './vendor/ngReact.min'
    ]

  },

  shim: {

    'angular': {
      exports: 'angular'
    },

    'react': {
      exports: 'react'
    },

    'ngReact': {
      deps: ['angular']
    }

  },

  priority: [
    'angular',
    'react'
  ],

  deps: ['./bootstrap']

});
