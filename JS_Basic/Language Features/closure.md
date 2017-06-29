# Closure

To explain what closure is more comprehensively and precisely, I found [a great article](http://www.jibbering.com/faq/faq_notes/closures.html) and grabbed the definition about closure from it.
> A "closure" is an expression (typically a function) that can have free variables together with an environment that binds those variables (that "closes" the expression).<br/>
The simple explanation of a Closure is that ECMAScript allows **inner functions, function definitions and function expressions** that are **inside** the function bodes of **other functions**. And that those inner functions are allowed **access to all of the local variables, parameters and declared inner functions** within their outer function(s). A closure is formed when **one of those inner functions is made accessible outside of the function in which it was contained, so that it may be executed after the outer function has returned**. At which point it **still has access to** the local variables, parameters and inner function declarations of its outer function. Those local variables, parameter and function declarations (initially) have the values that they had when the outer function returned and may be interacted with by the inner function.

To understand closure features easiler, we explain it through examples.




