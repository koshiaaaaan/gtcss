var path = require('path');
var root = path.resolve(__dirname + '/..');

module.exports = {
  root        : root,
  modules     : root + '/node_modules',
  src         : root + '/resources_src',
  dest        : root + '/resources',
  sassOptions : {
    includePaths: [ 'node_modules/' ],
    outputStyle : 'expanded'
  }
}
