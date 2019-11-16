setTimeout(() => {
  console.log('setTimeout()');
}, 100);

setImmediate(() => {
  console.log('setImmediate()');
});

Process.nextTick(() => {
  console.log('Process.nextTick()');
});

Promise.resolve().then(() => {
  console.log('Promise.resolve().then(()');
});
