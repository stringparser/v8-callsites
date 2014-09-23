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
      should(stack[0].fun).equal(baz);
      should(stack[1].fun).equal(bar);
      should(stack[2].fun).equal(foo);
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

      should(foostack[0].getLineNumber()).equal(31);
      should(foostack[0].fun).equal(origin);

      should(barstack[0].getLineNumber()).equal(33);
      should(barstack[0].fun).equal(foo);

      should(bazstack[0].getLineNumber()).equal(37);
      should(bazstack[0].fun).equal(bar);

    }
  });

  it('inception', function(){

    var stack = sites();

    var index = 0, last;
    while(stack[0]){
      stack = sites(Infinity, stack[index].fun);
      last = stack[0] ? stack[0] : last;
      index++;
    }

    should(index).be.below(10);
    should(
      last.receiver.process.mainModule.children
        .filter(function(child){
          return child.id === require.resolve('mocha');
        })[0].id
    ).match(/mocha\/index\.js$/);
  });
};
