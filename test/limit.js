'use strict';

var should = require('should');

module.exports = function(){

  var calls = require('../.');


  it('should retrieve stacks of length 1 as default', function(){
    var call = calls();
    should(call.length).equal(1);
  });

  it('should have lenght equal to limit if specified', function(){
    var call = calls(5);
    should(call.length).equal(5);
  });

  it('should restore the stackTraceLimit', function(){

    var limit = Error.stackTraceLimit;
    Error.stackTraceLimit = 13;
    should(Error.stackTraceLimit).equal(13);
    Error.stackTraceLimit = limit;
    should(Error.stackTraceLimit).equal(Infinity);
    // ^ `mocha` sets the limit to Infinity
  });

};
