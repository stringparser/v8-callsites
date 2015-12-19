'use strict';

var type = require('utils-type');

exports = module.exports = callsites;

var limit = Error.stackTraceLimit;
var trace = Error.prepareStackTrace;

function callsites(frames, origin){
  origin = type(origin || frames).function;
  frames = Math.abs(type(frames).number) || 1;

  Error.stackTraceLimit = origin ? frames : frames + 1;
  Error.prepareStackTrace = function(_, stack){ return stack; };

  var error = new Error();
  Error.captureStackTrace(error, origin || callsites);
  var stack = origin ? error.stack : error.stack.slice(1);

  Error.stackTraceLimit = limit;
  Error.prepareStackTrace = trace;

  return stack;
}
