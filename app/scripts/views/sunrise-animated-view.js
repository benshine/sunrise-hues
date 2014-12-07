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
      this.$preview = $('.modal-preview');
    },

    animatePreview: function () {
      this.$('.modal-preview').show();
      var duration = Sunrise.Views.SunriseAnimatedView.PREVIEW_DURATION; // milliseconds
      if (this.collection.length === 0) {
        console.log("nothing to animate");
        return;
      }

      var stepDuration = duration / this.collection.length;
      var $preview = this.$preview;
      $preview.css('background-color', this.collection.at(0).get('color'));
      $preview.show();

      this.collection.forEach(function (el, index) {
        var color = el.get('color');
        window.setTimeout(function() {
          $preview.animate( { backgroundColor: color }, stepDuration);
        }, index * stepDuration);
      });

      window.setTimeout(function () {
        $preview.hide();
      }, duration + 3000)
      // TODO: add replay & dismiss buttons
    }

  }, {
    PREVIEW_DURATION: 1000
  });

})();
