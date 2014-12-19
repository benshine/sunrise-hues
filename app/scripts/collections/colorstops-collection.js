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
        { color: "#ffb6c1", time: 20, id: 3},
        { color: "#f6fc9a", time: 40, id: 5}
      ]
    }
  );
})();
