# v8-callsites [![NPM version][npm-badge]][npm-link] [![downloads][npm-downloads-badge]][npm-link]

[![build][travis-badge]][travis-link]

[V8 stacktrace API](https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi) callsites with knobs.

## install

    npm install --save v8-callsites

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

  var barStackFrombaz = stack(3, bar);
  // bar `stack` from baz with only 3 frames

  barstackFrombaz.forEach(function(frame){
    console.log(
      frame.getFunctionName(), '->', frame+''
    );
  });
}

```

### documentation

`require('v8-callsites')([frames, origin])`

 - `frames` if specified should be an `integer` bigger than `0` or `Infinity`.
 - `origin` if specified should be a function.
 - if no arguments, the default number of `frames` is `2` so the `origin` is the module itself. The returned stack is sliced by one.

See also the [avaliable methods](https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi) of the stack trace api like:
 - `getLineNumber`
 - `getFileName`
 - `getEvalOrigin`
 - etc.

## why

You would like to set how many frames are recorded (`Error.stackTraceLimit`) and from which function the stack should be traced back (`Error.captureStackTrace`).

By default two frames are recorded, though you can even lower it to one providing a function from which start.

### inspirated by

It serves for the same use cases implemented on this cool modules

 - [visionmedia `callsite`](https://github.com/visionmedia/callsite)
 - [sindresorhus `callsites`](https://github.com/sindresorhus/callsites)

I've been using those a lot.

## test

    npm test

### license

[![LICENSE](http://img.shields.io/npm/l/v8-callsites.svg?style=flat-square)](http://opensource.org/licenses/MIT)

<!-- links -->
[npm-link]: http://www.npmjs.org/package/v8-callsites
[npm-badge]: http://img.shields.io/npm/v/v8-callsites.svg?style=flat-square

[npm-downloads-badge]: http://img.shields.io/npm/dm/v8-callsites.svg?style=flat-square

[travis-link]: https://travis-ci.org/stringparser/v8-callsites/builds
[travis-badge]: http://img.shields.io/travis/stringparser/v8-callsites/master.svg?style=flat-square
