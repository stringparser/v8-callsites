'use strict';

var type = require('utils-type');

exports = module.exports = sites;

function sites(frames, origin){

  var originIs = type(origin), framesIs = type(frames);
  var limit = Error.stackTraceLimit;
  var prepare = Error.prepareStackTrace;

  origin = framesIs.function || originIs.function || null;
  frames = framesIs.integer > 0 || framesIs.infinity ? frames : 1;

  Error.stackTraceLimit = origin ? frames : frames + 1;

  Error.prepareStackTrace = function(err, stack){
    return stack;
  };

  var error = new Error();
  Error.captureStackTrace(error, origin || sites);

  var stack = origin ? error.stack : error.stack.slice(1);

  Error.stackTraceLimit = limit;
  Error.prepareStackTrace = prepare;

  return stack;
}
