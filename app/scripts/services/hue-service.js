var HueService = {
  username: 'newdeveloper',
  bridgeAddress: 'http://10.0.1.3',
  lights: [1, 2, 3],

  allOn: function (color) {
    this.lights.forEach(function (val) {
      this.toggleLight(val, true, color);
    }, this);
  },

  toggleLight: function (light, on, color) {
    var data = { "on" : on };
    if (color) {
      Object.assign(data, this.colorToHueHsv(color));

    };
    console.log(data);
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
    return this.bridgeAddress + '/api/' + this.username + '/' + path;
  },
  colorToHueHsv: function (color) {
    var hsv = tinycolor(color);

    return {
      "hue" : 65530 * hsv.h / 360,
      "sat": 255,
      "bri": 255
    }
  }
};
