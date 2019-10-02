const http = require('http');
const fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/resources/stream.txt', 'utf8');

myReadStream.on('data', function(chunk) {
  console.log('new chunk received:');
  console.log(chunk);
});



// var server = http.createServer(function(req, res) {
//
//   console.log('request was made')
//   res.writeHead(200, {
//     'Content-Type': 'text/plain'
//   });
//
//   res.end('Sup nibbas');
// });
//
// server.listen(3000, '127.0.0.1');
// console.log('LISTENING');