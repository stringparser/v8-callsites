'use strict';

var type = require('utils-type');

exports = module.exports = callsites;

var limit = Error.stackTraceLimit;
var trace = Error.prepareStackTrace;

function callsites(frames, origin){

  frames = type(frames); origin = type(origin);
  origin = frames.function || origin.function;
  frames = Math.abs(frames.integer) || frames.infinity || 1;

  Error.stackTraceLimit = origin ? frames : frames + 1;
  Error.prepareStackTrace = function(err, stack){ return stack; };

  var error = new Error();
  Error.captureStackTrace(error, origin || callsites);
  var stack = origin ? error.stack : error.stack.slice(1);

  Error.stackTraceLimit = limit;
  Error.prepareStackTrace = trace;

  return stack;
}
