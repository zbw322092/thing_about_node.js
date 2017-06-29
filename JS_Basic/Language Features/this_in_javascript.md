# this in Javascript
To understand `this` keyword in javascrip, let's begin from an simple example:
'Bo is my brother, he is 24 years old'.
In the above sentence, we use 'he' to represent 'Bo'. We can still use 'Bo' in the later sentence, but it is not the most succinct way.
Similarly, in javascript `this` keyword points to the subject of the executing code which is an object.

## What `this` stands for
Thanks for the [clear explanation](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/) about `this` from _http://javascriptissexy.com/_.
>the `this` keyword is similarly used to **refer to an object that the function (where this is used) is bound to**. The this keyword not only refers to the object but it also contains the value of the object.<br/>
...<br/>
when a function executes, it gets the `this` property—**a variable with the value of the object that invokes the function where this is used**.<br/>
...<br/>
The `this` reference **ALWAYS refers to (and holds the value of) an object**—a singular object—and it is usually used inside a function or a method<br/>
...<br/>
`this` is used inside a function (let’s say function A) and it contains the value of the object that **invokes function A**. We need `this` to access methods and properties of **the object that invokes function A**, especially since we don’t always know the name of the invoking object, and sometimes there is no name to use to refer to the invoking object. Indeed, this is really just a shortcut reference for the “antecedent object”—**the invoking object**.<br/>
...<br/>
**`this` is not assigned a value until an object invokes the function where `this` is defined**

Summing up above statement:
**`this` key word is usually defined in a function, it points to the object which invokes the function and it also holds values of the object.**

Several simple examples:
``` javascript
// example 1:
function f(){
	console.log('What is this: ', this);
}

f();
// window object
==> What is this:  Window {stop: function, open: function, alert: function, confirm: function, prompt: function…}

// example 2:
var o = {
	f: function(){
	  console.log('What is this: ', this);
  }
};
o.f();
o.f()
// o object
==> What is this:  Object {f: function}
```

## More(tricky) `this` examples
### `this` ponits to global object
In browser environment, global object is `window`, and all the global variables defined on `window` object. 
``` javascript
function f() {
  console.log(this);
}
// when execute f() is equivalent to following code:
window.f();

// Since f is invoked by window object, this keyword points to it.
```

### `this` in callback function
An example:
``` javascript
// click method in o accept a callback function
var o = {
  name: 'John',
	click: function(cb) {
		cb()
	}
};

// another object
var o2 = {
	name: 'bo',
	sayhi: function(){
		console.log('hi ', this.name);
	}
};

// Let's see what will happen
o2.sayhi()
==> hi  bo // just as what we expect

o.click(o2.sayhi)
==> hi  // something tricky happens
```
When we invoke `sayhi` method in `o` method, context will change, and in this case(`o.click(o2.sayhi)`), `this` ponits to `window` object.


Well, if we would like to prevent what we saw happen, here is the solution:
``` javascript
o.click(o2.sayhi.bind(o2));
==> hi  bo

o.click(o2.sayhi.bind(o));
==> hi  John
// well done. we will explain bind,apply and call method in another post.
```








