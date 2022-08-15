// myFilter method
Array.prototype.myFilter = function (callback) {
  var arr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) == true) {
      arr.push(this[i]);
    }
  }

  return arr;
};
