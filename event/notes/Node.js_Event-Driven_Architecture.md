# Understanding Node.js Event-Driven Architecture

## callback
https://medium.freecodecamp.org/understanding-node-js-event-driven-architecture-223292fcbc2d

> The original way Node handled asynchronous events was with callback

>Callbacks are basically just functions that you pass to other functions.

**It’s important to understand that callbacks do not indicate an asynchronous call in the code. A function can call the callback both synchronously and asynchronously.**

> The callback has an **error-first** argument err that’s nullable and we pass the callback as the **last** argument for the host function.


## Promise

> **Promises** can be an alternative to callbacks for asynchronous APIs. Instead of passing a callback as an argument and handling the error in the same place, a promise object allows us to handle success and error cases separately and it also allows us to chain multiple asynchronous calls instead of nesting them.


### Consuming promises with `async/await`

> A more recent alternative to working with async code is to use the `async` function, which allows us to treat async code as if it was synchronous, making it a lot more readable overall.

example:
``` javascript
async function countOdd () {
  try {
    const lines = await readFileAsArray('./numbers');
    const numbers = lines.map(Number);
    const oddCount = numbers.filter(n => n%2 === 1).length;
    console.log('Odd numbers count:', oddCount);
  } catch(err) {
    console.error(err);
  }
}
countOdd();
```

> We can use the `async/await` feature with any function that supports a **promise interface**. However, we can’t use it with **callback-style** async functions (like setTimeout for example).



## The `EventEmitter` Module

> The `EventEmitter` is a module that facilitates **communication** between objects in Node. `EventEmitter` is at the **core of Node asynchronous event-driven architecture**. Many of Node’s built-in modules inherit from EventEmitter.

> The concept is simple: emitter objects emit named events that cause previously registered listeners to be called.

``` javascript
// step 1
class MyEmitter extends EventEmitter {

}

// step 2
const myEmitter = new MyEmitter();

// step 3
myEmitter.emit('something-happened');

```

### Events !== Asynchrony

> Just like plain-old callbacks, do not assume that events mean synchronous or asynchronous code.

### Asynchronous Events
