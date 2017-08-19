const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/sync_file') {
    fs.readFile('./blocking/blocking.html', (err, data) => {
      if(err){
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`);
      } else {
        // if the file is found, set Content-type and send data
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.end(data);
      }
    });
  } else if (req.url === '/sync') {
    setTimeout(() => {
      res.end('Sync Here');
    }, 6000);
  }
});

server.listen(9999, () => {
  console.log('server is listening on port 9999');
});