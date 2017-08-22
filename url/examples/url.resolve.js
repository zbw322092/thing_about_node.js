// https://nodejs.org/dist/latest-v8.x/docs/api/url.html#url_url_resolve_from_to

const url = require('url');

const result1 = url.resolve('/a/b/c', 'd');
const result2 = url.resolve('/a/b/c', '/d');
const result3 = url.resolve('/a/b/c', './d');
const result4 = url.resolve('/a/b/c', '../d');
const result5 = url.resolve('http://example.com/one', '/two');
const result6 = url.resolve('http://example.com/one/', '/two');
const result7 = url.resolve('http://example.com', '/two');
const result8 = url.resolve('http://example.com', 'two');
const result9 = url.resolve('http://example.com/one/two', '../three');


console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);
console.log(result9);