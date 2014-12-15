/*global Sunrise, Backbone*/

Sunrise.Collections = Sunrise.Collections || {};

(function () {
  'use strict';

  Sunrise.Collections.Colorstops = Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage('sunrise-hues'),
    model: Sunrise.Models.Colorstop,
    resetToDefaults: function () {
      this.reset(Sunrise.Collections.Colorstops.DEFAULT_SUNRISE);
    }
  }, {
    DEFAULT_SUNRISE:
      [
        { color: "#676de8", time: 10, id: 2},
        { color: "lightpink", time: 20, id: 3},
        { color: "#ffffff", time: 40, id: 5}
      ]
    }
  );
})();
