// code.js 内部代码
self.onmessage = function (event) {
  console.log(2323432);
  self.postMessage(`hello, ${event.data}!`);
};
