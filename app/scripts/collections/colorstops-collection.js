/*global Sunrise, Backbone*/

Sunrise.Collections = Sunrise.Collections || {};

(function () {
  'use strict';
  Sunrise.Collections.Colorstops = Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage('sunrise-hues'),
    model: Sunrise.Models.Colorstop
  });
})();
