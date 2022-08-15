// myMap method
Array.prototype.myMap = function (callback) {
  var arr = [];

  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i]));
  }

  return arr;
};
