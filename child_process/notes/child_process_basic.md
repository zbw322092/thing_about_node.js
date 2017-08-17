# child process

1. Node.js Child Processes: Everything you need to know

https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a


## The `Child Processes` Module
> The `child_process` module enables us to access Operating System functionalities by running any system command inside a, well, child process.

> We can control that **child process input stream**, and **listen to its output stream**. We can also control the **arguments** to be passed to the underlying OS command, and we can do whatever we want with that command’s output.

> We can, for example, pipe the **output of one command as the input to another** (just like we do in Linux) as all inputs and outputs of these commands can be presented to us using Node.js `streams`.

### Spawned Child Processes

> The `spawn` function launches a command in a new process and we can use it to pass that command any arguments.

> The result of executing the spawn function (the child object above) is a **`ChildProcess` instance**, which implements the **`EventEmitter`** API. 

`ChildProcess` instance events:
> The events that we can register handlers for with the ChildProcess instances are `exit` `disconnect`, `error`, `close`, and `message`.<br/>

`stream` in child process
> Every `child process` also gets the three standard `stdio streams`, which we can access using `child.stdin`, `child.stdout`, and `child.stderr`.

In child process: 
  `stdout` and `stderr`:  `readable stream`
  `stdin`: `writable stream`

In main process is inversed.


### Shell Syntax and the exec function

> ...`exec` **buffers** the command’s generated output and passes the whole output value to a callback function (instead of using streams, which is what spawn does).

Official Doc
`child_process.exec(command[, options][, callback])`

https://nodejs.org/dist/latest-v8.x/docs/api/child_process.html#child_process_child_process_exec_command_options_callback


> The `spawn` function is a much better choice when the **size** of the data expected from the command is large, because that data will be streamed with the standard IO objects.

Now, there is an better choice:
> We can make the spawned child process **inherit** the standard IO objects of its parents if we want to, but also, more importantly, we can make the spawn function use the shell syntax as well.

``` javascript
const child = spawn('find . -type f', {
  stdio: 'inherit',
  shell: true
});
```

`child_process.spawn(command[, args][, options])`
https://nodejs.org/dist/latest-v8.x/docs/api/child_process.html#child_process_child_process_spawn_command_args_options

> The `options.stdio` option is used to configure the **pipes** that are established **between the parent and child process**.







<br>
<br>
<br>
<br>
2. linux `find` command

http://www.binarytides.com/linux-find-command-examples/

3. linux `wc` command

https://www.tecmint.com/wc-command-examples/

> The `wc` (word count) command in Unix/Linux operating systems is used to find out **number of newline count, word count, byte and characters count in a files** specified by the file arguments.

``` bash
# wc [options] filenames
```


4. linux `ps` command

http://linuxcommando.blogspot.com/2008/09/how-to-get-process-start-date-and-time.html

5. linux `grep` command

https://www.cyberciti.biz/faq/howto-use-grep-command-in-linux-unix/

The syntax is as follows:

``` bash
grep 'word' filename
grep 'word' file1 file2 file3
grep 'string1 string2'  filename
cat otherfile | grep 'something'
command | grep 'something'
command option1 | grep 'data'
grep --color 'data' fileName
```

`grep` examples:
http://www.thegeekstuff.com/2009/03/15-practical-unix-grep-command-examples







