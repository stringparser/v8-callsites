'use strict';

var type = require('utils-type');

exports = module.exports = sites;

function sites(frames, origin){

  var originIs = type(origin), framesIs = type(frames);
  var limit = Error.stackTraceLimit;
  var prepare = Error.prepareStackTrace;

  Error.stackTraceLimit = (
    framesIs.integer > 0 || framesIs.infinity ? frames : 1
  );

  Error.prepareStackTrace = function(err, stack){
    return stack;
  };

  var error = new Error();
  Error.captureStackTrace(error,
    framesIs.function || originIs.function || sites
  );

  var stack = error.stack;

  Error.stackTraceLimit = limit;
  Error.prepareStackTrace = prepare;

  return stack;
}
