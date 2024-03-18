const http = require('http');
const fs = require('fs');
const hostname = '0.0.0.0';
const port = 6001;

const server = http.createServer((req, res) => {
  fs.appendFile('/app/logs/log.txt', req.url + '\n', console.error);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('ok\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



