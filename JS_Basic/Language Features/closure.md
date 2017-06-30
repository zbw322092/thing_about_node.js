# Closure
<!-- TOC -->

- [Closure](#closure)
  - [closures have access to outer function's variables](#closures-have-access-to-outer-functions-variables)
  - [closures have access to outer function's variables even after the outer function has returned](#closures-have-access-to-outer-functions-variables-even-after-the-outer-function-has-returned)
  - [closures keep local variables by references](#closures-keep-local-variables-by-references)
  - [local variables will be updated every time outer function be called](#local-variables-will-be-updated-every-time-outer-function-be-called)
  - [closure in loop](#closure-in-loop)

<!-- /TOC -->

To explain what closure is more comprehensively and precisely, I found [a great article](http://www.jibbering.com/faq/faq_notes/closures.html) and grabbed the definition about closure from it.
> A "closure" is an expression (typically a function) that can have free variables together with an environment that binds those variables (that "closes" the expression).<br/>
...<br/>
The simple explanation of a Closure is that ECMAScript allows **inner functions, function definitions and function expressions** that are **inside** the function bodes of **other functions**. And that those inner functions are allowed **access to all of the local variables, parameters and declared inner functions** within their outer function(s). A closure is formed when **one of those inner functions is made accessible outside of the function in which it was contained, so that it may be executed after the outer function has returned**. At which point it **still has access to** the local variables, parameters and inner function declarations of its outer function. Those local variables, parameter and function declarations (initially) have the values that they had when the outer function returned and may be interacted with by the inner function.

To understand closure features easiler, we will explain it through examples.

## closures have access to outer function's variables
A simple example:
``` javascript
// example one
function f(name) {
  var greeting = 'hi';
  function sayhi() {
    console.log(greeting + ' ' + name);
  }
  sayhi()
}

f('Bo')
==> hi Bo


// example two
function f() {
	function sayhi(){
		console.log(name)
	}
	var name = 'Jo'
	return sayhi;
}

f()();
==> Jo

// example three
function f() {
	function sayhi(){
		console.log(name)
	}
	sayhi();
	var name = 'Jo'
}

f();
==> undefined
```
Preceding very simple examples just demonstrate us the basic rule: closures have access to outer function's variables.

## closures have access to outer function's variables even after the outer function has returned
``` javascript
function f(name) {
  var greeting = 'hi';
  function sayhi() {
    console.log(greeting + ' ' + name);
  }
  return sayhi;
}

var saySomething = f('Jo'); // At this point, function 'f' has been returned.

// But we are still able to get access to the outter variable
saySomething();
==> hi Jo
```

It is a language feature, I not very clearly understand what happened internally. I grab a short explanation from [this stackoverflow answer](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work):
>a closure is a stack frame which is allocated when a function starts its execution, and not freed after the function returns (as if a 'stack frame' were allocated on the heap rather than the stack!).

Another related [answer](https://stackoverflow.com/questions/25642341/how-do-closures-have-access-to-the-outer-functions-variables-even-after-the-out).

## closures keep local variables by references
``` javascript
function f() {
  var count = 1;
  return {
    set: function (num) {
      count = num;
    },
    get: function () {
      console.log(count);
    }
  }
}

var test = f(); // At this point, outer function has returned.

test.get();
==> 1

test.set(12);
test.get();
==> 12
```
`test.set(12);` sign a new value to `num`, and `num` is kept by reference in closure, so this operation will affect `test.get();` result.

It is just like following simple example:
``` javascript
var o = {
	name: 'Jo'
};

// n keep reference to o
var n = o;

n.name = 'Bo';
"Bo"

o
Object {name: "Bo"}


// sign primitive value to a new variable
var s = 'well';

var ns = s;

ns = 'ok'
"ok"

// s will not be change
s
"well"
```
The difference is, in closure, even the local variable is primitive value, it is kept by reference.

## local variables will be updated every time outer function be called
Slightly change an preceding example
``` javascript
function f() {
  var count = 1;
  return {
    set: function (num) {
      count = num;
    },
    get: function () {
      console.log(count);
    }
  }
}

f().get();
==> 1

f().set(12);

f().get();
==> 1 // still 1, not 12
```
When we second time executing `f().get()`, the returned value is still `1`, it is due to that when we executing `f().get()` we call `f()` again and the local variables are reset.

## closure in loop
Thing becomes tricky when mix closure and loop. Caution about that.
``` javascript
function f() {
  var obj = {};
  for (var i = 0; i < 6; i++) {
    obj[i] = function loopNow() {
      return i
    }
  }
  return obj;
}

var result = f();
result[0]();
==> 6 // whoops...
```

What happened above? `loopNow` is a closure which get access to variable `i` via reference. When we execute `loopNow` by `result[0]()`, `i` has already changed to `6`. Yes, `i` is accessed via reference, so it is 6 now.

Now, solution for that -- invoke closure immediately! Or, saying, Immediately Invoked Function Expression (IIFE).

``` javascript
// modify the above function
function f() {
  var obj = {};
  for (var i = 0; i < 6; i++) {
    obj[i] = (function loopNow() {
      return i
    })();
  }
  return obj;
}

var result = f();
result[0];
==> 0
result[1]
==> 1
...

// or, we can modify like this:
function f() {
  var obj = {};
  for (var i = 0; i < 6; i++) {
    function loopNow() {
      return i
    }
    obj[i] = loopNow();
  }
  return obj;
}

// the same as above
var result = f();
result[0];
==> 0
result[1]
==> 1
```


<br/>
<br/>
<br/>
<br/>
References:<br/>
[1] http://www.jibbering.com/faq/faq_notes/closures.html<br/>
[2] https://stackoverflow.com/questions/111102/how-do-javascript-closures-work<br/>
[3] https://stackoverflow.com/questions/25642341/how-do-closures-have-access-to-the-outer-functions-variables-even-after-the-out<br/>
[4] http://javascriptissexy.com/understand-javascript-closures-with-ease/<br/>
<br/>

Further Reading:<br/>
[1] http://www.crockford.com/javascript/private.html<br/>
[2] https://en.wikipedia.org/wiki/First-class_citizen<br/>
[3] https://en.wikipedia.org/wiki/Non-local_variable
