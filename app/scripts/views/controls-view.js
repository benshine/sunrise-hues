/*global Sunrise, Backbone, JST*/

Sunrise.Views = Sunrise.Views || {};

(function () {
  'use strict';

  if (typeof(Sunrise.Views.Controls = Backbone.View.extend({
      template: JST['app/scripts/templates/controls.ejs'],
      el: "#main-controls",
      events: {
        'click .animate-btn': 'animatePreview',
        'click #reset-to-defaults': 'resetToDefaults',
        'click #clear': 'clear'
      },

      initialize: function (options) {
        this.animatedView = options.animatedView;
      },

      render: function () {
        this.$el.html(this.template());
      },

      animatePreview: function () {
        this.animatedView.animatePreview();
      },

      resetToDefaults: function () {
        this.collection.resetToDefaults();
      },

      clear: function () {
        this.collection.reset();
      }
    })) !== "undefined") {

  }
})();
