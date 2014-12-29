/* global describe, it */

(function () {
  'use strict';

  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {
        expect(true).toBeTruthy();
      });

      it('should notice that this file has changed', function () {
        expect(5).toBe(5);
      });
    });
  });
})();
