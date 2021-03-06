define(['jquery', 'bower/es6-shim/es6-shim'], function ($) {
  'use strict';

  return (function () {
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
        var data = {'on': on};
        if (color) {
          Object.assign(data, this.colorToHueHsv(color));
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
        var jqc = $.Color(color);

        return {
          'hue': Math.floor(65535 * jqc.hue() / 360),
          'sat': Math.floor(jqc.saturation() * 255),
          'bri': Math.floor(jqc.lightness() * 255)
        };
      }
    };
  }());
});
