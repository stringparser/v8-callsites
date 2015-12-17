'use strict';

var fs = require('fs');
var path = require('path');

var testFiles = fs.readdirSync('./test');

testFiles.forEach(function(name){
  if(name === 'index.js'){ return; }
  name = path.basename(name, path.extname(name));
  describe(name, function(){
    require('./' + name)();  // line 12!
  });
});
