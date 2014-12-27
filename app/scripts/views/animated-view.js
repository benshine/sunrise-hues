define(['backbone', 'jst', 'bower/jquery-color/jquery.color'], function(Backbone, JST, $) {
  var DWELL_DURATION = 500; // milliseconds

  return Backbone.View.extend({
    template: JST['app/scripts/templates/sunrise-animated-view.ejs'],
    tagName: 'div',
    el: '#animated-preview',
    className: '',
    events: {
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
    },

    animatePreview: function () {

      if (this.collection.length === 0) {
        return;
      }

      this.$backdrop.show();
      var $preview = this.$preview;
      $preview.css('background-color', this.collection.at(0).get('color'));
      $preview.show();

      var previousAnimationDescriptor = {
        startTime: 0,
        transitionDuration: 0,
        doneTime: DWELL_DURATION
      };

      this.collection.forEach(function (el, index) {
        var color = el.get('color');
        var animationDescriptor = this.animationDescriptorForStep(
          previousAnimationDescriptor, index, DWELL_DURATION);
        window.setTimeout(function() {
          $preview.animate( { backgroundColor: color }, animationDescriptor.transitionDuration);
        }, animationDescriptor.startTime);

        previousAnimationDescriptor = animationDescriptor;
      }, this);

      window.setTimeout(function () {
        this.$controls.show();
      }.bind(this), previousAnimationDescriptor.doneTime + 500);
    },

    animationDescriptorForStep: function (previous, index, dwell) {
      var startTime = previous.doneTime;

      var transitionDuration = 500;
      return {
        startTime: startTime,
        transitionDuration: transitionDuration,
        doneTime: startTime + dwell + transitionDuration
      }
    },

    dismissPreview: function () {
      this.$backdrop.hide();
    }
  });
});
