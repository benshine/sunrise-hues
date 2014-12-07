/*global Sunrise, Backbone, JST*/

Sunrise.Views = Sunrise.Views || {};

(function () {
  'use strict';

  Sunrise.Views.SunriseAnimatedView = Backbone.View.extend({
    template: JST['app/scripts/templates/sunrise-animated-view.ejs'],
    tagName: 'div',
    el: '#animated-preview',
    className: '',
    events: {
      'click .animate-btn': 'animatePreview'
    },

    initialize: function () {
    },

    render: function () {
      this.$el.html(this.template());
    },

    animatePreview: function () {
      this.$('.modal-preview').show();
    }

  });

})();
