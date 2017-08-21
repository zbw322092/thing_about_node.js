const url = require('url');

let result = url.format({
  protocol: 'http',
  // host equals to hostname + port
  // host: 'www.example.com:3000'
  hostname: 'www.example.com',
  port: 3000,
  pathname: 'a/b/c',
  search: 'page=1',
  hash: 'index'
});

console.log(result); // http://www.example.com:3000/a/b/c?page=1#index

const gUrl = 'https://www.google.com/search?q=google&oq=goo&aqs=chrome.0.0l3j69i65l3.2235j0j7&sourceid=chrome&ie=UTF-8#example_hash';
let result2 = url.parse(gUrl);
let result3 = url.parse(gUrl, true)

console.log(result2);
console.log(result3);