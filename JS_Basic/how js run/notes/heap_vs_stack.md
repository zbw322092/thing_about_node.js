# Heap vs Stack

## Differences between Stack and Heap
http://net-informations.com/faq/net/stack-heap.htm

### stack feature
> Stack is used for **static** memory allocation and Heap for **dynamic** memory allocation, both stored in the computer's RAM .

> Variables allocated on the stack are **stored directly to the memory** and access to this memory is very **fast**, and it's allocation is dealt with when the program is **compiled**.

> The stack is always reserved in a **LIFO** order, the most recently reserved block is always the next block to be freed.

### heap feature
> Variables allocated on the heap have their memory allocated at **run time** and accessing this memory is a bit **slower**, but the heap size is only limited by the size of **virtual memory**.

> Element of the heap have **no dependencies** with each other and can always be accessed **randomly** at any time. You can allocate a block at any time and free it at any time. This makes it much **more complex to keep track** of which parts of the heap are allocated or free at any given time.
<br>
<br>
<br>
<br>

> In a multi-threaded situation each **thread** will have its own completely **independent stack** but they will **share the heap**. Stack is **thread specific** and Heap is **application specific**.

## other resources about stack and heap

https://stackoverflow.com/questions/79923/what-and-where-are-the-stack-and-heap


