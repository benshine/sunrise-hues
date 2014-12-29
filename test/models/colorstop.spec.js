define(['models/colorstop-model'], function (ColorstopModel) {
  describe('ColorstopModel', function () {

    it('has a default color', function () {
      var model = new ColorstopModel();
      expect(model.get('color')).toBeDefined();
    });

    it('retains the color passed in', function () {
      var reddish = '#C33';
      var model = new ColorstopModel( { color: reddish });
      expect(model.get('color')).toBe(reddish);
    });
  });
});
