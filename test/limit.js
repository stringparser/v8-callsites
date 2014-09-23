'use strict';

var should = require('should');
var site = require('../.');

module.exports = function(){

  it('should retrieve sites of length 1 as default', function(){
    var sites = site();
    should(sites.length).equal(1);
  });

  it('should have lenght equal to limit if specified', function(){
    var sites = site(5);
    should(sites.length).equal(5);
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
