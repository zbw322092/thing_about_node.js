/* it is a normal version http server. In this server, we 
do not create a child process for the time consuming longComputation
function. When we request '/compute' path, this computation will
take a long time to response result. Before the result returned, other
request will not be processed, since the main process is blocking.
*/
const http = require('http');

const longComputation = () => {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
};

const server = http.createServer();

server.on('request', (req, res) => {
  
  if (req.url === '/compute') {
    const sum = longComputation();
    return res.end(`Sum is ${sum}`);
  } else {
    res.end('OK');
  }

});

server.listen('8888', () => {
  console.log('Server is listening on port 8888');
});
