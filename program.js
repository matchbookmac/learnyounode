var fs = require('fs');


// Challenge 3
file = fs.readFile(process.argv[2], 'utf8', function readArgvFile(err, data) {
  if (err) {
    console.error(err)
  } else {
    splitFile = data.split('\n');
    console.log(splitFile.length - 1);
  }
});

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
