/*global Sunrise, $*/

requirejs.config({
  paths: {
    bower: '../bower_components',
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone',
    underscore: '../bower_components/underscore'
  }
});


requirejs([
    'jquery',
    'bower/underscore/underscore',
    'bower/backbone/backbone'
  ],
  function   ($, Underscore, Backbone) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    console.log("yes, we are here!");
    $('body').css('background-color', '#F00');
    console.log("Do we have _? ", _);
    console.log("Do we have backbone? ", Backbone.View);
  });

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
