/*
It is a version which we create a new child process for longComputation
function.
*/

const http = require('http');
const { fork } = require('child_process');

const server = http.createServer();

server.on('request', (req, res) => {

  if (req.url === '/compute') {
    const compute = fork('long_computation.js');

    compute.send('start');
    compute.on('message', (msg) => {
      res.end(`The computed result is: ${msg}`);
    });
    
  } else {
    res.end('It is OK');
  }

});

server.listen(9999, () => {
  console.log('Server is listening on port 9999');
});