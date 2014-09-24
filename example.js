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

  var barStackFrombaz = stack(3, bar);
  // bar `stack` from baz with only 3 frames

  barStackFrombaz.forEach(function(frame){
    console.log(
      frame.getFunctionName(), '->', frame+''
    );
  });
}
