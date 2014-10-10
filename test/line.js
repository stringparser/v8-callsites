'use strict';

var should = require('should');

module.exports = function(){

  var calls = require('../.');
  var call = calls();

  it('should return the line number', function(){
    should(call[0].getLineNumber()).equal(11);
  });

};
