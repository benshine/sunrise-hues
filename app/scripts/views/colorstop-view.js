/*global Sunrise, Backbone, JST*/

Sunrise.Views = Sunrise.Views || {};

(function () {
  'use strict';

  Sunrise.Views.Colorstop = Backbone.View.extend({
    template: JST['app/scripts/templates/colorstop.ejs'],
    tagName: 'div',
    id: '',
    className: '',

    events: {
      'click .lights': 'onLightsClick',
      'change input[type=color]': 'onColorInputChange'
    },

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    onLightsClick: function () {
      HueService.allOn(this.model.get('color'));
    },

    onColorInputChange: function (event) {
      this.model.set('color', event.target.value);
    }
  });
})();
