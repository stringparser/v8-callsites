'use strict';

var stack = require('./.');

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
  
  stack(3, bar).forEach(function(frame){
    console.log(
      frame.getFunctionName(), '->', frame+''
    );
  });
}
