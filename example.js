'use strict';

var stack = require('v8-callsites');

origin();

function origin(){
  foo();
}

function foo(){
  bar();
}

function bar(){
  baz();
}

function baz(){

  var barstackFrombaz = stack(3, bar);

  barstackFrombaz.forEach(function(frame){
    console.log(
      frame.getFunctionName(), '->', frame+''
    );
  });
}
