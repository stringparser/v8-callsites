'use strict';

var should = require('should');

module.exports = function(){


  var sites = require('../.');

  it('should start from the caller', function origin(){

    foo();
    function foo(){
      var stack = sites();
      should(stack[0].getFunction()).equal(origin);
    }
  });

  it('should return an array of callsites', function origin(){

    foo();
    function foo() {
      bar();
    }

    function bar() {
      baz();
    }

    function baz() {
      var stack = sites(3);
      should(stack[0].getFunction()).equal(bar);
      should(stack[1].getFunction()).equal(foo);
      should(stack[2].getFunction()).equal(origin);
    }
  });

  it('origin of callsites can be adjusted', function origin(){

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

      should(foostack[0].getFunctionName()).equal('origin');
      should(barstack[0].getFunctionName()).equal('foo');
      should(bazstack[0].getFunctionName()).equal('bar');

    }
  });

};
