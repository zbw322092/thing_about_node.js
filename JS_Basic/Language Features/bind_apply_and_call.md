# bind apply and call methods in Javascript
<!-- TOC -->

- [bind apply and call methods in Javascript](#bind-apply-and-call-methods-in-javascript)
  - [Definitions](#definitions)
  - [bind()](#bind)
    - [create function with specified `this` target object](#create-function-with-specified-this-target-object)
      - [normal case](#normal-case)
      - [`this` in closure](#this-in-closure)
      - [borrow method which contains `this`](#borrow-method-which-contains-this)
    - [Curry a funtion](#curry-a-funtion)
  - [apply() and call()](#apply-and-call)
    - [Set `this` explicitly](#set-this-explicitly)
    - [pass parameters using `apply()` and `call()`](#pass-parameters-using-apply-and-call)
    - [Borrow method using `apply()` and `call()`](#borrow-method-using-apply-and-call)

<!-- /TOC -->
<br/>

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
#### borrow method which contains `this`
Methods can be passed around in javascript, however, some methods contain `this` keywords, which will cause problems if we just use these methods in other object directly. We are be able to solve this kind of problems using `bind()`.

``` javascript
var obj = {
  name: 'Bo',
  yourname: function() {
    console.log(this.name);
  }
};

var obj2 = {
  name: 'Jo'
};

// Now we want add a method to obj2 which would also console the name value in obj2.
obj2.myname = obj.yourname;

obj2.myname();
==> 'Jo' // it's not the name value in obj2.


// also, we solve this problem using bind()
obj2.myname = obj.yourname.bind(obj2);

obj2.myname();
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

## apply() and call()
`apply()` and `call()` works similarly, them both 
> call a function with a given this value and arguments

They are just different in the way of passing parameters. Parameters are passed as array in `apply()` method, while in `call()`, parameters are passed individually.

Notice, `bind()` method will return a new function which specified `this` target object, However, `apply()` and `call()` will not return a new function, they execute function.

### Set `this` explicitly
We solve problem using `bind()` method in first example in this post. Apparently, we can solve the example one problem using `apply()` and `call()`.
``` javascript
var name = 'Bo'
var obj = {
  name: 'Jo',
  yourname: function () {
    console.log(this.name)
  }
};

var nameValue = obj.yourname;
nameValue();
==> 'Bo'

// solution:
nameValue.apply(obj);
==> Jo
nameValue.call(obj);
==> Jo
```

When we do not pass parameters into methods, `apply` and `call` just work the same.

### pass parameters using `apply()` and `call()`
Under some situation, the emphasis of `apply()` and `call()` do not fall on making `this` target object clear, they are able to help us pass some parameters into functions.
``` javascript
// We can use some Math methods directly just like this:
Math.max(1,2,5,4,0);
==> 5

// Now, we have an array, which contains a series of numbers, and we would like to pick out the maxium number. apply() method can help.
var arr = [1,2,5,4,0];
Math.max(arr);
==> NaN

Math.max.apply(null, arr);
==> 5 // working!
```
In the above example, we set the first parameter in `apply()` method as `null`, since no `this` key word in `Math.max`, which need us to specified its target object. We just passed in parameters and it works.

### Borrow method using `apply()` and `call()`
Just like what we demonstrate above, we can borrow some native javascript method and use them in somewhere we need. Also, we can just borrow normal methods when necessary.
Since specified `this` target object and passing into proper parameters are two key tasks in method borrowing, `apply()` or `call()` will do their job.
``` javascript
// borrow array method and use it on string
Array.prototype.slice.call('itisastring', 0, 2);
==> ["i", "t"]

// borrow self defined method
var obj = {
  name: 'Jo',
  greeting: function(gender) {
    console.log(gender + ' ' + this.name);
  }
};

obj.greeting('Mr.');
==> Mr. Jo

// now, we borrow it.
var obj2 = {
  name: 'Lily'
};

obj.greeting.call(obj2, 'Miss.');
==> Miss. Lily // job done
```

I just list some simple examples above to demonstrate how `apply()` and `call()` should be used. `apply()` and `call()` can be used in various places in our code and they are make javascript more flexible and productive.
















