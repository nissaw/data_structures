var Stack = function() {
	this.count = 0;
  
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


Stack.prototype = {
  push: function(value) {
    count++
  },
  pop: function() {},
  size: function() {
    return this.count;
  }
}