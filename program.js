var fs   = require('fs');
var path = require('path');
var http = require('http');

// Challenge 9
var
  urls = process.argv.slice(2),
  count = 0,
  responses = []

function printResults () {
  if (count === urls.length) {
    return console.log(responses.join('\n'));
  }
}

function httpGet (index) {
  http.get(urls[index], function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      responses[index] += data;
    });

    response.on('end', function () {
      count++
      printResults();
    });

  }).on('error', function (err) {
    return console.error("Got error: " + err.message);
  });
}

for (var i = 0; i < urls.length; i++) {
  responses[i] = '';
  httpGet(i);
}

// Challenge 7
// var bl   = require('bl');
// var url = process.argv[2];
// http.get(url, function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error("Got error: " + err.message);
//     } else {
//       data = data.toString();
//       console.log(data.length);
//       console.log(data);
//     }
//   }));
// });

// Challenge 7 without library
// var url = process.argv[2];
// http.get(url, function (response) {
//   response.setEncoding('utf8');
//   body = [];
//
//   response.on('data', function (data) {
//     body.push(data);
//   });
//
//   response.on('end', function () {
//     console.log(body.join('').length);
//     console.log(body.join(''));
//   });
//
// }).on('error', function (err) {
//   return console.error("Got error: " + err.message);
// })

// Challenge 6
// var url = process.argv[2];
// http.get(url, function (response) {
//   response.setEncoding('utf8');
//   response.on('data', function (data) {
//     console.log(data);
//   })
// }).on('error', function (err) {
//   console.log("Got error: " + err.message);
// })

// Challenge 5
// var findByExtension = require('./findbyextension');
// var directory = path.resolve(process.argv[2])
// var extension = process.argv[3]
//
// findByExtension(directory, extension, function (err, files) {
//   if (err) {
//     return console.error(err);
//   } else {
//     files.forEach(function (file) {
//       console.log(file);
//     });
//   }
// });

// Challenge 4
// var directory = path.resolve(process.argv[2])
// var extension = process.argv[3]
//
// fs.readdir(directory, function readFileNames(err, list) {
//   if (err) {
//     console.error(err)
//   } else {
//     list.forEach(function (file) {
//       ext = path.extname(file).split('.')[1];
//       if (ext === extension) {
//         console.log(file);
//       }
//     });
//   }
// });

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
