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










