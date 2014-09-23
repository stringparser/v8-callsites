'use strict';

var fs = require('fs');
var path = require('path');

var testFiles = fs.readdirSync('./test');

testFiles.splice(
  testFiles.indexOf(path.basename(__filename))
);

testFiles.forEach(function(name){

  name = path.basename(name, path.extname(name));
  describe(name, function(){
    require('./'+name)();  // line 16!
  });
});
