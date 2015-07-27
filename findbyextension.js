var fs   = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {
  fs.readdir(directory, function readFileNames(err, list) {
    if (err) {
      return callback(err)
    } else {
      list = list.filter(function (file) {
        ext = path.extname(file).split('.')[1];
        return ext === extension
      });
      return callback(null, list)
    }
  });
}
