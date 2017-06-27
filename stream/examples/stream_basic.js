const Readable = require('stream').Readable;

// example 1
let rs = new Readable();

rs.push('hello ');
rs.push('world!\n');
rs.push(null);

rs.pipe(process.stdout);


// example 2
let rs2 = new Readable();
let index = 1;
rs2._read = () => {
  if (index > 1000) return rs2.push(null);

  setTimeout(() => {
    rs2.push(Buffer.from(index++ + '\n'));
  }, 100);
}

rs2.pipe(process.stdout);

process.on('exit', () => {
  console.log('\n_read has been called ', index - 1, ' times');
});
process.stdout.on('error', process.exit);