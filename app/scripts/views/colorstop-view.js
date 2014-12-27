

define(['sunrise', 'backbone', 'jst', 'services/colorpicker'],
  function (Sunrise, Backbone, JST, Colorpicker) {
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
      this.$colorpicker = Colorpicker.buildColorpicker(this.$('.colorpicker'));
      return this;
    },

    onLightsClick: function () {
      HueService.allOn(this.model.get('color'));
    },

    onColorInputChange: function () {
      var color = this.$colorpicker.spectrum("get").toHexString();
      this.model.set('color', color);
    }
  });

    return Sunrise.Views.Colorstop;
});
