var t = new Date();
setInterval(function () {
  console.log(new Date() - t);
  t = new Date();
}, 100);