const EventEmitter = require('events');
const fs = require('fs');

class WithTime extends EventEmitter {
  execute(asynFunc, ...args) {
    console.time('execute');
    asynFunc(...args, (err, data) => {
      if (err) {
        return this.emit('error', err);
      }

      console.timeEnd('execute');
    });
  }
};

const withTime = new WithTime();

withTime.execute(fs.readFile, '');
withTime.execute(fs.readFile, __filename);

// if 'error' event is not catched using following
// code, process will exit and The second execute call will not get executed.
withTime.on('error', (err) => {
  console.log(err);
});
