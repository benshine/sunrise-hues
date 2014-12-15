/*global Sunrise, $*/


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

    animatedView.render();
  }
};

$(document).ready(function () {
  'use strict';
  Sunrise.init();
});
