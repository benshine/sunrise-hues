define(
  ['backbone',
    'backboneLocalStorage',
    'models/colorstop-model'],
  function (Backbone, LocalStorage, ColorstopModel) {

    var DEFAULT_SUNRISE = [
      { color: "#676de8", time: 10, id: 2},
      { color: "#ffb6c1", time: 20, id: 3},
      { color: "#f6fc9a", time: 40, id: 5}
    ];

    return Backbone.Collection.extend({
      localStorage: new LocalStorage('sunrise-hues'),
      model: ColorstopModel,

      resetToDefaults: function () {
        this.reset(DEFAULT_SUNRISE);
      }
    }
  );
});


