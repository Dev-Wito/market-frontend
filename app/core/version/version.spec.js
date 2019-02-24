'use strict';

describe('AppMarket.version module', function() {
  beforeEach(module('AppMarket.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
