# v8-callsites [<img alt="progressed.io" src="http://progressed.io/bar/99" align="right"/>](https://github.com/fehmicansaglam/progressed.io)

[<img alt="build" src="http://img.shields.io/travis/stringparser/v8-callsites/master.svg?style=flat-square" align="left"/>](https://travis-ci.org/stringparser/v8-callsites/builds)
[<img alt="NPM version" src="http://img.shields.io/npm/v/v8-callsites.svg?style=flat-square" align="right"/>](http://www.npmjs.org/package/v8-callsites)
<br>

[V8 stacktrace API](https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi) callsites with knobs.

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

## why

You would like to set how many frames are recorded (`Error.stackTraceLimit`) and from which function the stack should be traced back (`Error.captureStackTrace`).

By default two frames are recorded, though you can even lower it to one providing a function from which start.

### inspirated by

It serves for the same use cases implemented on this cool modules

 - [visionmedia `callsite`](https://github.com/visionmedia/callsite)
 - [sindresorhus `callsites`](https://github.com/sindresorhus/callsites)

I've been using those a lot.

### api

`require('v8-callsites')([frames, origin])`

 - `frames` if specified should be bigger than `0` and `integer`.
 - `origin` if specified should be a function.
 - if no arguments, the default number of `frames` is `1` and the `origin` is the module itself, that will make the first element of the `callsites` array to be the `callee`.

See also the [avaliable methods](https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi) of the stack trace api like:
 - `getLineNumber`
 - `getFileName`
 - `getEvalOrigin`
 - etc.

### license

[<img alt="LICENSE" src="http://img.shields.io/npm/l/v8-callsites.svg?style=flat-square"/>](http://opensource.org/licenses/MIT)
