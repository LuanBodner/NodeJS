const fs = require('fs');

// var readme = fs.readFileSync('readme.txt', 'utf8');
// fs.writeFileSync('writeme.txt', readme);

// fs.mkdir('StuffsAndThings', function() {
//   fs.readFile('readme.txt', 'utf8', function(err, data) {
//     fs.writeFile('./StuffsAndThings/writeme.txt', data, function() {});
//   });
// });

fs.unlink('./StuffsAndThings/writeme.txt', function() {
  fs.rmdir('StuffsAndThings', function() {});
});