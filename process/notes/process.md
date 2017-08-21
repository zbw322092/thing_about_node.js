# process
## process.env
https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env
http://man7.org/linux/man-pages/man7/environ.7.html

> The process.env property returns an object containing the user environment.
``` javascript
{
  TERM: 'xterm-256color',
  SHELL: '/usr/local/bin/bash',
  USER: 'maciej',
  PATH: '~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin',
  PWD: '/Users/maciej',
  EDITOR: 'vim',
  SHLVL: '1',
  HOME: '/Users/maciej',
  LOGNAME: 'maciej',
  _: '/usr/local/bin/node'
}
```

> It is possible to modify this object, but such modifications **will not be reflected outside the Node.js process**. 

### process.stdin stdout stderr
https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_stdin
> The process.stdin property returns a stream connected to stdin (fd 0).

A note on process I/O
https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_a_note_on_process_i_o


### process.argv, process.argv0, process.execPath
https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_argv
`process.argv`
The process.argv property returns an **array** containing the **command line arguments** passed when the Node.js process was **launched**.
First element
  process.execPath
Second
  the path to the JavaScript file being executed
Remaining
  any additional command line arguments


`process.argv0`
The process.argv0 property stores a **read-only copy** of the original value of **`argv[0]`** passed when Node.js starts.

`process.execPath`
https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_execpath

The `process.execPath` property returns the **absolute pathname** of the **executable** that **started the Node.js process**.

