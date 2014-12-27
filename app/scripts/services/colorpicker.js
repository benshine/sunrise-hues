define(['jquery', 'spectrum'], function () {

  var Colorpicker = {
    buildColorpicker: function ($el) {
      return $el.spectrum({
        showPalette: true,
        showSelectionPalette: true,
        localStorageKey: 'openben.net.sunrise.1',
        maxSelectionSize: 9
      });
    }
  };
  return Colorpicker;
});
