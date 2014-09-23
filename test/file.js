'use strict';

var should = require('should');

module.exports = function(){

  it('should return this fileName', function(){
    var site = require('../.')();
    should(site[0].getFileName()).equal(__filename);
  });

};
