// var fs = require('fs');

// file = fs.readFileSync(argv[2]);

function addArgv(argvs) {
  var sum = 0;
  for (var i = 2; i < argvs.length; i++) {
    sum += Number(argvs[i]);
  }
  return sum;
}

console.log(addArgv(process.argv));
