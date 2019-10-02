const http = require('http');
const fs = require('fs');

var server = http.createServer(function(request, response) {

  if (request.url === '/home' || request.url === '/') {
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });

    fs.createReadStream(__dirname + '/resources/read.html').pipe(response);
  } else if (request.url === '/contact') {
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });

    fs.createReadStream(__dirname + '/resources/contact.html').pipe(response);
  }
});

server.listen(3000, '127.0.0.1');
console.log('LISTENING');