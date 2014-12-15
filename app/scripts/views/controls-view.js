/*global Sunrise, Backbone, JST*/

Sunrise.Views = Sunrise.Views || {};

(function () {
  'use strict';

  Sunrise.Views.Controls = Backbone.View.extend({
    template: JST['app/scripts/templates/controls.ejs'],
    el: "#main-controls",
    events: {
      'click .animate-btn': 'animatePreview',
      'click #reset-to-defaults': 'resetToDefaults',
      'click #clear': 'clear'
    },

    render: function () {
      this.$el.html(this.template());
    },

    animatePreview: function () {
      // TODO: delegate to sunrise animated view
    },

    resetToDefaults: function () {
      // TODO: delegate to colorstop-collection
    },

    clear: function () {
      // TODO: delegate to colorstop-collection
    }
  });
})();
