/*global Sunrise, $*/


window.Sunrise = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    console.log('Hello from Backbone!');

    var collection = new this.Collections.Colorstops();
    window.collection = collection;

    var collectionView = new this.Views.Colorstops(
      {collection: collection}
    );
    collectionView.render();
  }
};

$(document).ready(function () {
  'use strict';
  Sunrise.init();
});
