// myReduce method
Array.prototype.myReduce = function (callback) {
  var a = 0;
  for (let i = 0; i < this.length; i++) {
    callback((a = a + this[i]));
  }

  return a;
};
