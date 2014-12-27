/*global define*/

define(['backbone', 'sunrise'], function (Backbone, Sunrise) {
  'use strict';

  Sunrise.Models.Colorstop = Backbone.Model.extend({
    defaults: {
      color: '#F88'
    }
  });

  return Sunrise.Models.Colorstop;
});
