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
      'click .animate-btn': 'animatePreview',
      'click .replay': 'animatePreview',
      'click .dismiss': 'dismissPreview'
    },

    initialize: function () {
    },

    render: function () {
      this.$el.html(this.template());
      this.$preview = this.$('.modal-preview');
      this.$backdrop = this.$('.modal-backdrop');
      this.$controls = this.$('.controls');
      console.log("got controls: ", this.$controls);
    },

    animatePreview: function () {

      var duration = Sunrise.Views.SunriseAnimatedView.PREVIEW_DURATION; // milliseconds
      if (this.collection.length === 0) {
        console.log("nothing to animate");
        return;
      }

      this.$backdrop.show();
      var stepDuration = duration / this.collection.length;
      var $preview = this.$preview;
      $preview.css('background-color', this.collection.at(0).get('color'));
      $preview.show();

      this.collection.forEach(function (el, index) {
        var color = el.get('color');
        // TODO: obey stated timeouts
        window.setTimeout(function() {
          $preview.animate( { backgroundColor: color }, stepDuration);
        }, index * stepDuration);
      });

      window.setTimeout(function () {
        this.$controls.show();
      }.bind(this), duration + 500);
    },

    dismissPreview: function () {
      this.$backdrop.hide();
    }

  }, {
    PREVIEW_DURATION: 1000
  });

})();
