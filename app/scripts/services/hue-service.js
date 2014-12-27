// TODO: this needs jquery-color to really work
define(['jquery', 'bower/es6-shim/es6-shim'], function ($) {

  return function () {
    var username = 'newdeveloper';
    var bridgeAddress = 'http://10.0.1.3';
    var lights = [1, 2, 3];

    return {
      allOn: function (color) {
        lights.forEach(function (val) {
          this.toggleLight(val, true, color);
        }, this);
      },

      toggleLight: function (light, on, color) {
        var data = {"on": on};
        if (color) {
          var asHsv = this.colorToHueHsv(color);
          Object.assign(data, asHsv);
        }
        this.put(this.buildUrl('lights/' + light + '/state'), JSON.stringify(data));
      },

      put: function (url, data) {
        return $.ajax(
          url,
          {
            type: 'PUT',
            data: data,
            processData: false
          }
        );
      },

      buildUrl: function (path) {
        return bridgeAddress + '/api/' + username + '/' + path;
      },

      colorToHueHsv: function (color) {
        // TODO: make jquery-color work in requirejs!
        // var jqc = $.Color(color);
        // Until I fix jquery-color in requirejs, just pretend
        // all colors are something hardcoded
        var jqc = {
          hue: function () { return 0.5; },
          saturation: function () { return 0.5; },
          lightness: function () { return 0.5; }
        };

        return {
          "hue": Math.floor(65535 * jqc.hue() / 360),
          "sat": Math.floor(jqc.saturation() * 255),
          "bri": Math.floor(jqc.lightness() * 255)
        }
      }
    }
  }();
});
