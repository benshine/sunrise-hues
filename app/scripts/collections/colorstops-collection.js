/*global Sunrise, Backbone*/

Sunrise.Collections = Sunrise.Collections || {};

(function () {
  'use strict';
  console.log("At init time, model is ", Sunrise.Models.Colorstop);

  Sunrise.Collections.Colorstops = Backbone.Collection.extend({

    localStorage: new Backbone.LocalStorage('sunrise-hues'),
    model: Sunrise.Models.Colorstop,
    resetToDefaults: function () {
      console.log("my model is: ", this.model);
      console.log("collection is : ", this);

      this.reset(Sunrise.Collections.Colorstops.DEFAULT_SUNRISE);
    }
  }, {
    DEFAULT_SUNRISE:
      [
        { color: "#676de8", time: 10, id: 2},
        { color: "#BBB", time: 20, id: 3},
        { color: "#fff7b8", time: 30, id: 4},
        { color: "#ffffff", time: 40, id: 5}
      ]
    }
  );
})();
