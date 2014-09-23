# v8-callsites [<img alt="progressed.io" src="http://progressed.io/bar/80" align="right"/>](https://github.com/fehmicansaglam/progressed.io)

[<img alt="build" src="http://img.shields.io/travis/stringparser/v8-callsites/master.svg?style=flat-square" align="left"/>](https://travis-ci.org/stringparser/v8-callsites/builds)
[<img alt="NPM version" src="http://img.shields.io/npm/v/v8-callsites.svg?style=flat-square" align="right"/>](http://www.npmjs.org/package/v8-callsites)
<br>

[V8 stacktrace API](https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi) callsites with knobs.

## why

Allow to specify how many frames are recorded and which function should be taken as the for the first frame of the stack.

Is the same use case implemented on this cool modules

 - [`callsite`](https://github.com/visionmedia/callsite)
 - [`callsites`](https://github.com/sindresorhus/callsites)

But a little lighter regarding how frames are recorded. By the default only one frame is recorded and you can specify the `origin` of stack trace for the `callsite` generation.

## usage

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

  var barstackFrombaz = stack(3, bar);

  barstackFrombaz.forEach(function(frame){
    console.log(
      frame.getFunctionName(), '->', frame+''
    );
  });
}

```

### api

`require('v8-callsites')([frames, origin])`

 - `frames`, if specified should be bigger than `0` and be `integer`.
 - `origin`, if specified should be a function.
 - when there is no arguments, the default number of `frames` is `1`.

See also the [avaliable methods](https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi) of the stack trace api like:
 - `getLineNumber`
 - `getFileName`
 - `getEvalOrigin`
 - etc.

### license

[<img alt="LICENSE" src="http://img.shields.io/npm/l/v8-callsites.svg?style=flat-square"/>](http://opensource.org/licenses/MIT)
