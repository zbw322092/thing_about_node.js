// example 1
console.log(process.argv);

/*
execute `node process.argv.js -a kkk mmm -l sss`
result:

[ '/usr/local/bin/node',
  '/Users/zhongbowen/Documents/Personal/thing_about_node.js/process/examples/process.argv.js',
  '-a',
  'kkk',
  'mmm',
  '-l',
  'sss' ]
*/


// example 2
process.argv.forEach((value, index) => {
  console.log(`${index}: ${value}`);
});

/*
execute `node process.argv.js -a kkk mmm -l sss`
result:

0: /usr/local/bin/node
1: /Users/zhongbowen/Documents/Personal/thing_about_node.js/process/examples/process.argv.js
2: -a
3: kkk
4: mmm
5: -l
6: sss

execute `node process.argv.js -a=kkk sss lll=ooo`
0: /usr/local/bin/node
1: /Users/zhongbowen/Documents/Personal/thing_about_node.js/process/examples/process.argv.js
2: -a=kkk
3: sss
4: lll=ooo
*/

// example 3
console.log(process.argv0);
/*
execute `node process.argv.js -s=111`
result:
node

execute `/usr/local/bin/node process.argv.js`
result:
/usr/local/bin/node
*/


// example 4
console.log(process.execPath);
/*
execute `node process.argv.js`
result:
/usr/local/bin/node
*/