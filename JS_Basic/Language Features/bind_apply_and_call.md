# bind apply and call methods in Javascript

`bind`, `apply` and `call` are three methods defined on `Function.prototype`. These three methods work similarily and they are all work closely with `this` and context.

## Definitions
Actually, MDN has stated the definition of `bind`, `apply` and `call` methods fairly clear, we quote those definitions here with bold keywords firstly and demonstrate them by examples later.

[`bind()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind):
> The `bind()` method **creates a new function** that, **when called**, has **its `this` keyword set to the provided value**, with a given sequence of arguments preceding any provided when the new function is called.

[`apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
> The `apply()` method **calls a function with a given `this` value**, and arguments provided as an **array** (or an array-like object).

[`call()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
> The `call()` method **calls a function with a given `this` value** and arguments provided **individually**.


## bind()

### create function with specified `this` target object
#### normal case
A simple example where `this` keyword performs trickly.
``` javascript
var name = 'Bo'
var obj = {
  name: 'Jo',
  yourname: function () {
    console.log(this.name)
  }
};

obj.yourname();
==> 'Jo'

var nameValue = obj.yourname;
nameValue();
==> 'Bo'
```
As stated in [_this_in_javascript_](./this_in_javascript.md), 
>when a function executes, it gets the `this` property—a variable with the value of the object that invokes the function where this is used.

It is why `nameValue()` returns `'Bo'` -- it gets execute in the context of `window`, with the `name` value of `Bo`. 

As the preceding definition stated, `bind` will create a new function for us, with specified obj which `this` points to.
``` javascript
var getYourname = obj.yourname.bind(obj);

getYourname();
==> 'Jo'
```

Problem solved.

#### `this` in closure
Another circumstances which `this` will do its job is set `this` pointed object in closure.
``` javascript
var name = 'Bo';
var obj = {
  name: 'Jo',
  yourname: function() {
    setTimeout(function() {
      console.log(this.name);
    }, 2000);
  }
};

obj.yourname();
==> Bo
```

In the above example, when the function which in `setTimeout` method executes, the context has been changed to `window` object.

Solution:
``` javascript
var name = 'Bo';
var obj = {
  name: 'Jo',
  yourname: function() {
    setTimeout(function() {
      console.log(this.name);
    }.bind(obj), 2000);
  }
};

obj.name()
==> Jo
```
Another example to demonstrate.
``` javascript
var name = 'Bo';
var obj = {
  name: 'Jo',
  yourname: function(cb) {
    cb()
  }
};

obj.yourname(function(){console.log(this.name)});
==> 'Bo'

// Solution is similar.
var obj = {
  name: 'Jo',
  yourname: function(cb) {
    cb().bind(obj)();
  }
};

obj.yourname(function(){console.log(this.name)})
==> 'Jo'
```
<br/>

Notice, if a function or method does not contain `this` in it, the newly created by `bind` method(just set the first parameters) will work no difference with the origin one.
``` javascript
var obj2 = {
  name: 'Jo',
  yourname: function() {
    console.log(obj2.name);
  }
};

obj2.yourname();
==> 'Jo'

// bind to window object
var getYourname = obj2.yourname.bind(window);

getYourname();
==> 'Jo'
```
### Curry a funtion
[Function Currying](http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/):
> Function Currying, also known as partial function application, is the use of a function (that accept one or more arguments) that returns a new function with some of the arguments already set.

``` javascript
// simple example
function greet(greeting, gender, name) {
  console.log(greeting + ' ' + gender + ' ' + name);
}

// we can simply use it directly
greet('hi', 'Mr.', 'Jo');
==> hi Mr. Jo

// or, we can preset some parameter values using bind method
// preset the first parameter
var sayHello = greet.bind(null, 'Hello');

sayHello('Mr.', 'Bo');
==> Hello Mr. Bo

// preset the second parameter
var greetingLady = greet.bind(null, null, 'Miss');

greetingLady('Hi', 'Lily');
==> null Miss Hi // we cannot skip the first parameter to set the later parameters
```











