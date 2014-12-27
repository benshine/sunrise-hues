/*global Sunrise, $*/

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
    'sunrise',
    'models/colorstop-model',
    'collections/colorstops-collection',
    'views/colorstops-view',
    'views/controls-view',
    'views/sunrise-animated-view'
  ],
  function ($, Underscore, Backbone,
            Sunrise, ColorstopModel, ColorstopCollection,
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

/*

window.Sunrise = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';

    var collection = new this.Collections.Colorstops();
    window.collection = collection; // for debugging only
    var collectionView = new this.Views.Colorstops(
      { collection: collection }
    );
    collectionView.render();
    collection.resetToDefaults();

    var animatedView = new this.Views.SunriseAnimatedView(
      {
        collection: collection
      }
    );

    var controlsView = new this.Views.Controls({
      collection: collection,
      animatedView: animatedView
    });
    controlsView.render();

    animatedView.render();
  }
};

$(document).ready(function () {
  'use strict';
  Sunrise.init();
});
*/
