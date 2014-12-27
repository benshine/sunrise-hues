'use strict';

requirejs.config({
  paths: {
    bower: '../bower_components',
    jquery: '../bower_components/jquery/dist/jquery',
    jst: '../generated/scripts/templates',
    backbone: '../bower_components/backbone/backbone',
    backboneLocalStorage: '../bower_components/backbone.localStorage/backbone.localStorage',
    spectrum: '../bower_components/spectrum/spectrum'
  }
});

requirejs([
    'jquery',
    'bower/underscore/underscore',
    'backbone',
    'models/colorstop-model',
    'collections/colorstops-collection',
    'views/colorstops-view',
    'views/controls-view',
    'views/animated-view'
  ],
  function ($, Underscore, Backbone,
            ColorstopModel, ColorstopCollection,
            ColorstopsView, ControlsView, AnimatedView) {

    var collection = new ColorstopCollection();
    var collectionView = new ColorstopsView(
      { collection: collection }
    );
    collectionView.render();
    collection.resetToDefaults();

    var animatedView = new AnimatedView({ collection: collection});

    var controlsView = new ControlsView({
      collection: collection,
      animatedView: animatedView
    });
    controlsView.render();
    animatedView.render();
  }
);

