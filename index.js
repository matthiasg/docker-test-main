const http = require('http');
const lib = require('docker-test-library');

const hostname = '0.0.0.0';
const port = 1337;

http.createServer((req, res) => {
  console.log('got request');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello '+ lib() + '\n' ) ;
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
