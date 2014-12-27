/*global Sunrise, Backbone*/


define(
  ['backbone',
    'backboneLocalStorage',
    'sunrise',
    'models/colorstop-model'],
  function (Backbone, LocalStorage, Sunrise, ColorstopModel) {
  Sunrise.Collections.Colorstops = Backbone.Collection.extend({
      localStorage: new LocalStorage('sunrise-hues'),
      model: ColorstopModel,

      resetToDefaults: function () {
        this.reset(Sunrise.Collections.Colorstops.DEFAULT_SUNRISE);
      }
    }, {
      DEFAULT_SUNRISE:
        [
          { color: "#676de8", time: 10, id: 2},
          { color: "#ffb6c1", time: 20, id: 3},
          { color: "#f6fc9a", time: 40, id: 5}
        ]
    }
  );

  return Sunrise.Collections.Colorstops;
});


