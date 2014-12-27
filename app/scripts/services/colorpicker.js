define(['jquery', 'spectrum'], function () {

 return function ($el) {
    return $el.spectrum({
      showPalette: true,
      showSelectionPalette: true,
      localStorageKey: 'openben.net.sunrise.1',
      maxSelectionSize: 9
    });
  };
});
