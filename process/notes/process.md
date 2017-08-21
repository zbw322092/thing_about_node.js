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

