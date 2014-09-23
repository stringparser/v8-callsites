'use strict';

var should = require('should');

module.exports = function(){

  it('should return the line number', function(){
    var site = require('../.')();
    should(site[0].getLineNumber()).equal(8);
  });

};
