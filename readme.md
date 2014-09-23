# v8-callsites [<img alt="progressed.io" src="http://progressed.io/bar/80" align="right"/>](https://github.com/fehmicansaglam/progressed.io)

[<img alt="build" src="http://img.shields.io/travis/stringparser/v8-callsites/master.svg?style=flat-square" align="left"/>](https://travis-ci.org/stringparser/v8-callsites/builds)
[<img alt="NPM version" src="http://img.shields.io/npm/v/v8-callsites.svg?style=flat-square" align="right"/>](http://www.npmjs.org/package/v8-callsites)

[V8 stacktrace API](https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi) callsites with knobs.

## why

Allow to specify how many frames are recorded and what is the function what will be taked as the start of the stack.

Is the same use case implemented on this cool modules

 - [`callsite`](https://github.com/visionmedia/callsite)
 - [`callsites`](https://github.com/sindresorhus/callsites)

But a little lithgter when recording frames. By the default only one frame is recorded and you can specify the `origin` of stack trace for the `callsite` generation.

## usage

Same as the mentioned modules above. Plus

```js
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

  stack(3, bar).forEach(function(frame){
    console.log(
      frame.getFunctionName(),
      '->', frame+''
    );
  });
}

```
