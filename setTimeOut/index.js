setTimeout(() => {
  console.log('setTimeout()');
}, 100);

console.log('global');

//3秒間動作を止める処理
let end = new Date().getTime() + 3000;
while (new Date().getTime() < end) {}
