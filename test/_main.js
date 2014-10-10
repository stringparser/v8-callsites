'use strict';

var fs = require('fs');
var path = require('path');

var testFiles = fs.readdirSync('./test');

testFiles.slice(1).forEach(function(name){
  name = path.basename(name, path.extname(name));
  describe(name, function(){
    require('./'+name)();  // line 11!
  });
});
