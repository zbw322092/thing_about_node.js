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

### `this` in closure
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
When we invoke `sayhi` method in `o` object, context will change, and in this case(`o.click(o2.sayhi)`), `this` ponits to `window` object.

One more example:
``` javascript
var o = {
  m1: function() {
    (function() {
      console.log(this)
    })()
  },
  m2: function(cb) {
    cb()
  },
  m3: function() {
    console.log(this)
  }
};

o.m1();
==> window object

o.m2(function(){
	console.log(this)
});
==> window.object

o.m3();
==> Object {m1: function, m2: function, m3: function}
// it is clear that only the 'this' in third method which does not have closure, points to 'o' object.
```

Well, if we would like to prevent what we saw happen, here is the solution:
``` javascript
o.click(o2.sayhi.bind(o2));
==> hi  bo

o.click(o2.sayhi.bind(o));
==> hi  John
// well done. we will explain bind,apply and call method in another post.
```

### Sign method with `this` keyword to other variable
``` javascript
var name = 'Jo';
var o = {
	name: 'Bo',
	sayhi: function() {
		console.log('hi ', this.name);
	}
};

o.sayhi()
==> hi  Bo

// now, we sign 'o.sayhi' method to an variable and then call it;
var greeting = o.sayhi;

greeting()
==> hi  Jo
```

Since we signed method to `greeting` and call the method in different scope, `this` points to different object.

Solution is using `bind` method to explicitly tell `this` which object it should point to.
``` javascript
var greeting = o.sayhi.bind(o);

greeting();
==> hi  Bo
```

### `this` when borrowing method
``` javascript
var o = {
	name: 'Bo',
	sayhi: function() {
		console.log('hi ', this.name);
	}
};

var me = {
  name: 'Jo',
  greeting: null,
  greetingAgain: null
};

me.greeting = o.sayhi;

me.greeting();
==> hi Jo

me.greetingAgain = o.say();
me.greetingAgain;
==> hi Bo
```
As we can see, if we sign a method in object A to a method of object B, and executing the newly signed method, `this` key word in the method will point to object B.













