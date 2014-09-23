'use strict';

var should = require('should');

module.exports = function(){


  var sites = require('../.');


  it('returns array of callsites', function(){

    foo();
    function foo() {
      bar();
    }

    function bar() {
      baz();
    }

    function baz() {
      var stack = sites(3);
      should(stack[0].getLineNumber()).equal(23);
      should(stack[1].getLineNumber()).equal(19);
      should(stack[2].getLineNumber()).equal(15);
    }
  });

  it('origin of stack can be changed', function origin(){

    foo();
    function foo(){
      bar();
    }

    function bar(){
      baz();
    }

    function baz(){
      var foostack = sites(foo);
      var barstack = sites(bar);
      var bazstack = sites(baz);

      should(foostack[0].getLineNumber()).equal(32);
      should(barstack[0].getLineNumber()).equal(34);
      should(bazstack[0].getLineNumber()).equal(38);

    }
  });

};
