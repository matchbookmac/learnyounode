var fs   = require('fs');
var path = require('path');

// Challenge 4
var directory = path.resolve(process.argv[2])
var extension = process.argv[3]

fs.readdir(directory, function readFileNames(err, list) {
  if (err) {
    console.error(err)
  } else {
    list.forEach(function (file) {
      ext = path.extname(file).split('.')[1];
      if (ext === extension) {
        console.log(file);
      }
    });
  }
});

// Challenge 3
// file = fs.readFile(process.argv[2], 'utf8', function readArgvFile(err, data) {
//   if (err) {
//     console.error(err)
//   } else {
//     splitFile = data.split('\n');
//     console.log(splitFile.length - 1);
//   }
// });

// Challenge 2
// file = fs.readFileSync(process.argv[2]).toString();
//
// splitFile = file.split('\n');
//
// console.log(splitFile.length - 1);

// Challenge 1
// function addArgv(argvs) {
//   var sum = 0;
//   for (var i = 2; i < argvs.length; i++) {
//     sum += Number(argvs[i]);
//   }
//   return sum;
// }
//
// console.log(addArgv(process.argv));
