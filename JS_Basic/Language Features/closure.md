# Closure

To explain what closure is more comprehensively and precisely, I found [a great article](http://www.jibbering.com/faq/faq_notes/closures.html) and grabbed the definition about closure from it.
> A "closure" is an expression (typically a function) that can have free variables together with an environment that binds those variables (that "closes" the expression).<br/>
...<br/>
The simple explanation of a Closure is that ECMAScript allows **inner functions, function definitions and function expressions** that are **inside** the function bodes of **other functions**. And that those inner functions are allowed **access to all of the local variables, parameters and declared inner functions** within their outer function(s). A closure is formed when **one of those inner functions is made accessible outside of the function in which it was contained, so that it may be executed after the outer function has returned**. At which point it **still has access to** the local variables, parameters and inner function declarations of its outer function. Those local variables, parameter and function declarations (initially) have the values that they had when the outer function returned and may be interacted with by the inner function.

To understand closure features easiler, we will explain it through examples.

## closures have access to outer function's variables
A simple example:
``` javascript
function f(name) {
  var greeting = 'hi';
  function sayhi() {
    console.log(greeting + ' ' + name);
  }
  sayhi()
}

f('Bo')
==> hi Bo
```
Preceding very simple example just demonstrates us the basic rule: closures have access to outer function's variables.

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







