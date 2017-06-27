# Object-oriented Javascript
Javascript is one Object-oriented programming(OOP) language. In Javascript, Object is building block of our program. 

## Inheritance
In JS, we will notice this phenomenon: when we define two objects, these objects will have some common methods.
Executing following code in browser console:
``` javascript
var a = {age: 23};
undefined
var b = {age: 24};
undefined
a.hasOwnProperty
function hasOwnProperty() { [native code] }
b.hasOwnProperty
function hasOwnProperty() { [native code] }
b.hasOwnProperty === b.hasOwnProperty
true
```
Now, we may have some questions:
1. Where those methods come from(we just define an 'age' property in object).
2. Why two different objects have the same methods.

Steps go on:
``` javascript
a.__proto__
Object {__defineGetter__: function, __defineSetter__: function, hasOwnProperty: function, __lookupGetter__: function, __lookupSetter__: function…}

b.__proto__
Object {__defineGetter__: function, __defineSetter__: function, hasOwnProperty: function, __lookupGetter__: function, __lookupSetter__: function…}

a.__proto__ === b.__proto__
true

a.__proto__ === Object.prototype
true
```
Proceding code may tell us some basic facts: when defining objects(or any other kinds of data), the variable will inherit some perperties and methods from constructor. It is called **Inheritance** in OOP.

#### What is Inheritance
To explain inheritance, we are be able to get a formal definition from [wikipedia](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)):

>In object-oriented programming, inheritance is when an object or class is based on another object (prototypal inheritance) or class (class-based inheritance), using the same implementation (inheriting from an object or class: inheriting behavior, programming by difference) or specifying a new implementation to maintain the same behavior (realizing an interface). Such an inherited class is called a subclass of its parent class or super class. It is a mechanism for code reuse and to allow independent extensions of the original software via public classes and interfaces. The relationships of objects or classes through inheritance give rise to a hierarchy.

We can extract several key words from this definition: _based on, the same, difference._ 

We might explain inheritance in plain language and analogy: You inherit some characteristics from our parents( DNA, height, looks, etc.). Also, your brother or sister inherit some characteristics from your parents. You looks like your brother or sister since you both inherit from the same parents and you have the same or similar characteristics with you parents just because you inherit from them. On the other hand, you do not looks exact the same as your parent or brother, since you have your own personal difference.






