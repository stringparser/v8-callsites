'use strict';

var path = require('path');
var should = require('should');

module.exports = function(){

  var calls = require('../.');
  var call = calls();

  it('should return test.main fileName', function(){
    should(call[0].getFileName())
      .equal(
        __filename.replace(
          path.basename(__filename), 'test.main.js'
        )
      );
  });

};
