var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kick off jasmine, because it is asynchronous
  callback: window.__karma__.start,

  paths: {
    bower: 'app/bower_components',
    jquery: 'app/bower_components/jquery/dist/jquery',
    jst: 'app/generated/scripts/templates',
    backbone: 'app/bower_components/backbone/backbone',
    backboneLocalStorage: 'app/bower_components/backbone.localStorage/backbone.localStorage',
    spectrum: 'app/bower_components/spectrum/spectrum',
    services: 'app/scripts/services',
    models: 'app/scripts/models',
    views: 'app/scripts/views',
    collections: 'app/scripts/collections',
    underscore: 'app/bower_components/underscore/underscore'
  },
  shim : {
    'bower/jquery-color/jquery.color': ['jquery']
  }
});
