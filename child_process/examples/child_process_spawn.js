const { spawn } = require('child_process');

// example 1
// main process stdin is readable stream and child process stdin is writeable stream
const wc1 = spawn('wc');

process.stdin.pipe(wc1.stdin);

wc1.stdout.on('data', (data) => {
  console.log(`child stdout: \n${data}`);
});


// example 2
const find = spawn('find', ['.', '-type', 'f']);
const wc2 = spawn('wc', ['-l']);

find.stdout.pipe(wc2.stdin);

wc2.stdout.on('data', (data) => {
  console.log(`Number of files ${data}`);
});


// example 3
// run this example and check child process using `ps -ef | grep timer` command
const child = spawn('node', ['timer.js'], {
  detached: true,
  stdio: 'ignore'
});

child.unref();



