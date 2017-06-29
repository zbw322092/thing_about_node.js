# this in Javascript
To understand `this` keyword in javascrip, let's begin from an simple example:
'Bo is my brother, he is 24 years old'.
In the above sentence, we use 'he' to represent 'Bo'. We can still use 'Bo' in the later sentence, but it is not the most succinct way.
Similarly, in javascript `this` keyword points to the subject of the executing code which is an object.

Thanks for the [clear explanation](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/) about `this` from _http://javascriptissexy.com/_.
>the `this` keyword is similarly used to **refer to an object that the function (where this is used) is bound to**. The this keyword not only refers to the object but it also contains the value of the object.
...
when a function executes, it gets the `this` property—**a variable with the value of the object that invokes the function where this is used**.
...
The `this` reference **ALWAYS refers to (and holds the value of) an object**—a singular object—and it is usually used inside a function or a method
...
`this` is used inside a function (let’s say function A) and it contains the value of the object that **invokes function A**. We need `this` to access methods and properties of **the object that invokes function A**, especially since we don’t always know the name of the invoking object, and sometimes there is no name to use to refer to the invoking object. Indeed, this is really just a shortcut reference for the “antecedent object”—**the invoking object**.

The sum up above statement:
**`this` key word is usually defined in a function, it points to the object which invokes the function and it also holds values of the object.**

